import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Coupe } from "../../../models/produit/service.model";
import { coupes} from '../../../data/produit/service.data';
import { BaseMockService } from "../../shared/base.mock.service";
import { Mixin } from 'ts-mixer';
import {CoupeService} from '../../../services/produit/service/coupe.service'

class CoupeMockData extends BaseMockService<Coupe> {
  constructor() {
    super();
    this.listData = coupes;
  }
}

@Injectable({
  providedIn: "root",
})
export class CoupeMockService extends Mixin(CoupeService,CoupeMockData){
}
