import { Injectable } from '@angular/core';
import {
  GetAllQuotationsGQL,
  InsertQuotationGQL,
  GetQuotationByIdGQL,
  DeleteQuotationsGQL,
  InsertQuotationMutationVariables,
} from '@tanglass-erp/infrastructure/graphql';
import { map } from 'rxjs/operators';
import {invoiceFilter,Quotation ,productAdapter } from "@tanglass-erp/core/sales";
@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  constructor(
    private getAllQuotationsGQL: GetAllQuotationsGQL,
    private insertQuotationGQL: InsertQuotationGQL,
    private getQuotationByIdGQL: GetQuotationByIdGQL,
    private deleteQuotationsGQL: DeleteQuotationsGQL
  ) {}

  getAll(params: invoiceFilter = {}) {
    return this.getAllQuotationsGQL.watch(params).valueChanges;
  }

  getOneById(id: number) {
    return this.getQuotationByIdGQL.fetch({ id }).pipe(
      map((data) => ({
        ...data.data.sales_quotation_by_pk,
        products: data.data.sales_quotation_by_pk.draft.product_drafts.map(
          (product) => {
            return productAdapter(product);
          }
        ),
      }))
    );  }

  insertOne(order: InsertQuotationMutationVariables) {
    return this.insertQuotationGQL.mutate(order);
  }
  removeMany(ids: number[]) {
    return this.deleteQuotationsGQL.mutate({ ids });
  }
  deleteMany(ids: number[]) {
    return this.deleteQuotationsGQL.mutate({ ids });
  }
}
