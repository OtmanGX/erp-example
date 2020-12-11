import { Injectable } from "@angular/core";
import { HttpClient, } from "@angular/common/http";
import { Invoice } from "../../models/ventes/invoice.model";
import { ErrorHandlerService } from "../shared/errorHandler.service";
import { BaseService} from "../shared/baseService.service";

@Injectable({
  providedIn: "root",
})
export class InvoiceService extends BaseService<Invoice> {

  constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
    super(http,errorHandler);
    this.apiBaseURL += " invoices";
    this.resourceName = "Invoices";
  }
}
