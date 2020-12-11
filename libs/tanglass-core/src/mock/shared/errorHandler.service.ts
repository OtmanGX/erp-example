import { Injectable } from "@angular/core";
import { of as observableOf, Observable } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class ErrorHandlerService {

  /**
   * Handle Http operation that failed.
   * Let the app continue
   */
   handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return observableOf(result as T);
    };
  }
}
