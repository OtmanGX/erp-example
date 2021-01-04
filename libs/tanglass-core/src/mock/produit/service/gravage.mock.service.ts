import { Injectable } from '@angular/core';
import { Gravage } from "../../../../../core/product/src/lib/models/service.model";
import { gravages} from '../../../data/produit/service.data';
import { BaseMockService } from "../../shared/base.mock.service";

import {GravageService} from '../../../services/produit/service/gravage.service'

import { Mixin } from 'ts-mixer';

class GravageMockData extends BaseMockService<Gravage> {
  constructor() {
    super();
    this.listData = gravages;
  }
}

@Injectable({
  providedIn: "root",
})
export class GravageMockService extends Mixin(GravageService,GravageMockData){
}
