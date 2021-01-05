import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ErrorHandlerService } from "../../shared/errorHandler.service";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { BaseService} from "../../shared/baseService.service";
import { Pose } from '@TanglassCore/models/produit/service.model';

@Injectable({
  providedIn: 'root'
})
export class PoseService extends BaseService<Pose> {

    constructor(http: HttpClient,errorHandler:ErrorHandlerService) {
      super(http,errorHandler);
      this.apiBaseURL += "poses";
      this.resourceName = "Pose";
    }
  }
