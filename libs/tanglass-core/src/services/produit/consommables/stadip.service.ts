import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ErrorHandlerService } from "../../shared/errorHandler.service";
import { BaseService} from "../../shared/baseService.service";
import { Stadip } from '@TanglassCore/models/produit/consommable.model';

@Injectable({
  providedIn: 'root'
})
export class StadipService extends BaseService<Stadip> {

    constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
      super(http,errorHandler);
      this.apiBaseURL += "stadips";
      this.resourceName = "Stadip";
    }
  }