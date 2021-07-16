import { Injectable } from '@angular/core';
import {
  GetPaymentGQL,
  InsertPaymentGQL,
  InsertPaymentMutationVariables,
  DeletePaymentGQL,
} from '@tanglass-erp/infrastructure/graphql';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(
    private InsertPaymentGQL: InsertPaymentGQL,
    private getOrderPaymentGQL: GetPaymentGQL,
    private deletePaymentGQL: DeletePaymentGQL
  ) {}

  getOrderPayments(order_id) {
    return this.getOrderPaymentGQL.fetch(order_id);
  }

  insertPayment(payment: InsertPaymentMutationVariables) {
    return this.InsertPaymentGQL.mutate(payment);
  }

  removePayment(id) {
    return this.deletePaymentGQL.mutate(id);
  }
}
