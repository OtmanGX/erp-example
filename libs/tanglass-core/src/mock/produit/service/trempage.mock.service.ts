import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Trempage } from "../../../models/produit/service.model";
import { trempages } from "../../../data/produit/service.data";
import { BaseMockService } from "../../shared/base.mock.service";

import {TrempageService} from '../../../services/produit/service/trempage.service'

import { Mixin } from 'ts-mixer';

class TrempageMockData extends BaseMockService<Trempage> {
  constructor() {
    super();
    this.listData = trempages;
  }
}

@Injectable({
  providedIn: "root",
})
export class TrempageMockService extends Mixin(TrempageService,TrempageMockData){
}
