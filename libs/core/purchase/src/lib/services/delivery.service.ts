import { Injectable } from '@angular/core';
import {
  GetAllPurchasesDeliveriesGQL,
  GetPurchaseDeliveryByIdGQL,
  InsertPurchaseDeliveryGQL,
  DeletePurchaseDeliveryGQL
} from '@tanglass-erp/infrastructure/graphql';
@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(
    private getPurchaseDeliveriesGQL: GetAllPurchasesDeliveriesGQL,
    private insertPurchaseDeliveryGQL: InsertPurchaseDeliveryGQL,
    private getPurchaseDeliveryByIdGQL: GetPurchaseDeliveryByIdGQL,
    private deletePurchaseDeliveryGQL:DeletePurchaseDeliveryGQL
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
  removeMany(ids:number[]){
    return this.deletePurchaseDeliveryGQL.mutate({ids})
  }
}
