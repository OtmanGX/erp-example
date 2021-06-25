import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';
import { groupBy } from 'lodash';
import { elementAt, filter, map, reduce } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as fromPayments from './payments.reducer';
import * as PaymentsSelectors from './payments.selectors';
import * as PaymentsActions from "./payments.actions";
import { Payment } from "@tanglass-erp/core/sales";
import { Amount } from '../product-draft/products-draft.models';
@Injectable()
export class PaymentsFacade {
  loaded$ = this.store.pipe(select(PaymentsSelectors.getPaymentsLoaded));
  allPayments$ = this.store.pipe(select(PaymentsSelectors.getAllPayments)).pipe(
    map(data =>
      data.map(
        element => ({ ...element, company: element.company.name })
      )
    )
  );
  selectedPayment$ = this.store.pipe(select(PaymentsSelectors.getSelectedPayment));
  orderPayments$ = this.store.pipe(select(PaymentsSelectors.getSelectedOrderPayments));

  constructor(private store: Store<fromPayments.PaymentsPartialState>) {

  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }


  loadOrderPayments(order_id) {
    this.dispatch(PaymentsActions.loadOrderPayments({ order_id }))
  }
  addPayment(payment: Payment) {
    this.dispatch(PaymentsActions.addPayment({ payment }));
  }
  groupBy(key: string, array): { [key: string]: Payment[] } {
    return array.reduce(
      (objectsByKeyValue, obj) => ({
        ...objectsByKeyValue,
        [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj)
      }),
      {}
    );
  }
  groupPaymentsByCompany() {
    let result = []
    this.allPayments$.subscribe(
      payments => {
        let paymentsGroups = this.groupBy('company', payments)
        for (let company of Object.keys(paymentsGroups)) {
          result.push(
            {company:company,received:paymentsGroups[company].reduce((acc, val) => acc + val.amount, 0
          )}
          )
        }
      }
    )
    return result
  }
  setOrderPayments(payments: Payment[]) {
    this.dispatch(PaymentsActions.setOrderPayments({ payments }));
  }

}
