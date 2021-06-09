import { Injectable } from '@angular/core';
import {
  GetAllQuotationsGQL,
  InsertQuotationGQL,
  GetQuotationByIdGQL,
  InsertQuotationMutationVariables
} from '@tanglass-erp/infrastructure/graphql';
import { Quotation } from "../models/quotation";
@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor(
    private getAllQuotationsGQL: GetAllQuotationsGQL,
    private insertQuotationGQL: InsertQuotationGQL,
    private getQuotationByIdGQL: GetQuotationByIdGQL
  ) { }

  getAll() {
    
    return this.getAllQuotationsGQL.watch().valueChanges

  }

  getOneById(id: number) {
    return this.getQuotationByIdGQL.fetch({id})
  }

  insertOne(order:InsertQuotationMutationVariables) {
    return this.insertQuotationGQL.mutate(order);
  }



}

