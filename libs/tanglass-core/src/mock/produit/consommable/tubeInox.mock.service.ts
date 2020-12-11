import { Injectable } from '@angular/core';
import { TubeInox } from "../../../models/produit/consommable.model";
import { tubesInox} from '../../../data/produit/consommable.data';
import { BaseMockService } from "../../shared/base.mock.service";
import {TubeInoxService} from '../../../services/produit/consommables/tubeInox.service'

import { Mixin } from 'ts-mixer';

class TubeInoxMockData extends BaseMockService<TubeInox> {
  constructor() {
    super();
    this.listData = tubesInox;
  }
}

@Injectable({
  providedIn: "root",
})
export class TubeInoxMockService extends Mixin(TubeInoxService,TubeInoxMockData){
}
