import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ErrorHandlerService } from "../../shared/errorHandler.service";
import { BaseService} from "../../shared/baseService.service";
import { Uchannel } from '@TanglassCore/models/produit/consommable.model';

@Injectable({
  providedIn: 'root'
})
export class UchannelService extends BaseService<Uchannel> {

    constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
      super(http,errorHandler);
      this.apiBaseURL += "uchannels";
      this.resourceName = "Uchannel";
    }
  }
