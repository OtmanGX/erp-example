import { Injectable } from "@angular/core";
import { ordersProduction} from '../../data/production/orderProduction.data';
import { BaseMockService } from "../shared/base.mock.service";
import { Mixin } from 'ts-mixer';
import { OrderProductionService } from '../../services/production/orderProduction.service';
import { ProductionOrder } from '../../models/production/productionOrder.model';

class OrderProductionMockData extends BaseMockService<ProductionOrder> {
  constructor() {
    super();
    this.listData = ordersProduction;
  }
}

@Injectable({
  providedIn: "root",
})
export class OrderProductionMockService extends Mixin(OrderProductionService,OrderProductionMockData){
}
