import { Injectable } from "@angular/core";
import { Devis } from "../../models/ventes/devis.model";
import {DevisService} from '../../services/ventes/devis.service'
import { devis} from '../../data/ventes/devis.data';
import { Mixin } from 'ts-mixer';
import { BaseMockService } from "../shared/base.mock.service";

class DevisMockData extends BaseMockService<Devis> {
  constructor(

  ) {
    super();
    this.listData = devis;
  }
}

@Injectable({
  providedIn: "root",
})
export class DevisMockService extends Mixin(DevisService,DevisMockData){


}
