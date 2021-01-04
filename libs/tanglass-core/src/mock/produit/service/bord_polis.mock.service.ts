import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ErrorHandlerService } from "../../shared/errorHandler.service";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { BordPolis } from "../../../../../core/product/src/lib/models/service.model";
import { bordPolis} from '../../../data/produit/service.data';
import { BaseMockService } from "../../shared/base.mock.service";
import { Mixin } from 'ts-mixer';
import {BordPolisService} from '../../../services/produit/service/bord_polis.service'

class BordPolisMockData extends BaseMockService<BordPolis>{
  constructor() {
    super();
    this.listData = bordPolis;
  }
}

@Injectable({
  providedIn: "root",
})
export class BordPolisMockService extends Mixin(BordPolisService,BordPolisMockData){
}
