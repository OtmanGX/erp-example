import { Injectable } from '@angular/core';
import { GetCashBoxByIdGQL, InsertCashBoxGQL, InsertPaymentGQL } from '@tanglass-erp/infrastructure/graphql';
import { InsertedCashBox, InsertedPayment } from '../models/cash-box';

@Injectable({
  providedIn: 'root'
})
export class CashBoxService {

  constructor(
    private getCashBoxByIdGQL: GetCashBoxByIdGQL,
    private insertCashBoxGQL: InsertCashBoxGQL,
    private insertPaymentGQL: InsertPaymentGQL,
  ) { }

  getCashBoxById(id: number, salepoint_id: string) {
    return this.getCashBoxByIdGQL.fetch({id, salepoint_id});
  }

  insertCashBox(obj: InsertedCashBox) {
    return this.insertCashBoxGQL.mutate(obj);
  }

  insertPayment(obj: InsertedPayment) {
    return this.insertPaymentGQL.mutate(obj);
  }


}
