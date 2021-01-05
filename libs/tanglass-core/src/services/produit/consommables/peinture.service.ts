import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ErrorHandlerService } from "../../shared/errorHandler.service";
import { BaseService} from "../../shared/baseService.service";
import { Peinture } from '@TanglassCore/models/produit/service.model';

@Injectable({
  providedIn: 'root'
})
export class PeintureService extends BaseService<Peinture> {

    constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
      super(http,errorHandler);
      this.apiBaseURL += "peintures";
      this.resourceName = "Peinture";
    }
  }
