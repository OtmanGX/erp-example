import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromPurchases from './deliveries.reducer';
import * as DeliveriesSelectors from './deliveries.selectors';
import * as DeliveryActions from './deliveries.actions';

@Injectable()
export class DeliveriesFacade {
  loaded$ = this.store.pipe(select(DeliveriesSelectors.getDeliveriesLoaded));
  allDeliveries$ = this.store.pipe(select(DeliveriesSelectors.getAllDeliveries));
  selectedDeliveries$ = this.store.pipe(select(DeliveriesSelectors.getSelected));

  constructor(private store: Store<fromPurchases.DeliveriesPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
  loadDeliveries() {
    this.dispatch(DeliveryActions.loadDeliveries());
  }

}
