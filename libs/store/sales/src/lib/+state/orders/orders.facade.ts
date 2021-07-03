import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromOrders from './orders.reducer';
import * as OrdersSelectors from './orders.selectors';
import * as OrdersActions from './orders.actions';
import { filter } from 'rxjs/operators';

import { invoiceFilter, Order,InsertedOrder } from '@tanglass-erp/core/sales';
import { PaymentsFacade } from "../payments/payments.facade";
import { ProductDraftFacade } from '../product-draft/product-draft.facade';
import { InvoiceGeneratorService } from '@tanglass-erp/core/common';
@Injectable()
export class OrdersFacade {
  loaded$ = this.store.pipe(select(OrdersSelectors.getOrdersLoaded));
  allOrders$ = this.store.pipe(select(OrdersSelectors.getAllOrders));
  loadedOrders$ = this.store.pipe(select(OrdersSelectors.getSelectedOrder));
  selectedOrder$ = this.store.pipe(
    select(OrdersSelectors.getSelected),
    filter((val) => !!val)
  );
  selectedOrderId$ = this.store.pipe(select(OrdersSelectors.getSelectedId))

  constructor(
    private store: Store<fromOrders.OrdersPartialState>,
    public paymentsFacade: PaymentsFacade,
    public invoiceGeneratorService: InvoiceGeneratorService,
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

  addOrder(order: InsertedOrder) {
    this.dispatch(OrdersActions.addOrder({ order }));
  }

  printOrder(order: Order) {
    this.invoiceGeneratorService.generateOrderPDF(order);
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
