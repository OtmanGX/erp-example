import { Injectable } from '@angular/core';
import { Sablage } from "../../../models/produit/service.model";
import { sablages,typesSablage} from '../../../data/produit/service.data';
import { BaseMockService } from "../../shared/base.mock.service";
import {additionalParam_PD} from '../../../models/produit/type_produit.model'
import {SablageService} from '../../../services/produit/service/sablage.service'
import { of as observableOf,  Observable } from 'rxjs';

import { Mixin } from 'ts-mixer';

class SablageMockData extends BaseMockService<Sablage> {
  constructor() {
    super();
    this.listData = sablages;
  }
}

@Injectable({
  providedIn: "root",
})
export class SablageMockService extends Mixin(SablageService,SablageMockData){

  private typesSablages:additionalParam_PD[]=typesSablage

  getTypesSablage(): Observable<additionalParam_PD[]> {
    return observableOf(this.typesSablages)
  }
 
  addTypeSablage(typeSablage:additionalParam_PD): Observable<additionalParam_PD> {
    this.typesSablages.push(typeSablage)
    return observableOf(typeSablage)

  }
  

}
