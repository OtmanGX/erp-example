import { Injectable } from '@angular/core';

import {
  InsertInvoiceGQL,
  UpdateInvoiceGQL,
  GetAllInvoicesGQL,
  GetInvoiceByIdGQL,
  DeleteInvoicesGQL
} from '@tanglass-erp/infrastructure/graphql';
import { InsertedInvoice, UpdatedInvoice } from '@tanglass-erp/core/sales';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor(
    private insertInvoiceGQL: InsertInvoiceGQL,
    private updateInvoiceGQL: UpdateInvoiceGQL,
    private getAllInvoicesGQL: GetAllInvoicesGQL,
    private getInvoiceByIdGQL: GetInvoiceByIdGQL,
    private deleteInvoicesGQL: DeleteInvoicesGQL
  ) {}

  getAll() {
    return this.getAllInvoicesGQL.watch().valueChanges;
  }

  getOneById(id: string) {
    return this.getInvoiceByIdGQL.fetch({id});
  }

  insertOne(invoice: InsertedInvoice) {
    return this.insertInvoiceGQL.mutate(invoice);
  }

  updateOne(invoice: UpdatedInvoice) {
    return this.updateInvoiceGQL.mutate(invoice);
  }

  deleteMany(ids: string[]) {
    return this.deleteInvoicesGQL.mutate({ids});
  }
}
