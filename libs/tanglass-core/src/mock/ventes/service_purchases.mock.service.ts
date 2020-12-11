import { Injectable } from "@angular/core";
import { accessoires_purchases} from '../../data/ventes/accessoire_purchases.data';
import { BaseMockService } from "../shared/base.mock.service";
import { Mixin } from 'ts-mixer';
import { ServicePurchasesService } from '../../services/ventes/service_purchases.service';
import { Service_purchases } from '../../models/ventes/customerPurchases/service_purchases.model';
import { service_purchases } from '../../data/ventes/service_purchases.data';

class ServicePurchasesMockData extends BaseMockService<Service_purchases> {
  constructor() {
    super();
    this.listData = service_purchases;
  }
}

@Injectable({
  providedIn: "root",
})
export class ServicePurchasesMockService extends Mixin(ServicePurchasesService,ServicePurchasesMockData){
}


