import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ErrorHandlerService } from "../../shared/errorHandler.service";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { BaseService} from "../../shared/baseService.service";
import { Trempage } from '@TanglassCore/models/produit/service.model';

@Injectable({
  providedIn: 'root'
})
export class TrempageService extends BaseService<Trempage> {

    constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
      super(http,errorHandler);
      this.apiBaseURL += "trempages";
      this.resourceName = "Trempage";
    }
  }
