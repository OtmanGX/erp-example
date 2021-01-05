import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ErrorHandlerService } from "../../shared/errorHandler.service";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { BaseService} from "../../shared/baseService.service";
import { Trous } from '@TanglassCore/models/produit/service.model';

@Injectable({
  providedIn: 'root'
})
export class TrousService extends BaseService<Trous> {

    constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
      super(http,errorHandler);
      this.apiBaseURL += "trous";
      this.resourceName = "Trous";
    }
  }
