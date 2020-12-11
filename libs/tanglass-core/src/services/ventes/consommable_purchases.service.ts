
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Consommable_purchases } from "../../models/ventes/customerPurchases/consommable_purchases.model";
import { ErrorHandlerService } from "../shared/errorHandler.service";
import { BaseService} from "../shared/baseService.service";

@Injectable({
  providedIn: "root",
})
export class ConsommablePurchasesService extends BaseService<Consommable_purchases> {

  constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
    super(http,errorHandler);
    this.apiBaseURL += "consommablePurchases";
    this.resourceName = "Ventes :Consommables ";
  }
}

