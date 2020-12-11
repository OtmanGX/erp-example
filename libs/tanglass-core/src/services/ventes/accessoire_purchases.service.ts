
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Accessoire_purchases } from "../../models/ventes/customerPurchases/accessoire_purchases.model";
import { ErrorHandlerService } from "../shared/errorHandler.service";


import { BaseService} from "../shared/baseService.service";

@Injectable({
  providedIn: "root",
})
export class AccessoirePurchasesService extends BaseService<Accessoire_purchases> {

  constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
    super(http,errorHandler);
    this.apiBaseURL += "accessoirePurchases";
    this.resourceName = "Ventes :Accessoires ";
  }
}



