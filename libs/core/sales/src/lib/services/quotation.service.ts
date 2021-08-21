import { Injectable } from '@angular/core';
import {
  DeleteQuotationsGQL,
  GetAllQuotationsGQL,
  GetQuotationByIdGQL,
  InsertQuotationGQL,
  InsertQuotationMutationVariables,
  TransformQuotationToOrderGQL
} from '@tanglass-erp/infrastructure/graphql';
import { map } from 'rxjs/operators';
import { TransformedQuotation } from '../models/quotation';
import { invoiceFilter } from '../models/invoice';
import { productAdapter } from '../utils/product-adapter';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  constructor(
    private getAllQuotationsGQL: GetAllQuotationsGQL,
    private insertQuotationGQL: InsertQuotationGQL,
    private getQuotationByIdGQL: GetQuotationByIdGQL,
    private deleteQuotationsGQL: DeleteQuotationsGQL,
    private transformQuotationToOrderGQL: TransformQuotationToOrderGQL
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
    );
  }

  insertOne(order: InsertQuotationMutationVariables) {
    return this.insertQuotationGQL.mutate(order);
  }
  removeMany(ids: number[]) {
    return this.deleteQuotationsGQL.mutate({ ids });
  }
  deleteMany(ids: number[]) {
    return this.deleteQuotationsGQL.mutate({ ids });
  }
  transformQuotationToOrder(order: TransformedQuotation) {
    return this.transformQuotationToOrderGQL.mutate(order);
  }
}
