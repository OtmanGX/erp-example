import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromOrders from './orders.reducer';
import * as OrdersSelectors from './orders.selectors';
import * as OrdersActions from './orders.actions';
import { filter } from 'rxjs/operators';

@Injectable()
export class OrdersFacade {
  loaded$ = this.store.pipe(select(OrdersSelectors.getOrdersLoaded));
  allOrders$ = this.store.pipe(select(OrdersSelectors.getAllOrders));
  selectedOrders$ = this.store.pipe(select(OrdersSelectors.getSelected));
  selectedOrder$ = this.store.pipe(
    select(OrdersSelectors.getSelected),
    filter((val) => !!val)
  );

  constructor(private store: Store<fromOrders.OrdersPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
  loadAllOrders() {
    this.dispatch(OrdersActions.loadOrders());
  }

  loadSelectedOrder(id) {
    this.dispatch(OrdersActions.loadOrderById({ id }));
  }

  selectOrder(id: string | number) {
    this.dispatch(OrdersActions.selectOrder({ id }));
  }

  removeMany(ids: number[]) {
    this.dispatch(OrdersActions.removeOrders({ ids }));
  }

  clearSelection() {
    this.dispatch(OrdersActions.clearSelection());
  }
}
