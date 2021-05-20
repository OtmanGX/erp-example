import { Injectable } from '@angular/core';
import {
  GetAllQuotationsGQL
} from '@tanglass-erp/infrastructure/graphql';
import { Quotation } from "../models/quotation";
@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor(
    private getAllQuotationsGQL: GetAllQuotationsGQL,

  ) { }

  getAll() {
    
    return this.getAllQuotationsGQL.watch().valueChanges

  }



}

