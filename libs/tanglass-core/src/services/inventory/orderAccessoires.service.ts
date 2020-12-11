import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ErrorHandlerService } from "../shared/errorHandler.service";
import { BaseService} from "../shared/baseService.service";
import { AccessoireOrder } from '../../models/inventory/accessoireOrders.model';

@Injectable({
  providedIn: "root",
})
export class OrderAccessoireService extends BaseService<AccessoireOrder> {

  constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
    super(http,errorHandler);
    this.apiBaseURL += "orderAccessoire";
    this.resourceName = "AccessoiresOrders ";
  }
}
