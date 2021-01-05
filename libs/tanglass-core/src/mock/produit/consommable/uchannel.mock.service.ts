import { Injectable } from '@angular/core';
import { Uchannel } from "../../../models/produit/consommable.model";
import { uchannels} from '../../../data/produit/consommable.data';
import { BaseMockService } from "../../shared/base.mock.service";
import {UchannelService} from '../../../services/produit/consommables/uchannel.service'

import { Mixin } from 'ts-mixer';

class UchannelMockData extends BaseMockService<Uchannel> {
  constructor() {
    super();
    this.listData = uchannels;
  }
}

@Injectable({
  providedIn: "root",
})
export class UchannelMockService extends Mixin(UchannelService,UchannelMockData){
}
