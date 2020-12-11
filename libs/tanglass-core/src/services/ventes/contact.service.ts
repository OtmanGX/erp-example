import { Injectable } from "@angular/core";
import { of as observableOf, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Contact } from "../../models/ventes/contact.model";
import { catchError, map, tap } from "rxjs/operators";
import { ErrorHandlerService } from "../shared/errorHandler.service";

import { BaseService} from "../shared/baseService.service";

@Injectable({
  providedIn: "root",
})
export class ContactService extends BaseService<Contact> {

  constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
    super(http,errorHandler);
    this.apiBaseURL += "contacts";
    this.resourceName = "Contact";
  }
}
