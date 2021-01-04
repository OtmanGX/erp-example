import { Injectable } from '@angular/core';
import { Bombage } from "../../../../../core/product/src/lib/models/service.model";
import { bombages} from '../../../data/produit/service.data';
import { BaseMockService } from "../../shared/base.mock.service";
import {BombageService} from '../../../services/produit/service/bombage.service'

import { Mixin } from 'ts-mixer';

class BombageMockData extends BaseMockService<Bombage> {
  constructor() {
    super();
    this.listData = bombages;
  }
}

@Injectable({
  providedIn: "root",
})
export class BombageMockService extends Mixin(BombageService,BombageMockData){
}
