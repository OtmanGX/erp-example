import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { additionalParam_PD } from "../../models/produit/type_produit.model";
import { catchError, map, tap } from "rxjs/operators";
import { ErrorHandlerService } from "../shared/errorHandler.service";
import { BaseService} from "../shared/baseService.service";
import { Accessoire } from '@TanglassCore/models/produit/accessoire.model';


  @Injectable({
    providedIn: "root",
  })
  export class AccessoireService extends BaseService<Accessoire> {
    private type_accessoireUrl = "api/types_Accessoire";

    constructor(_http: HttpClient,errorHandler:ErrorHandlerService) {
      super(_http,errorHandler);
      this.apiBaseURL += "accessoires";
      this.resourceName = "Accessoire";
    }

  /** GET All accessoires Types from the server */
  getType_Accessoires(): Observable<additionalParam_PD[]> {
    return this._http.get<additionalParam_PD[]>(this.type_accessoireUrl).pipe(
      tap((_) => console.log("fetched types of accessoires")),
      catchError(this.errorHandler.handleError<additionalParam_PD[]>("getType_Accessoires()", []))
    );
  }

  addType_Accessoire(type_accessoire: additionalParam_PD): Observable<additionalParam_PD> {
    type_accessoire.id = null;
    return this._http
      .post<additionalParam_PD>(this.type_accessoireUrl, type_accessoire, this.httpOptions)
      .pipe(
        tap((type_accessoire: additionalParam_PD) =>
          console.log(`added type of Accessoire id=${type_accessoire.id}`)
        ),
        catchError(this.errorHandler.handleError<additionalParam_PD>("addType_Accessoire"))
      );
  }
}
