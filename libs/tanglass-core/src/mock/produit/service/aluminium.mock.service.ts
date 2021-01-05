import { Injectable } from '@angular/core';
import { Aluminium } from "../../../models/produit/service.model";
import { aluminiums} from '../../../data/produit/service.data';
import { BaseMockService } from "../../shared/base.mock.service";
import {AluminiumService} from '../../../services/produit/service/aluminium.service'
import { Mixin } from 'ts-mixer';

class AluminiumMockData extends BaseMockService<Aluminium> {
  constructor() {
    super();
    this.listData = aluminiums;
  }
}

@Injectable({
  providedIn: "root",
})
export class AluminiumMockService extends Mixin(AluminiumService,AluminiumMockData){
}
