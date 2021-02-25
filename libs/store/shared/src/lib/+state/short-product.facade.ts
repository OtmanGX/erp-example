import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromShortProduct from './short-product.reducer';
import * as ShortProductSelectors from './short-product.selectors';
import * as ShortProductsActions from './short-product.actions';

@Injectable()
export class ShortProductFacade {
  loaded$ = this.store.pipe(
    select(ShortProductSelectors.getShortProductLoaded)
  );
  allShortProduct$ = this.store.pipe(
    select(ShortProductSelectors.getAllShortProduct)
  );
  selectedShortProduct$ = this.store.pipe(
    select(ShortProductSelectors.getSelected)
  );

  constructor(
    private store: Store<fromShortProduct.ShortProductPartialState>
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
  loadAllShortProduct(){
    this.dispatch(ShortProductsActions.loadShortProduct());

  }
}
