import { Injectable } from '@angular/core';
import {
  GetAllConsumablesGQL,
  InsertConsumableGQL,
  GetConsumableByIdGQL,
  InsertConsumableMutationVariables


} from '@tanglass-erp/infrastructure/graphql';
import { Consumable,DetailedConsumable } from "../models/consumable.model";
@Injectable({
  providedIn: 'root'
})
export class ConsumableService {


  constructor(
    private getAllGQL: GetAllConsumablesGQL,
    private getByIdGQL: GetConsumableByIdGQL,
    private insertOneGQL: InsertConsumableGQL,
  ) {
    
  }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(id: string) {
    return this.getByIdGQL.subscribe({ id })
  }

  insertOne(createdOne: InsertConsumableMutationVariables) {
    return this.insertOneGQL.mutate(createdOne)
  }
}
