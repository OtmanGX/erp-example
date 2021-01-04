import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Encoche } from "../../../../../core/product/src/lib/models/service.model";
import { encoches} from '../../../data/produit/service.data';
import { BaseMockService } from "../../shared/base.mock.service";

import {EncocheService} from '../../../services/produit/service/encoche.service'

import { Mixin } from 'ts-mixer';

class EncocheMockData extends BaseMockService<Encoche> {
  constructor() {
    super();
    this.listData = encoches;
  }
}

@Injectable({
  providedIn: "root",
})
export class EncocheMockService extends Mixin(EncocheService,EncocheMockData){
}
