import { Injectable } from "@angular/core";
import { Invoice } from "../../models/ventes/invoice.model";
import {InvoiceService} from '../../services/ventes/invoice.service'
import { invoices} from '../../data/ventes/invoice.data';
import { Mixin } from 'ts-mixer';
import { BaseMockService } from "../shared/base.mock.service";

class InvoiceMockData extends BaseMockService<Invoice> {
  constructor(

  ) {
    super();
    this.listData = invoices;
  }
}

@Injectable({
  providedIn: "root",
})
export class InvoiceMockService extends Mixin(InvoiceService,InvoiceMockData){


}
