import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromPurchases from './deliveries.reducer';
import * as DeliveriesSelectors from './deliveries.selectors';
import * as DeliveryActions from './deliveries.actions';
import {
  InsertedPurchaseDelivery,
  PurchaseItem,
} from '@tanglass-erp/core/purchase';

@Injectable()
export class DeliveriesFacade {
  loaded$ = this.store.pipe(select(DeliveriesSelectors.getDeliveriesLoaded));
  allDeliveries$ = this.store.pipe(
    select(DeliveriesSelectors.getAllDeliveries)
  );
  selectedDeliveries$ = this.store.pipe(
    select(DeliveriesSelectors.getSelected)
  );

  selectedDeliveryItems$ = this.store.pipe(
    select(DeliveriesSelectors.getSelectedDeliveryItems)
  );

  constructor(private store: Store<fromPurchases.DeliveriesPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
  loadDeliveries() {
    this.dispatch(DeliveryActions.loadDeliveries());
  }

  loadDeliveryById(id: number) {
    this.dispatch(DeliveryActions.loadDeliveryById({ id }));
  }

  addDelivery(delivery: InsertedPurchaseDelivery) {
    this.dispatch(DeliveryActions.addDelivery({ delivery }));
  }

  removeDelivery(ids: number[]) {
    this.dispatch(DeliveryActions.removeDelivery({ ids }));
  }

  addDeliveryItem(item: PurchaseItem) {
    this.dispatch(DeliveryActions.addDeliveryItem({ item }));
  }
}
