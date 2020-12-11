
import { Injectable } from '@angular/core';
import {Companie} from '../../models/management/companie'
import { companies } from "../../data/management/companies.data";
import { BaseMockService } from "../shared/base.mock.service";


@Injectable({
  providedIn: "root",
})
export class  companieMockService extends BaseMockService<Companie>{
  constructor() {
    super();
    this.listData = companies;
  }
}
