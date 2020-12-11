import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ErrorHandlerService } from "../shared/errorHandler.service";
import { BaseService} from "../shared/baseService.service";
import { Delivery } from '../../models/ventes/delivery.model';
import { Client } from '../../models/ventes/client.model';

@Injectable({
  providedIn: "root",
})
export class DeliveryService extends BaseService<Delivery> {

  constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
    super(http,errorHandler);
    this.apiBaseURL += "delivery";
    this.resourceName = "Ventes :delivery ";
  }
  getDeliveryByClient(client:Client){


  }
}
