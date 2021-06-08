import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromPayments from './payments.reducer';
import * as PaymentsSelectors from './payments.selectors';

@Injectable()
export class PaymentsFacade {
  loaded$ = this.store.pipe(select(PaymentsSelectors.getPaymentsLoaded));
  allPayments$ = this.store.pipe(select(PaymentsSelectors.getAllPayments));
  selectedPayments$ = this.store.pipe(select(PaymentsSelectors.getSelectedPayment));

  constructor(private store: Store<fromPayments.PaymentsPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
