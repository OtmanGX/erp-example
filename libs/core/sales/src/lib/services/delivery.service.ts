import { Injectable } from '@angular/core';

import {
  InsertDeliveryGQL,
  GetDeliveryByIdGQL,
  GetAllDeliveryGQL,
  UpdateDeliveryLineGQL,
  UpdateDeliveryGQL,
  UpdateDeliveryLineMutationVariables,
  UpdateDeliveryMutationVariables
} from '@tanglass-erp/infrastructure/graphql';
import { DeliveryLine, InsertedDeliveryForm } from '@tanglass-erp/core/sales';
import { adaptDelivery } from '../utils/data-adapter';
import { combineLatest } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(
    private insertDeliveryGQL: InsertDeliveryGQL,
    private getDeliveryByIdGQL: GetDeliveryByIdGQL,
    private getAllDeliveryGQL: GetAllDeliveryGQL,
    private updateDeliveryLineGQL: UpdateDeliveryLineGQL,
    private updateDeliveryGQL: UpdateDeliveryGQL,
  ) {}


  getAll() {
    return this.getAllDeliveryGQL.watch().valueChanges
  }

  getOneById(id: string) {
    return this.getDeliveryByIdGQL.fetch({id})
  }

  insertOne(delivery: InsertedDeliveryForm) {
    return this.insertDeliveryGQL.mutate(
      adaptDelivery(delivery)
    );
  }


  updateDeliveryLine(deliveryLine: UpdateDeliveryLineMutationVariables) {
    return this.updateDeliveryLineGQL.mutate(deliveryLine);
  }

  updateDelivery(delivery: InsertedDeliveryForm) {
      const {orders, delivery_lines, ...deliveryOnly} = delivery;
    return combineLatest(
      this.updateDeliveryGQL.mutate(deliveryOnly as UpdateDeliveryMutationVariables),
      ...delivery_lines.map(e => {
          const deliveryLine: UpdateDeliveryLineMutationVariables = {
            id: e.id,
            product: e.product,
            amount: e.amount,
            delivered: e.delivered,
            company_name: e.company_name,
            quantity: e.quantity,
            product_label: e.product_label,
            isReturned: e.isReturned,
          }
          return this.updateDeliveryLineGQL.mutate(deliveryLine)
        })
      );

    // return this.updateDeliveryLineGQL.mutate(e);
    // console.log(deliveryOnly)
    // return this.updateDeliveryGQL.mutate(deliveryOnly);
  }
}
