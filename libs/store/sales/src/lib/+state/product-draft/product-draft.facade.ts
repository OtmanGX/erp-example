import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import * as ProductDraftSelectors from './product-draft.selectors';
import * as ProductsActions from './product-draft.actions';
import { map, reduce } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Amount } from "./products-draft.models";
import { PaymentsFacade } from "../payments/payments.facade";
import { Payment as PaymentsEntity } from "@tanglass-erp/core/sales";

@Injectable()
export class ProductDraftFacade {
  loaded$ = this.store.pipe(
    select(ProductDraftSelectors.getProductLoaded)
  );
  allProduct$ = this.store.pipe(
    select(ProductDraftSelectors.getAllProduct)
  );
  selectedProducts$=this.store.pipe(
    select(ProductDraftSelectors.getSelectedProducts)
  )
  selectedProduct$ = this.store.pipe(
    select(ProductDraftSelectors.getSelectedProduct)
  );
  amounts$ = new BehaviorSubject<Amount[]>([new Amount()]);
  orderCompanies;
  constructor(
    private store: Store,
    public paymentsFacade: PaymentsFacade
  ) { }
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
  loadSelectedProducts(draft_id: number) {
    this.dispatch(ProductsActions.loadSelectedProducts({ draft_id }));
  }
  addGlass(product):void {
    let glass = {
      ...product,
      count: parseInt(product.count),
      quantity: parseFloat(product.heigth) * parseFloat(product.width) * parseFloat(product.count),
      m2: parseFloat(product.heigth) * parseFloat(product.width) * parseFloat(product.count),
      ml: 2 * (parseFloat(product.heigth) + parseFloat(product.width)) * product.count,
      total_price: parseFloat(product.heigth) * parseFloat(product.width) * parseFloat(product.price) * parseFloat(product.count),
    }
    this.dispatch(ProductsActions.addGlass({ glass }));
  }
  addCustomerProduct(product):void {
    let customer_item = {
      ...product,
      count: parseInt(product.count),
      quantity: parseFloat(product.heigth) * parseFloat(product.width) * parseFloat(product.count),
      m2: parseFloat(product.heigth) * parseFloat(product.width) * parseFloat(product.count),
      ml: 2 * (parseFloat(product.heigth) + parseFloat(product.width)) * product.count,
      total_price:0,
    }
    this.dispatch(ProductsActions.addCustomerItem({ customer_item }));
  }
  addAccessory(product):void {
    let accessory = {
      ...product,
      total_price: product.quantity * product.price,
    }
    this.dispatch(ProductsActions.addAccessory({ accessory }))
  }
  addConsumable(product):void {
    let consumable = {
      ...product,
      total_price: product.quantity * product.price,
    }
    this.dispatch(ProductsActions.addConsumable({ consumable }))
  }
  addService(product):void {
    let service = {
      ...product,
      total_price: product.quantity * product.price,
    }
    this.dispatch(ProductsActions.addService({ service }))

  }
  updateCompanyAmount(company: string):Amount {
    let amount: Amount;
    this.allProduct$.pipe(map(
      products => {
        return products.filter(
          value => value.company_name == company).map(
            obj =>
            ({
              company: obj.company_name,
              total_HT: parseFloat((obj.total_price * (5 / 6)).toFixed(2)),
              total_TTC: parseFloat(obj.total_price.toFixed(2)),
              total_TVA: parseFloat((obj.total_price / 6).toFixed(2)),
            }
            )
          ).reduce(function (accumulator, product: Amount) {
            return {
              company: product.company,
              total_HT: parseFloat((product.total_HT + accumulator.total_HT).toFixed(2)),
              total_TTC: parseFloat((product.total_TTC + accumulator.total_TTC).toFixed(2)),
              total_TVA: parseFloat((product.total_TVA + accumulator.total_TVA).toFixed(2)),
            };
          }, new Amount())
      }
    )).subscribe(data => amount = data)
    return amount
  }
  getCompanies():void {
    this.allProduct$.subscribe(
      products => {
        this.orderCompanies = [... new Set(products.map(product => product.company_name))]
      })
  }
  updateAmounts():void {
    let amounts: Amount[] = []
    this.getCompanies();
    this.orderCompanies?.forEach(element => {
      amounts.push(this.updateCompanyAmount(element))
    });
    amounts.push(amounts.reduce(function (accumulator, product: Amount) {
      return {
        company: 'Total',
        total_HT: product.total_HT + accumulator.total_HT,
        total_TTC: product.total_TTC + accumulator.total_TTC,
        total_TVA: product.total_TVA + accumulator.total_TVA,
      };
    }, new Amount()));
   
    this.amounts$.next(amounts);
  }
  removeProduct(productId):void {
    this.dispatch(ProductsActions.removeProduct({ productId }));
    this.updateAmounts()
  }
  resetState() {
    this.dispatch(ProductsActions.resetState());
  }
}
