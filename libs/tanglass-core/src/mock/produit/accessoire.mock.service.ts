import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {AccessoireService} from '../../services/produit/accessoire.service'
import { accessoires,types_Accessoire} from '../../data/produit/accessoire.data';
import {Accessoire} from '../../models/produit/accessoire.model'
import {additionalParam_PD} from '../../models/produit/type_produit.model'

import { Mixin } from 'ts-mixer';
import { BaseMockService } from "../shared/base.mock.service";


class AccessoireMockData extends BaseMockService<Accessoire> {
  constructor() {
    super();
    this.listData = accessoires;
  }
}

@Injectable({
  providedIn: "root",
})
export class AccessoireMockService extends Mixin(AccessoireService,AccessoireMockData){
  private typesAccessoires:additionalParam_PD[]=types_Accessoire


  /** GET All MatièrePremière  Types from fake data  */
  getType_Accessoires(): Observable<additionalParam_PD[]> {
    return observableOf(this.typesAccessoires)
  }
  addType_Accessoire(type_Accessoires:additionalParam_PD): Observable<additionalParam_PD> {
    this.typesAccessoires.push(type_Accessoires)
    return observableOf(type_Accessoires)
  }

}
