import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromPurchases from './deliveries.reducer';
import * as PurchasesSelectors from './deliveries.selectors';

@Injectable()
export class DeliveriesFacade {
  loaded$ = this.store.pipe(select(PurchasesSelectors.getPurchasesLoaded));
  allPurchases$ = this.store.pipe(select(PurchasesSelectors.getAllPurchases));
  selectedPurchases$ = this.store.pipe(select(PurchasesSelectors.getSelected));

  constructor(private store: Store<fromPurchases.PurchasesPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
