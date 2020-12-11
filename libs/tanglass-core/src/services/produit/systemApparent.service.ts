import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ErrorHandlerService } from "../shared/errorHandler.service";
import { BaseService} from "../shared/baseService.service";
import { SystemApparent } from '../../models/produit/systemApparent.model';

@Injectable({
  providedIn: 'root'
})
export class SystemApparentService extends BaseService<SystemApparent>{

  constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
    super(http,errorHandler);
    this.apiBaseURL += "systemApparent";
    this.resourceName = "Système Apparent";
  }

}
