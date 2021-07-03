import { Injectable } from '@angular/core';

import {
  InsertDeliveryGQL,
  GetDeliveryByIdGQL,
  UpdateDeliveryLineGQL,
  UpdateDeliveryGQL,
  DeleteDeliveryGQL,
  GetDeliveriesByGQL,
  UpdateDeliveryLineMutationVariables,
  UpdateDeliveryMutationVariables,
} from '@tanglass-erp/infrastructure/graphql';
import { deliveryFilter, InsertedDeliveryForm } from '@tanglass-erp/core/sales';
import { combineLatest } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(
    private insertDeliveryGQL: InsertDeliveryGQL,
    private getDeliveryByIdGQL: GetDeliveryByIdGQL,
    private updateDeliveryLineGQL: UpdateDeliveryLineGQL,
    private updateDeliveryGQL: UpdateDeliveryGQL,
    private deleteDeliveryGQL: DeleteDeliveryGQL,
    private getDeliveriesByGQL: GetDeliveriesByGQL
  ) {}

  getBy(params: deliveryFilter) {
    return this.getDeliveriesByGQL.fetch(params);
  }

  getOneById(id: string) {
    return this.getDeliveryByIdGQL.fetch({ id });
  }

  insertOne(delivery: InsertedDeliveryForm) {
    return this.insertDeliveryGQL.mutate(delivery);
  }

  updateDeliveryLine(deliveryLine: UpdateDeliveryLineMutationVariables) {
    return this.updateDeliveryLineGQL.mutate(deliveryLine);
  }

  updateDelivery(delivery: InsertedDeliveryForm) {
    const { delivery_lines, ...deliveryOnly } = delivery;
    return combineLatest(
      this.updateDeliveryGQL.mutate(
        deliveryOnly as UpdateDeliveryMutationVariables
      ),
      ...delivery_lines.map((e) => {
        const deliveryLine: UpdateDeliveryLineMutationVariables = {
          id: e.id,
          product_draft_id: e.product_draft_id,
          amount: e.amount,
          delivered: e.delivered,
        };
        return this.updateDeliveryLineGQL.mutate(deliveryLine);
      })
    );
  }

  deleteMany(ids: string[]) {
    return this.deleteDeliveryGQL.mutate({ ids });
  }
}
