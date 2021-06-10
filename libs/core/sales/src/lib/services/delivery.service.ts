import { Injectable } from '@angular/core';

import {
  InsertDeliveryGQL,
  GetDeliveryByIdGQL,
  GetAllDeliveryGQL,
  UpdateDeliveryLineGQL,
  UpdateDeliveryGQL,
  DeleteDeliveryGQL,
  UpdateDeliveryLineMutationVariables,
  UpdateDeliveryMutationVariables,
} from '@tanglass-erp/infrastructure/graphql';
import { InsertedDeliveryForm } from '@tanglass-erp/core/sales';
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
    private deleteDeliveryGQL: DeleteDeliveryGQL
  ) {}

  getAll() {
    return this.getAllDeliveryGQL.watch().valueChanges;
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
          product: e.product,
          amount: e.amount,
          delivered: e.delivered,
          quantity: e.quantity,
          product_label: e.product_label,
        };
        return this.updateDeliveryLineGQL.mutate(deliveryLine);
      })
    );
  }

  deleteMany(ids: string[]) {
    return this.deleteDeliveryGQL.mutate({ ids });
  }
}
