import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ErrorHandlerService } from "../shared/errorHandler.service";

import { VerreClient } from "../../models/produit/matiere_premiere.model";

import { BaseService} from "../shared/baseService.service";

@Injectable({
  providedIn: 'root'
})
export class VerreClientService extends BaseService<VerreClient>{

  constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
    super(http,errorHandler);
    this.apiBaseURL += "verreClient";
    this.resourceName = "VerreClient";
  }

}