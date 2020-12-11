import { Injectable } from "@angular/core";
import { matPremiere_purchases} from '../../data/ventes/matiere_premiere_purchases.data';
import { BaseMockService } from "../shared/base.mock.service";
import { Mixin } from 'ts-mixer';
import { MatierePremierePurchasesService } from '../../services/ventes/matPremiere_purchases.service';
import { MatierePremiere_purchases } from '../../models/ventes/customerPurchases/matiere_premiere_purchases.model';

class MatierePremierePurchasesMockData extends BaseMockService<MatierePremiere_purchases> {
  constructor() {
    super();
    this.listData = matPremiere_purchases;
  }
}

@Injectable({
  providedIn: "root",
})
export class MatPremierePurchasesMockService extends Mixin(MatierePremierePurchasesService,MatierePremierePurchasesMockData){
}

