import { Injectable } from "@angular/core";
import { accessoires_purchases} from '../../data/ventes/accessoire_purchases.data';
import { BaseMockService } from "../shared/base.mock.service";
import { Mixin } from 'ts-mixer';
import { Accessoire_purchases } from '../../models/ventes/customerPurchases/accessoire_purchases.model';
import { AccessoirePurchasesService } from '../../services/ventes/accessoire_purchases.service';

class AccessoirePurchasesMockData extends BaseMockService<Accessoire_purchases> {
  constructor() {
    super();
    this.listData = accessoires_purchases;
  }
}

@Injectable({
  providedIn: "root",
})
export class AccessoirePurchasesMockService extends Mixin(AccessoirePurchasesService,AccessoirePurchasesMockData){
}


