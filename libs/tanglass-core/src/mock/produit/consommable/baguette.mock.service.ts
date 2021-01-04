import { Injectable } from '@angular/core';
import { Stadip } from "../../../../../core/product/src/lib/models/consommable.model";
import { films,colorsStadip,typesStadip} from '../../../data/produit/consommable.data';
import { BaseMockService } from "../../shared/base.mock.service";
import {additionalParam_PD} from '../../../models/produit/type_produit.model'
import { of as observableOf,  Observable } from 'rxjs';

import {StadipService} from '../../../services/produit/consommables/stadip.service'

import { Mixin } from 'ts-mixer';

class StadipMockData extends BaseMockService<Stadip> {
  constructor() {
    super();
    this.listData = films;
  }
}

@Injectable({
  providedIn: "root",
})
export class StadipMockService extends Mixin(StadipService,StadipMockData){
  private colorsStadip:additionalParam_PD[]=colorsStadip
  private typesStadip:additionalParam_PD[]=typesStadip

  getTypeStadip(): Observable<additionalParam_PD[]> {
    return observableOf(this.typesStadip)
  }
  getColorStadip(): Observable<additionalParam_PD[]> {
     return observableOf(this.colorsStadip)
    }

  addTypeStadip(typeStadip:additionalParam_PD): Observable<additionalParam_PD> {
    this.typesStadip.push(typeStadip)
    return observableOf(typeStadip)

  }
  addColorStadip(colorStadip: additionalParam_PD): Observable<additionalParam_PD> {
   this.colorsStadip.push(colorStadip)
   return observableOf(colorStadip)
  }

}
