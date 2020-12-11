import { Injectable } from "@angular/core";
import { systemApparent_purchases} from '../../data/ventes/systemApparent_purchases.data';
import { BaseMockService } from "../shared/base.mock.service";
import { Mixin } from 'ts-mixer';
import { SystemApparent_purchases } from '../../models/ventes/customerPurchases/systemApparent_purchases.model';
import { SystemApparentService } from '../../services/produit/systemApparent.service';

class SystemApparentPurchasesMockData extends BaseMockService<SystemApparent_purchases> {
  constructor() {
    super();
    this.listData = systemApparent_purchases;
  }
}

@Injectable({
  providedIn: "root",
})
export class SystemApparentPurchasesMockService extends Mixin(SystemApparentService,SystemApparentPurchasesMockData){
}

