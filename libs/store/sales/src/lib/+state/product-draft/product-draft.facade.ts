import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import * as ProductDraftSelectors from './product-draft.selectors';
import * as ProductsActions from './product-draft.actions';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  InsertedProduct,
  Product_draft,
  Sales_Product_Type_Enum,
} from '@tanglass-erp/core/sales';
import { Amount, Bis, ProductGroups } from './products-draft.models';
import { PaymentsFacade } from '../payments/payments.facade';
import { groupeByCode } from './adapters';
import { Product } from '@tanglass-erp/store/sales';

@Injectable()
export class ProductDraftFacade {
  loaded$ = this.store.pipe(select(ProductDraftSelectors.getProductLoaded));
  allProduct$ = this.store.pipe(select(ProductDraftSelectors.getAllProduct));
  selectedProduct$ = this.store.pipe(
    select(ProductDraftSelectors.getSelectedProduct)
  );
  selectedGlasses$ = this.store.pipe(
    select(ProductDraftSelectors.getSelectedGlasses)
  );
  dimensions$ = this.store.pipe(select(ProductDraftSelectors.getDimensions));
  amounts$ = new BehaviorSubject<Amount[]>([new Amount()]);
  orderCompanies;

  constructor(private store: Store, public paymentsFacade: PaymentsFacade) {}
  dispatch(action: Action): void {
    this.store.dispatch(action);
  }
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
  setDraftProducts(products: Product_draft[]): void {
    this.dispatch(ProductsActions.setProductsState({ products }));
  }
  addGlass(product: Product): void {
    let glasses = [];
    product.dimensions.map((dimension) => {
      let { dimensions, ...glass } = product;
      glasses.push({
        ...glass,
        count: dimension.count,
        heigth: dimension.heigth,
        width: dimension.width,
        quantity: parseFloat(
          (dimension.heigth * dimension.width * dimension.count).toFixed(2)
        ),
        m2: parseFloat(
          (dimension.heigth * dimension.width * dimension.count).toFixed(2)
        ),
        ml: parseFloat(
          (2 * (dimension.heigth + dimension.width) * dimension.count).toFixed(
            2
          )
        ),
        total_price: parseFloat(
          (
            dimension.heigth *
            dimension.width *
            dimension.count *
            product.price
          ).toFixed(2)
        ),
      });
    });
    this.dispatch(ProductsActions.addManyGlasses({ glasses }));
  }
  addCustomerProduct(product: Product): void {
    let glasses = [];
    product.dimensions.map((dimension) => {
      let { dimensions, ...glass } = product;
      glasses.push({
        ...glass,
        price: 0,
        count: dimension.count,
        heigth: dimension.heigth,
        width: dimension.width,
        quantity: parseFloat(
          (dimension.heigth * dimension.width * dimension.count).toFixed(2)
        ),
        m2: parseFloat(
          (dimension.heigth * dimension.width * dimension.count).toFixed(2)
        ),
        ml: parseFloat(
          (2 * (dimension.heigth + dimension.width) * dimension.count).toFixed(
            2
          )
        ),
        total_price: 0,
      });
    });
    this.dispatch(ProductsActions.addManyGlasses({ glasses }));
  }
  addAccessory(product: InsertedProduct): void {
    let accessory = {
      ...product,
      total_price: parseFloat((product.quantity * product.price).toFixed(2)),
    };
    this.dispatch(ProductsActions.addAccessory({ accessory }));
  }
  addConsumable(product: InsertedProduct): void {
    let consumable = {
      ...product,
      total_price: parseFloat((product.quantity * product.price).toFixed(2)),
    };
    this.dispatch(ProductsActions.addConsumable({ consumable }));
  }
  dimensionChoice(product: InsertedProduct) {
    let withM2: Boolean;
    let withML: Boolean;
    this.dimensions$
      .subscribe((value) => {
        if (product.quantity == value.selectedM2) {
          withM2 = true;
        } else if (product.quantity == value.selectedML) {
          withML = true;
        } else {
          withM2 = false;
          withML = false;
        }
      })
      .unsubscribe();
    return { withM2, withML };
  }
  addManyServices(product: InsertedProduct): void {
    let services = [];
    this.selectedGlasses$
      .subscribe((glasses) => {
        glasses?.map((glass) => {
          let quantity;
          if (this.dimensionChoice(product).withM2) {
            quantity = glass.m2;
          } else if (this.dimensionChoice(product).withML) {
            quantity = glass.ml;
          } else {
            quantity = product.quantity;
          }
          services?.push({
            ...product,
            dependent_id: glass.glass_draft.id,
            quantity: quantity,
            total_price: parseFloat((quantity * product.price).toFixed(2)),
          });
        });
      })
      .unsubscribe();
    this.dispatch(ProductsActions.addManyServices({ services }));
  }
  addManyConsumables(
    product: InsertedProduct,
    asAService: boolean = true
  ): void {
    let consumables = [];
    asAService
      ? this.selectedGlasses$
          .subscribe((glasses) => {
            glasses.map((glass) => {
              let quantity;
              if (this.dimensionChoice(product).withM2) {
                quantity = glass.m2;
              } else if (this.dimensionChoice(product).withML) {
                quantity = glass.ml;
              } else {
                quantity = product.quantity;
              }
              consumables.push({
                ...product,
                dependent_id: glass?.glass_draft?.id,
                quantity: quantity,
                total_price: parseFloat((quantity * product.price).toFixed(2)),
              });
            });
            this.dispatch(ProductsActions.addManyConsumables({ consumables }));
          })
          .unsubscribe()
      : this.addConsumable(product);
  }
  setSelectedGlasses(glasses: Product_draft[]) {
    this.dispatch(ProductsActions.selectManyGlasses({ glasses }));
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
  //Define each company amount from a specific order
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
  //Get companies that involve in a known order
  getCompanies(): void {
    this.allProduct$.subscribe((products) => {
      this.orderCompanies = [
        ...new Set(products.map((product) => product.company_name)),
      ];
    });
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
  //Each service depend on a glass product  dependent_id belown to glass
  getDependencies(id: string): Product_draft[] {
    let dependent_products: Product_draft[];
    this.allProduct$.subscribe((data) => {
      dependent_products = data.filter((item) => item.dependent_id == id);
    });
    return dependent_products;
  }
  // Bis items are the products that will be reproduced again ; because of a problem in the manufacturing
  addBisItems(products): void {
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
  // get the glass's dimensions to be reproduced , depending to number of pieces to be launched
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
  clearProducts(): void {
    this.dispatch(ProductsActions.clearProducts());
  }
}
