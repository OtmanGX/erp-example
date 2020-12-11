import { Injectable } from "@angular/core";
import { accessoireOrders} from '../../data/inventory/accessoireOrders.data';
import { BaseMockService } from "../shared/base.mock.service";
import { Mixin } from 'ts-mixer';
import { OrderAccessoireService } from '../../services/inventory/orderAccessoires.service';
import { AccessoireOrder } from '../../models/inventory/accessoireOrders.model';

class OrderAccessoireMockData extends BaseMockService<AccessoireOrder> {
  constructor() {
    super();
    this.listData = accessoireOrders;
  }
}

@Injectable({
  providedIn: "root",
})
export class AccessoireOrdersMockService extends Mixin(OrderAccessoireService,OrderAccessoireMockData){
}
