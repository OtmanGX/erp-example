import { Injectable } from '@angular/core';
import {
  GetAllQuotationsGQL,
  InsertQuotationGQL,
  DeleteQuotationsGQL,
  GetQuotationByIdGQL,
  InsertQuotationMutationVariables
} from '@tanglass-erp/infrastructure/graphql';
import { Quotation } from "../models/quotation";
import { invoiceFilter } from '../models/invoice';
@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor(
    private getAllQuotationsGQL: GetAllQuotationsGQL,
    private insertQuotationGQL: InsertQuotationGQL,
    private getQuotationByIdGQL: GetQuotationByIdGQL,
    private deleteQuotationsGQL: DeleteQuotationsGQL
  ) { }

  getAll(params:invoiceFilter = {}) {

    return this.getAllQuotationsGQL.watch(params).valueChanges

  }

  getOneById(id: number) {
    return this.getQuotationByIdGQL.fetch({id})
  }

  insertOne(order:InsertQuotationMutationVariables) {
    return this.insertQuotationGQL.mutate(order);
  }

  deleteMany(ids: number[]) {
    return this.deleteQuotationsGQL.mutate({ids});
  }
}

