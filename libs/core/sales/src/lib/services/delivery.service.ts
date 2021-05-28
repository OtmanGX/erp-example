import { Injectable } from '@angular/core';

import {
  InsertDeliveryGQL,
  GetDeliveryByIdGQL,
  GetAllDeliveryGQL,
} from '@tanglass-erp/infrastructure/graphql';
import { InsertedDeliveryForm } from '@tanglass-erp/core/sales';
import { adaptDelivery } from '../utils/data-adapter';
@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(
    private insertDeliveryGQL: InsertDeliveryGQL,
    private getDeliveryByIdGQL: GetDeliveryByIdGQL,
    private getAllDeliveryGQL: GetAllDeliveryGQL,
  ) {}


  getAll() {
    return this.getAllDeliveryGQL.watch().valueChanges
  }

  getOneById(id: string) {
    return this.getDeliveryByIdGQL.watch({id}).valueChanges
  }

  insertOne(delivery: InsertedDeliveryForm) {
    return this.insertDeliveryGQL.mutate(
      adaptDelivery(delivery)
    );
  }
}
