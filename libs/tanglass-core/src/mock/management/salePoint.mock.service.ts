
import { Injectable } from '@angular/core';
import {SalePoint} from '../../models/management/sales-points'
import { salePoints } from "../../data/management/salePoints.data";
import { BaseMockService } from "../shared/base.mock.service";


@Injectable({
  providedIn: "root",
})
export class  SalePointMockService extends BaseMockService<SalePoint>{
  constructor() {
    super();
    this.listData = salePoints;
  }
}
