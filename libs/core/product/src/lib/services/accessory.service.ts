import { Injectable } from '@angular/core';
import {
  GetAllAccessoriesGQL,
  InsertAccessoryGQL,
  GetAccessoryByIdGQL,
  InsertAccessoryMutationVariables
} from '@tanglass-erp/infrastructure/graphql';
import { Accessory, DetailedAccessory } from "../models/accessory.model";
@Injectable({
  providedIn: 'root'
})
export class AccessoryService {

  constructor(
    private getAllGQL: GetAllAccessoriesGQL,
    private getByIdGQL: GetAccessoryByIdGQL,
    private insertOneGQL: InsertAccessoryGQL,
  ) {

  }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(id: string) {
    return this.getByIdGQL.subscribe({ id })
  }

  insertOne(createdOne: InsertAccessoryMutationVariables) {
    return this.insertOneGQL.mutate(createdOne)
  }

}
