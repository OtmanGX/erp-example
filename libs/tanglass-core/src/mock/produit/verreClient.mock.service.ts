import { Injectable } from '@angular/core';
import { VerreClient } from "../../models/produit/matiere_premiere.model";
import { verresClients} from '../../data/produit/matiere_premiere.data';
import { BaseMockService } from "../shared/base.mock.service";
import {VerreClientService} from '../../services/produit/verre_client.service'
import { Mixin } from 'ts-mixer';

class VerreClientMockData extends BaseMockService<VerreClient> {
  constructor() {
    super();
    this.listData = verresClients;
  }
}

@Injectable({
  providedIn: "root",
})
export class VerreClientMockService extends Mixin(VerreClientService,VerreClientMockData){
}