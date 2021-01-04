import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ErrorHandlerService } from "../../shared/errorHandler.service";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { BordPolis } from "../../../../../core/product/src/lib/models/service.model";
import { BaseService} from "../../shared/baseService.service";

@Injectable({
  providedIn: 'root'
})

  export class BordPolisService extends BaseService<BordPolis> {

    constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
      super(http,errorHandler);
      this.apiBaseURL += "bordPolis";
      this.resourceName = "BordPolis";
    }
  }
