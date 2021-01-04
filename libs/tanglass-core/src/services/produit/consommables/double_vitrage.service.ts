import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ErrorHandlerService } from "../../shared/errorHandler.service";
import { DoubleVitrage } from "../../../../../core/product/src/lib/models/consommable.model";
import { BaseService} from "../../shared/baseService.service";

@Injectable({
  providedIn: 'root'
})
export class DoubleVitrageService extends BaseService<DoubleVitrage> {

    constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
      super(http,errorHandler);
      this.apiBaseURL += "doubleVitrages";
      this.resourceName = "DoubleVitrage";
    }
  }
