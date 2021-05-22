import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromDelivery from './delivery.reducer';
import * as DeliverySelectors from './delivery.selectors';
import * as DeliveryActions from './delivery.actions';
import { InsertedDeliveryForm } from '@tanglass-erp/core/sales';

@Injectable()
export class DeliveryFacade {
  loaded$ = this.store.pipe(select(DeliverySelectors.getDeliveryLoaded));
  allDelivery$ = this.store.pipe(select(DeliverySelectors.getAllDelivery));
  selectedDelivery$ = this.store.pipe(select(DeliverySelectors.getSelectedEntity));

  constructor(private store: Store<fromDelivery.DeliveryPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadAllDelivery() {
    this.dispatch(DeliveryActions.loadDelivery());
  }

  loadDeliveryById(id: string) {
    this.dispatch(DeliveryActions.loadDeliveryById({id}));
  }

  addDelivery(delivery: InsertedDeliveryForm) {
    this.dispatch(DeliveryActions.addDelivery({delivery}));
  }

  updateDelivery(delivery: InsertedDeliveryForm) {
    this.dispatch(DeliveryActions.updateDelivery({delivery}));
  }

  removeDelivery(ids: string[]) {
    this.dispatch(DeliveryActions.removeDelivery({ids}));
  }
}
