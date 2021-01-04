import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ErrorHandlerService } from "../../shared/errorHandler.service";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Bombage } from "../../../../../core/product/src/lib/models/service.model";
import { BaseService} from "../../shared/baseService.service";

@Injectable({
  providedIn: 'root'
})
export class BombageService extends BaseService<Bombage> {

    constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
      super(http,errorHandler);
      this.apiBaseURL += "bombages";
      this.resourceName = "Bombages";
    }
  }
