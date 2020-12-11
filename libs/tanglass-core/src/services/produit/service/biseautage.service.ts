import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ErrorHandlerService } from "../../shared/errorHandler.service";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Biseautage } from "../../../models/produit/service.model";
import { BaseService} from "../../shared/baseService.service";


export class BiseautageService extends BaseService<Biseautage> {

  constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
    super(http,errorHandler);
    this.apiBaseURL += "biseautages";
    this.resourceName = "Biseautage";
  }


}
