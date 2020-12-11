
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ErrorHandlerService } from "../shared/errorHandler.service";
import { BaseService} from "../shared/baseService.service";
import { MatierePremiere_purchases } from '../../models/ventes/customerPurchases/matiere_premiere_purchases.model';

@Injectable({
  providedIn: "root",
})
export class MatierePremierePurchasesService extends BaseService<MatierePremiere_purchases> {

  constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
    super(http,errorHandler);
    this.apiBaseURL += "matierePremierePurchases";
    this.resourceName = "Ventes :Verre ";
  }
}
