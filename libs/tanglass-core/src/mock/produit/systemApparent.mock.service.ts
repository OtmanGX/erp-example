import { Injectable } from '@angular/core';
import { BaseMockService } from "../shared/base.mock.service";
import {SystemApparentService} from '../../services/produit/systemApparent.service'
import { Mixin } from 'ts-mixer';
import { SystemApparent } from '../../models/produit/systemApparent.model';
import { systemApparents } from "../../data/produit/systemApparent";
class SystemApparentMockData extends BaseMockService<SystemApparent> {
  constructor() {
    super();
    this.listData = systemApparents;
  }
}

@Injectable({
  providedIn: "root",
})
export class SystemApparentMockService extends Mixin(SystemApparentService,SystemApparentMockData){
}