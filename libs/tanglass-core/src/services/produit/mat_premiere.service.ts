import { Injectable } from "@angular/core";
import {  Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { additionalParam_PD } from "../../models/produit/type_produit.model";
import { ErrorHandlerService } from "../shared/errorHandler.service";

class MatièrePremière{}

import { BaseService} from "../shared/baseService.service";


  @Injectable({
    providedIn: "root",
  })
  export class MatierePremiereService extends BaseService<MatièrePremière> {
    private type_mat_premiereUrl = "api/types_mat_premiere";
    private color_mat_premiereUrl = "api/colors_mat_premiere";


    constructor(public _http: HttpClient,public errorHandler:ErrorHandlerService) {
      super(_http,errorHandler);
      this.apiBaseURL += "matierePrmieres";
      this.resourceName = "Matiere Premiere";
    }
  /** GET All MatièrePremière  Types from the server */
  getTypeMatierePremiere(): Observable<additionalParam_PD[]> {
    return this._http.get<additionalParam_PD[]>(this.type_mat_premiereUrl).pipe(
      tap((_) => console.log("fetched types of Mat_premiere ")),
      catchError(this.errorHandler.handleError<additionalParam_PD[]>("getType_Mat_premiere()", []))
    );
  }
  getColorMatierePremiere(): Observable<additionalParam_PD[]> {
    return this._http.get<additionalParam_PD[]>(this.color_mat_premiereUrl).pipe(
      tap((_) => console.log("fetched Colors of Mat_premiere ")),
      catchError(this.errorHandler.handleError<additionalParam_PD[]>("getColor_Mat_premiere()", []))
    );
  }

  addTypeMatierePremiere(type_MP: additionalParam_PD): Observable<additionalParam_PD> {
    type_MP.id = null;
    return this._http
      .post<additionalParam_PD>(this.type_mat_premiereUrl, type_MP, this.httpOptions)
      .pipe(
        tap((type_MP: additionalParam_PD) =>
          console.log(`added type of matière première id=${type_MP.id}`)
        ),
        catchError(this.errorHandler.handleError<additionalParam_PD>("addType_MP"))
      );
  }
  addColorMatierePremiere(color_MP: additionalParam_PD): Observable<additionalParam_PD> {
    color_MP.id = null;
    return this._http
      .post<additionalParam_PD>(this.color_mat_premiereUrl, color_MP, this.httpOptions)
      .pipe(
        tap((color_MP: additionalParam_PD) =>
          console.log(`added color of matière première id=${color_MP.id}`)
        ),
        catchError(this.errorHandler.handleError<additionalParam_PD>(" addColor_MP"))
      );
  }
}



