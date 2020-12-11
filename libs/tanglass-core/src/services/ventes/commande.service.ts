import { Injectable } from "@angular/core";
import { BaseService} from "../shared/baseService.service";
import { ICommande } from "../../models/ventes/commande.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ErrorHandlerService } from "../shared/errorHandler.service";

@Injectable({
  providedIn: "root",
})
export class CommandeService extends BaseService<ICommande> {

  constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
    super(http,errorHandler);
    this.apiBaseURL += "commandes";
    this.resourceName = "Commandes";
  }
  


}
