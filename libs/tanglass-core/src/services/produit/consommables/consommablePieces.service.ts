import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ErrorHandlerService } from "../../shared/errorHandler.service";
import { BaseService} from "../../shared/baseService.service";
import { ConsommablePieces } from '../../../../../core/product/src/lib/models/consommable.model';

@Injectable({
  providedIn: 'root'
})
export class ConsommablePiecesService extends BaseService<ConsommablePieces> {

    constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
      super(http,errorHandler);
      this.apiBaseURL += "ConsommablesPieces";
      this.resourceName = " Pièces Consommables";
    }
  }
