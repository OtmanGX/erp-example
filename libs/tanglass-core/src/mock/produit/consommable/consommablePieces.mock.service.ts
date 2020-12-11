import { Injectable } from '@angular/core';
import { ConsommablePieces } from "../../../models/produit/consommable.model";
import { BaseMockService } from "../../shared/base.mock.service";


import { Mixin } from 'ts-mixer';
import { consommables } from '../../../data/produit/consommable.data';
import { ConsommablePiecesService } from '../../../services/produit/consommables/consommablePieces.service';

class ConsommableMockData extends BaseMockService<ConsommablePieces> {
  constructor() {
    super();
    this.listData = consommables;
  }
}

@Injectable({
  providedIn: "root",
})
export class ConsommablePiecesMockService extends Mixin(ConsommablePiecesService,ConsommableMockData){
}

