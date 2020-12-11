import { Injectable } from "@angular/core";
import { HttpClient, } from "@angular/common/http";
import { Devis } from "../../models/ventes/devis.model";
import { ErrorHandlerService } from "../shared/errorHandler.service";
import { BaseService} from "../shared/baseService.service";

@Injectable({
  providedIn: "root",
})
export class DevisService extends BaseService<Devis> {

  constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
    super(http,errorHandler);
    this.apiBaseURL += "devis";
    this.resourceName = "Devis";
  }
}







