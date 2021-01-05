import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Trous } from "../../../models/produit/service.model";
import { trous } from "../../../data/produit/service.data";
import { BaseMockService } from "../../shared/base.mock.service";
import {TrousService} from '../../../services/produit/service/trous.service'

import { Mixin } from 'ts-mixer';

class TrousMockData extends BaseMockService<Trous> {
  constructor() {
    super();
    this.listData = trous;
  }
}

@Injectable({
  providedIn: "root",
})
export class TrousMockService extends Mixin(TrousService,TrousMockData){
}
