import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';
import { groupBy } from 'lodash';
import { map } from 'rxjs/operators';

import * as fromPayments from './payments.reducer';
import * as PaymentsSelectors from './payments.selectors';
import * as PaymentsActions from "./payments.actions";
import {Payment  } from "@tanglass-erp/core/sales";
@Injectable()
export class PaymentsFacade {
  loaded$ = this.store.pipe(select(PaymentsSelectors.getPaymentsLoaded));
  allPayments$ = this.store.pipe(select(PaymentsSelectors.getAllPayments));
  selectedPayment$ = this.store.pipe(select(PaymentsSelectors.getSelectedPayment));
  orderPayments$ = this.store.pipe(select(PaymentsSelectors.getSelectedOrderPayments))
  constructor(private store: Store<fromPayments.PaymentsPartialState>) {
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadOrderPayments(order_id) {
    this.dispatch(PaymentsActions.loadOrderPayments({ order_id }))
  }
  addPayment(payment: Payment) {
    this.dispatch(PaymentsActions.addPayment({payment}));
  }
   groupPaymentsByCompany() {
   return  this.orderPayments$.pipe(
      map(data => data?.reduce((r, a) => {
        const {
          amount,
          company
        } = a;
        r[company.name] = [...r[company.name] || [], {
          amount,
        }];
        return r;
      }, {})
      ))
  }

}
