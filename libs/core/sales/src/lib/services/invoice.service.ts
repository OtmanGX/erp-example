import { Injectable } from '@angular/core';

import {
  InsertInvoiceGQL,
  UpdateInvoiceGQL,
  GetAllInvoicesGQL,
  GetInvoiceByIdGQL,
  DeleteInvoicesGQL,
  GetDeliveryLinesGQL
} from '@tanglass-erp/infrastructure/graphql';
import { InsertedInvoice, InvoiceLine, UpdatedInvoice } from '@tanglass-erp/core/sales';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor(
    private insertInvoiceGQL: InsertInvoiceGQL,
    private updateInvoiceGQL: UpdateInvoiceGQL,
    private getAllInvoicesGQL: GetAllInvoicesGQL,
    private getInvoiceByIdGQL: GetInvoiceByIdGQL,
    private deleteInvoicesGQL: DeleteInvoicesGQL,
    private getDeliveryLinesGQL: GetDeliveryLinesGQL
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

  prepareInvoiceLines(deliveries: string[]) {
    const invoiceLinesMap = new Map<String, InvoiceLine>();
    return this.getDeliveryLinesGQL.fetch({deliveries})
      .pipe(map(
        data => {
          const deliveryLines = data.data.sales_delivery_line;
          deliveryLines.forEach(delivery => {
            const key = delivery.product_draft.product_code;
            const item = invoiceLinesMap.get(delivery.product_draft.product_code);
            if (!item)
              invoiceLinesMap.set(key, {
                product_code: key,
                unit_price: delivery.product_draft.price,
                total: delivery.amount,
                quantity: delivery.delivered,
                product_label: delivery.product_label
              })
            else
              item.quantity += delivery.delivered;
          })
          return [...invoiceLinesMap.values()]
        }
      ));
  }

}
