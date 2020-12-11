import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Biseautage } from "../../../models/produit/service.model";
import { biseautages} from '../../../data/produit/service.data';
import { BaseMockService } from "../../shared/base.mock.service";
import {BiseautageService} from '../../../services/produit/service/biseautage.service'

import { Mixin } from 'ts-mixer';

class BiseautageMockData extends BaseMockService<Biseautage> {
  constructor() {
    super();
    this.listData = biseautages;
  }
}

@Injectable({
  providedIn: "root",
})
export class BiseautageMockService extends Mixin(BiseautageService,BiseautageMockData){
}
