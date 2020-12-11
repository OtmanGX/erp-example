import { Injectable } from "@angular/core";
import { consommables_purchases} from '../../data/ventes/consommables_purchases.data';
import { BaseMockService } from "../shared/base.mock.service";
import { Mixin } from 'ts-mixer';
import { ConsommablePurchasesService } from '../../services/ventes/consommable_purchases.service';
import { Consommable_purchases } from '../../models/ventes/customerPurchases/consommable_purchases.model';

class ConsommablePurchasesMockData extends BaseMockService<Consommable_purchases> {
  constructor() {
    super();
    this.listData = consommables_purchases;
  }
}

@Injectable({
  providedIn: "root",
})
export class ConsommablePurchasesMockService extends Mixin(ConsommablePurchasesService,ConsommablePurchasesMockData){
}


