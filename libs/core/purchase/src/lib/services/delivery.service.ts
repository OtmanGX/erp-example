import { Injectable } from '@angular/core';
import {
  GetAllPurchasesDeliveriesGQL,
  GetPurchaseDeliveryByIdGQL,
  InsertPurchaseDeliveryGQL,
} from '@tanglass-erp/infrastructure/graphql';
@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(
    private getPurchaseDeliveriesGQL: GetAllPurchasesDeliveriesGQL,
    private insertPurchaseDeliveryGQL: InsertPurchaseDeliveryGQL,
    private getPurchaseDeliveryByIdGQL: GetPurchaseDeliveryByIdGQL
  ) {}

  getAll() {
    return this.getPurchaseDeliveriesGQL.watch().valueChanges;
  }

  getOneById(id: number) {
    return this.getPurchaseDeliveryByIdGQL.fetch({ id });
  }

  insertOne(delivery) {
    return this.insertPurchaseDeliveryGQL.mutate(delivery);
  }
}
