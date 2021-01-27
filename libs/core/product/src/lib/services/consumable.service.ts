import { Injectable } from '@angular/core';
import {
  GetAllConsumablesGQL,
  InsertConsumableGQL,
  GetConsumableByIdGQL,
  DeleteOneGQL,
  DeleteManyGQL
} from '@tanglass-erp/infrastructure/graphql';
import {  InsertedConsumable } from "../models/consumable.model";

@Injectable({
  providedIn: 'root'
})
export class ConsumableService {


  constructor(
    private getAllGQL: GetAllConsumablesGQL,
    private getByIdGQL: GetConsumableByIdGQL,
    private insertOneGQL: InsertConsumableGQL,
    private deleteOneGQL: DeleteOneGQL,
    private deleteMany:DeleteManyGQL
  ) {
 }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(id: string) {
    return this.getByIdGQL.fetch({ id })
  }

  insertOne(createdOne: InsertedConsumable) {
    return this.insertOneGQL.mutate(createdOne)
  }
  removeOne(code: string) {
    return this.deleteOneGQL.mutate({ code })
  }

  removeMany(codes: string[]) {
    return this.deleteMany.mutate({codes})
  }
}
