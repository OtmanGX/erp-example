import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import * as ProductDraftSelectors from './product-draft.selectors';
import * as ProductsActions from './product-draft.actions';
import { switchMap, map, catchError, reduce, filter } from 'rxjs/operators';
import { Product_draft } from "@tanglass-erp/core/sales";
import { Subscription, Subject, BehaviorSubject } from 'rxjs';

import { Amount } from "./products-draft.models";
@Injectable()
export class ProductDraftFacade {
  loaded$ = this.store.pipe(
    select(ProductDraftSelectors.getProductLoaded)
  );
  allProduct$ = this.store.pipe(
    select(ProductDraftSelectors.getAllProduct)
  );
  selectedProduct$ = this.store.pipe(
    select(ProductDraftSelectors.getSelectedProduct)
  );
  amounts$ = new BehaviorSubject<Amount[]>([new Amount()]);
  constructor(
    private store: Store,
  ) { }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadAllProducts(draft_id: number) {
    this.dispatch(ProductsActions.loadProducts({ draft_id }));
  }

  addGlass(product) {
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
  addCustomerProduct(product){

  }

  addAccessory(product) {
    let accessory = {
      ...product,
      total_price: product.quantity * product.price,
    }
    this.dispatch(ProductsActions.addAccessory({ accessory }))

  }
  addConsumable(product) {
    let consumable = {
      ...product,
      total_price: product.quantity * product.price,
    }
    this.dispatch(ProductsActions.addConsumable({ consumable }))

  }
  addService(product) {
    let service = {
      ...product,
      total_price: product.quantity * product.price,
    }
    console.log(service)
    this.dispatch(ProductsActions.addService({ service }))

  }

  updateCompanyAmount(company: string){
    let amount:Amount;
     this.allProduct$.pipe(map(
      products => {
        return products.filter(
          value => value.company_name == company).map(
            obj =>
            ({
              company: obj.company_name,
              total_HT: 0,
              total_TTC: obj.total_price,
              total_TVA: 0,
            }
            )
          ).reduce(function (accumulator, product: Amount) {
            return {
              company: product.company,
              total_HT: 0,
              total_TTC: product.total_TTC + accumulator.total_TTC,
              total_TVA: 0,
            };
          }, new Amount())
      }
    )).subscribe(data=>amount=data)
    return amount
  }
  getCompanies(): string[] {
    let companies;
    this.allProduct$.subscribe(
      products => {
        companies = [... new Set(products.map(product => product.company_name))]
      })
    return companies
  }

  updateAmounts():void {
    let amounts:Amount[] = []
    let companies = this.getCompanies()
    companies?.forEach(element => {
      amounts.push(this.updateCompanyAmount(element))
    });
    amounts.push(amounts.reduce(function (accumulator, product: Amount) {
      return {
        company: 'Total',
        total_HT: 0,
        total_TTC: product.total_TTC + accumulator.total_TTC,
        total_TVA: 0,
      };
    }, new Amount()))
    this.amounts$.next(amounts)
  }
}
