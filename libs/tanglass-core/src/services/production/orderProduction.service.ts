
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ErrorHandlerService } from "../shared/errorHandler.service";
import { BaseService} from "../shared/baseService.service";
import { ProductionOrder } from '../../models/production/productionOrder.model';

@Injectable({
  providedIn: "root",
})
export class OrderProductionService extends BaseService<ProductionOrder> {

  constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
    super(http,errorHandler);
    this.apiBaseURL += "orderProduction";
    this.resourceName = "ProductionOrders ";
  }
}
