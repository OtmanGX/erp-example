import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import * as ProductDraftSelectors from './product-draft.selectors';
import * as ProductsActions from './product-draft.actions';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { InsertedProduct, Product_draft, Sales_Product_Type_Enum } from '@tanglass-erp/core/sales';
import { Amount, Bis, ProductGroups } from './products-draft.models';
import { PaymentsFacade } from '../payments/payments.facade';
import { DraftFacade } from '../draft/draft.facade';
import { groupeByCode } from './adapters';

@Injectable()
export class ProductDraftFacade {
  loaded$ = this.store.pipe(select(ProductDraftSelectors.getProductLoaded));
  allProduct$ = this.store.pipe(select(ProductDraftSelectors.getAllProduct));
  selectedProduct$ = this.store.pipe(
    select(ProductDraftSelectors.getSelectedProduct)
  );
  amounts$ = new BehaviorSubject<Amount[]>([new Amount()]);
  orderCompanies;

  constructor(
    private store: Store,
    public paymentsFacade: PaymentsFacade,
    private draft_facade: DraftFacade
  ) {}

  getProductsGroups(): Observable<ProductGroups> {
    return this.allProduct$.pipe(
      map((items) => ({
        glasses: items.filter(
          (item) =>
            (item.type == Sales_Product_Type_Enum.Verre ||
              item.type == Sales_Product_Type_Enum.ArticleClient) &&
            !item.isRepeated
        ),
        articles: groupeByCode(
          items.filter(
            (item) =>
              item.type !== Sales_Product_Type_Enum.Verre &&
              item.type !== Sales_Product_Type_Enum.ArticleClient &&
              !item.isRepeated
          )
        ),
        repeated: items.filter((item) => item.isRepeated),
      }))
    );
  }
  dispatch(action: Action): void {
    this.store.dispatch(action);
  }
  setDraftProducts(products: Product_draft[]): void {
    this.dispatch(ProductsActions.setProductsState({ products }));
  }
  addGlass(product): void {
    let glass = {
      ...product,
      count: parseInt(product.count),
      quantity:
        parseFloat(product.heigth) *
        parseFloat(product.width) *
        parseFloat(product.count),
      m2:
        parseFloat(product.heigth) *
        parseFloat(product.width) *
        parseFloat(product.count),
      ml:
        2 *
        (parseFloat(product.heigth) + parseFloat(product.width)) *
        product.count,
      total_price:
        parseFloat(product.heigth) *
        parseFloat(product.width) *
        parseFloat(product.price) *
        parseFloat(product.count),
    };
    this.dispatch(ProductsActions.addGlass({ glass }));
  }
  addCustomerProduct(product): void {
    let glass = {
      ...product,
      count: parseInt(product.count),
      quantity:
        parseFloat(product.heigth) *
        parseFloat(product.width) *
        parseFloat(product.count),
      m2:
        parseFloat(product.heigth) *
        parseFloat(product.width) *
        parseFloat(product.count),
      ml:
        2 *
        (parseFloat(product.heigth) + parseFloat(product.width)) *
        product.count,
      total_price: 0,
    };
    this.dispatch(ProductsActions.addGlass({ glass }));
  }
  addAccessory(product: InsertedProduct): void {
    let accessory = {
      ...product,
      total_price: product.quantity * product.price,
    };
    this.dispatch(ProductsActions.addAccessory({ accessory }));
  }
  addConsumable(product: InsertedProduct): void {
    let consumable = {
      ...product,
      total_price: product.quantity * product.price,
    };
    this.dispatch(ProductsActions.addConsumable({ consumable }));
  }
  addService(product: InsertedProduct): void {
    let service = {
      ...product,
      total_price: product.quantity * product.price,
    };
    this.dispatch(ProductsActions.addService({ service }));
  }
  updateCompanyAmount(company: string): Amount {
    let amount: Amount;
    this.allProduct$
      .pipe(
        map((products) => {
          return products
            .filter((value) => value.company_name == company)
            .map((obj) => ({
              company_name: obj.company_name,
              total_ht: parseFloat((obj.total_price * (5 / 6)).toFixed(2)),
              total_ttc: parseFloat(obj.total_price.toFixed(2)),
              total_tax: parseFloat((obj.total_price / 6).toFixed(2)),
            }))
            .reduce(function (accumulator, product: Amount) {
              return {
                company_name: product.company_name,
                total_ht: parseFloat(
                  (product.total_ht + accumulator.total_ht).toFixed(2)
                ),
                total_ttc: parseFloat(
                  (product.total_ttc + accumulator.total_ttc).toFixed(2)
                ),
                total_tax: parseFloat(
                  (product.total_tax + accumulator.total_tax).toFixed(2)
                ),
              };
            }, new Amount());
        })
      )
      .subscribe((data) => (amount = data));
    return amount;
  }
  getCompanies(): void {
    this.allProduct$.subscribe((products) => {
      this.orderCompanies = [
        ...new Set(products.map((product) => product.company_name)),
      ];
    });
  }
  updateAmounts(): void {
    let amounts: Amount[] = [];
    this.getCompanies();
    this.orderCompanies?.forEach((element) => {
      element ? amounts.push(this.updateCompanyAmount(element)) : {};
    });
    amounts.push(
      amounts.reduce(function (accumulator, product: Amount) {
        return {
          company_name: 'Total',
          total_ht: parseFloat(
            (product.total_ht + accumulator.total_ht).toFixed(2)
          ),
          total_ttc: parseFloat(
            (product.total_ttc + accumulator.total_ttc).toFixed(2)
          ),
          total_tax: parseFloat(
            (product.total_tax + accumulator.total_tax).toFixed(2)
          ),
        };
      }, new Amount())
    );

    this.amounts$.next(amounts);
  }
  removeProduct(id: string, dependent_id?: string): void {
    let ids: string[];
    dependent_id
      ? (ids = [
          ...this.getDependencies(dependent_id)?.map((product) => product.id),
          id,
        ])
      : (ids = [id]);
    this.dispatch(ProductsActions.removeProducts({ ids }));
    this.updateAmounts();
  }
  removeProducts(ids: string[]): void {
    this.dispatch(ProductsActions.removeProducts({ ids }));
  }
  getDependencies(id: string): Product_draft[] {
    let dependent_products: Product_draft[];
    this.allProduct$.subscribe((data) => {
      dependent_products = data.filter((item) => item.dependent_id == id);
    });
    return dependent_products;
  }
  getRepairingDimensions(
    products: Product_draft[],
    new_count: number
  ): Product_draft[] {
    let old_count: number;
    let response = products.map((product) => {
      product.type == Sales_Product_Type_Enum.Verre ||
      product.type == Sales_Product_Type_Enum.ArticleClient
        ? (old_count = product.count)
        : null;
      return {
        ...product,
        m2: product?.m2
          ? parseFloat(((product?.m2 / old_count) * new_count).toFixed(2))
          : null,
        ml: product.ml
          ? parseFloat(((product?.ml / old_count) * new_count).toFixed(2))
          : null,
        quantity: parseFloat(
          ((product?.quantity / old_count) * new_count).toFixed(2)
        ),
        price: 0,
        total_price: 0,
        count: product.count ? new_count : null,
      };
    });
    return response;
  }

  addBisItems(products) {
    products = products.map((product) => {
      const {
        status,
        glass_draft,
        delivered,
        service_draft,
        isLaunched,
        id,
        consumable_draft,
        ...item
      } = product;
      return item;
    });
    let glass = products.find(
      (item) =>
        (item.type == Sales_Product_Type_Enum.Verre ||
          item.type == Sales_Product_Type_Enum.ArticleClient) &&
        !item.isRepeated
    );
    glass = { ...glass, isRepeated: true };

    let services = products.filter(
      (item) => item.type == Sales_Product_Type_Enum.Service
    );
    let consumables = products.filter(
      (item) => item.type == Sales_Product_Type_Enum.Consommable
    );
    let item: Bis = {
      glass,
      services,
      consumables,
    };
    this.dispatch(ProductsActions.addReparationProducts({ item }));
  }
}
