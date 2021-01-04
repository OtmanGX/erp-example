import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ErrorHandlerService } from "../../shared/errorHandler.service";
import { TubeInox } from "../../../../../core/product/src/lib/models/consommable.model";
import { BaseService} from "../../shared/baseService.service";

@Injectable({
  providedIn: 'root'
})
export class TubeInoxService extends BaseService<TubeInox> {

    constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
      super(http,errorHandler);
      this.apiBaseURL += "tubeInox";
      this.resourceName = "Tubes Inox";
    }
  }
