import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {MatierePremiereService} from '../../services/produit/mat_premiere.service'
import { matierePremiere,} from '../../data/produit/matiere_premiere.data';
import {MatièrePremière} from '../../../../core/product/src/lib/models/glasse.model'
import {additionalParam_PD} from '../../models/produit/type_produit.model'


import { Mixin } from 'ts-mixer';
import { BaseMockService } from "../shared/base.mock.service";

class MatierePremiereMockData extends BaseMockService<MatièrePremière> {

  constructor() {
    super();
    this.listData = matierePremiere;
  }
}

@Injectable({
  providedIn: "root",
})
export class MatierePremiereMockService extends Mixin(MatierePremiereService,MatierePremiereMockData){

  private colorsMatierePremiere:additionalParam_PD[]=[];
  private typesMatierePremiere:additionalParam_PD[]=[];


  /** GET All MatièrePremière  Types from fake data  */
  getTypeMatierePremiere(): Observable<additionalParam_PD[]> {
    return observableOf(this.typesMatierePremiere);
  }
  getColorMatierePremiere(): Observable<additionalParam_PD[]> {
     return observableOf(this.colorsMatierePremiere);
    }

  addTypeMatierePremiere(type_MP:additionalParam_PD): Observable<additionalParam_PD> {
    this.typesMatierePremiere.push(type_MP);
    return observableOf(type_MP);

  }
  addColorMatierePremiere(color_MP: additionalParam_PD): Observable<additionalParam_PD> {
   this.colorsMatierePremiere.push(color_MP);
   return observableOf(color_MP);
  }

}
