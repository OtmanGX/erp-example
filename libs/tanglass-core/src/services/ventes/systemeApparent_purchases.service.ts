import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SystemApparent_purchases } from "../../models/ventes/customerPurchases/systemApparent_purchases.model";
import { ErrorHandlerService } from "../shared/errorHandler.service";


import { BaseService} from "../shared/baseService.service";

@Injectable({
  providedIn: "root",
})
export class SystemeApparentPurchasesService extends BaseService<SystemApparent_purchases> {

  constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
    super(http,errorHandler);
    this.apiBaseURL += "systemeApparentPurchases";
    this.resourceName = "Ventes :Systéme Apparents  ";
  }
}


