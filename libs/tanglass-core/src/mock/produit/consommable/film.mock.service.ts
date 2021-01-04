import { Injectable } from '@angular/core';
import { DoubleVitrage } from "../../../../../core/product/src/lib/models/consommable.model";
import { Baguettes} from '../../../data/produit/consommable.data';
import { BaseMockService } from "../../shared/base.mock.service";
import {DoubleVitrageService} from '../../../services/produit/consommables/double_vitrage.service'

import { Mixin } from 'ts-mixer';

class DoubleVitrageMockData extends BaseMockService<DoubleVitrage> {
  constructor() {
    super();
    this.listData = Baguettes;
  }
}

@Injectable({
  providedIn: "root",
})
export class DoubleVitrageMockService extends Mixin(DoubleVitrageService,DoubleVitrageMockData){
}
