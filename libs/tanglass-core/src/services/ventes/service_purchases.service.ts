
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ErrorHandlerService } from "../shared/errorHandler.service";
import { BaseService} from "../shared/baseService.service";
import { Service_purchases } from '../../models/ventes/customerPurchases/service_purchases.model';

@Injectable({
  providedIn: "root",
})
export class ServicePurchasesService extends BaseService<Service_purchases> {

  constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
    super(http,errorHandler);
    this.apiBaseURL += "servicePurchases";
    this.resourceName = "Ventes :Services ";
  }
}
