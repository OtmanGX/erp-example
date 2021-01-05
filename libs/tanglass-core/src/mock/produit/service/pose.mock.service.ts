import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Pose } from "../../../models/produit/service.model";
import { poses } from "../../../data/produit/service.data";
import { BaseMockService } from "../../shared/base.mock.service";
import {PoseService} from '../../../services/produit/service/pose.service'

import { Mixin } from 'ts-mixer';

class PoseMockData extends BaseMockService<Pose> {
  constructor() {
    super();
    this.listData = poses;
  }
}

@Injectable({
  providedIn: "root",
})
export class PoseMockService extends Mixin(PoseService,PoseMockData){
}
