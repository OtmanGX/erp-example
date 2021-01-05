import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ErrorHandlerService } from "../shared/errorHandler.service";


import { BaseService} from "../shared/baseService.service";
import { VerreClient } from '@TanglassCore/models/produit/matiere_premiere.model';

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
