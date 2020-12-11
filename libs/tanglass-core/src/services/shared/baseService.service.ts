import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { ErrorHandlerService } from "../shared/errorHandler.service";
import { BaseModel } from "../../models/baseModel.model";

import { of as observableOf, Observable } from "rxjs";


  export  class BaseService<T extends BaseModel > {

    apiBaseURL: string = 'api/';
    resourceName: string;
    httpOptions = {
      headers: new HttpHeaders({ "Content Type": "application/json" }),
    };
    constructor(protected _http: HttpClient,
                protected errorHandler:ErrorHandlerService ){}


    getAll():Observable<T[] > {
      return this._http.get<T[]>(this.apiBaseURL)
      .pipe(
        tap((_) => console.log(`fetched ${this.resourceName}`)),
        catchError(this.errorHandler.handleError<T[]>(`get ${this.resourceName}`))
      );
    }

    getOneById(id:number):Observable<T> {
      return this._http.get<T>(`${this.apiBaseURL}/${id}`)
      .pipe(
        tap((_) => console.log(`fetched ${this.resourceName}  id=${id}`)),
        catchError(this.errorHandler.handleError<T>(`get ${this.resourceName} id=${id}`))
      );
    }

    addNewOne(data:T): Observable<T> {
      data.id = null;
      return this._http
        .post<T>(this.apiBaseURL, data, this.httpOptions)
        .pipe(
          tap((data: T) => console.log(`added ${this.resourceName} id=${data.id}`)),
          catchError(this.errorHandler.handleError<T>(`add ${this.resourceName} `))
        );
    }

    updateOne(data: T): Observable<T> {
      const url = `${this.apiBaseURL}/${data.id}`;
      return this._http.put<T>(url, data, this.httpOptions)
      .pipe(
        tap((_) => console.log(`updated ${this.resourceName}  id=${data.id}`)),
        catchError(this.errorHandler.handleError<T>(`update ${this.resourceName} `))
      );
    }
    deleteOneById(id): Observable<T> {
      return this._http.delete<T> (`${this.apiBaseURL}/${id}`).pipe(
        tap((_) => console.log(`fetched ${this.resourceName}  id=${id}`)),
        catchError(this.errorHandler.handleError<T>(`delete ${this.resourceName} id=${id} `))
      );
    }

    deleteAll(): Observable<T[]> {
      return this._http.delete<T[]>(this.apiBaseURL).pipe(
      tap((_) => console.log(`fetched ${this.resourceName}`)),
      catchError(this.errorHandler.handleError<T[]>(`delete all ${this.resourceName}`))
    );
    }

    findByCode(code): Observable<T> {
      return this._http.get<T>(`${this.apiBaseURL}?code=${code}`).pipe(
        tap((_) => console.log(`fetched ${this.resourceName} code=${code} `)),
        catchError(this.errorHandler.handleError<T>(`No element  ${this.resourceName} code=${code} `))
      );
    }
  

  }
