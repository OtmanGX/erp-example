import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromProductDraft from './product-draft.reducer';
import * as ProductDraftSelectors from './product-draft.selectors';
import * as ProductsActions from './product-draft.actions';

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

  constructor(
    private store: Store,
  ) { }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadAllProducts(draft_id: number) {
    this.dispatch(ProductsActions.loadProduct({ draft_id }));
  }

  addGlass(product) {
    let glass = {
      ...product,
      quantity: product.heigth * product.width * product.count,
      m2: product.heigth * product.width * product.count,
      ml: 2 * (product.heigth + product.width) * product.count,
      total_price: product.heigth * product.width * product.price * product.count,
    }
    this.dispatch(ProductsActions.addGlass({ glass }))
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
    this.dispatch(ProductsActions.addService({ service }))
  }
}
