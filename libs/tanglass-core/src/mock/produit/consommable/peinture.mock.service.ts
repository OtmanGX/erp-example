import { Injectable } from '@angular/core';
import { Peinture } from "../../../../../core/product/src/lib/models/consommable.model";
import { peintures,colorsPeinture} from '../../../data/produit/consommable.data';
import { BaseMockService } from "../../shared/base.mock.service";
import {DoubleVitrageService} from '../../../services/produit/consommables/double_vitrage.service'
import {additionalParam_PD} from '../../../models/produit/type_produit.model'
import { of as observableOf,  Observable } from 'rxjs';

import { Mixin } from 'ts-mixer';

class PeintureMockData extends BaseMockService<Peinture> {
  constructor() {
    super();
    this.listData = peintures;
  }
}

@Injectable({
  providedIn: "root",
})
export class PeintureMockService extends Mixin(DoubleVitrageService,PeintureMockData){

  private colorsStadip:additionalParam_PD[]=colorsPeinture


  getColor(): Observable<additionalParam_PD[]> {
    return observableOf(this.colorsStadip)
   }
   addColor(colorStadip: additionalParam_PD): Observable<additionalParam_PD> {
    this.colorsStadip.push(colorStadip)
    return observableOf(colorStadip)
   }
}
