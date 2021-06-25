import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromOrders from './orders.reducer';
import * as OrdersSelectors from './orders.selectors';
import * as OrdersActions from './orders.actions';
import { filter, map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import { invoiceFilter, Order } from '@tanglass-erp/core/sales';
import { PaymentsFacade } from "../payments/payments.facade";
import { ProductDraftFacade } from '../product-draft/product-draft.facade';
@Injectable()
export class OrdersFacade {
  loaded$ = this.store.pipe(select(OrdersSelectors.getOrdersLoaded));
  allOrders$ = this.store.pipe(select(OrdersSelectors.getAllOrders));
  selectedOrders$ = this.store.pipe(select(OrdersSelectors.getSelectedOrder));
  selectedOrder$ = this.store.pipe(
    select(OrdersSelectors.getSelected),
    filter((val) => !!val)
  );
  selectedOrderId$ = this.store.pipe(select(OrdersSelectors.getSelectedId))

  constructor(
    private store: Store<fromOrders.OrdersPartialState>,
    public paymentsFacade: PaymentsFacade,
    public productFacade: ProductDraftFacade) {
    }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
  loadAllOrders(params: invoiceFilter) {
    this.dispatch(OrdersActions.loadOrders(params));
  }

  loadOrderById(id) {
    this.paymentsFacade.loadOrderPayments({ order_id: id })
    this.dispatch(OrdersActions.loadOrderById({ id }))
  }

  addOrder(Order: Order) {
    this.dispatch(OrdersActions.addOrder({ Order }));
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
