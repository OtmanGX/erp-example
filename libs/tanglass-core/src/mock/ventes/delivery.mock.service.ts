import { Injectable } from "@angular/core";
import { Delivery } from "../../models/ventes/delivery.model";
import {DeliveryService} from '../../services/ventes/delivery.service'
import { deliveries} from '../../data/ventes/delivery.data';
import { Mixin } from 'ts-mixer';
import { BaseMockService } from "../shared/base.mock.service";
import { of as observableOf,  Observable } from 'rxjs';

class DeliveryMockData extends BaseMockService<Delivery> {
  constructor(

  ) {
    super();
    this.listData = deliveries;
  }
}

@Injectable({
  providedIn: "root",
})
export class DeliveryMockService extends Mixin(DeliveryService,DeliveryMockData){

  getDeliveryByClient(clientId): Observable<Delivery[]> {
    let matchedDeliveries = this.listData.filter(item => item.formDelivery.client.id === clientId);
    return observableOf(matchedDeliveries)
  }
}
