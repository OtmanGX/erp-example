import { Injectable } from '@angular/core';
import {
  GetAllAccessoriesGQL,
  InsertAccessoryGQL,
  GetAccessoryByIdGQL,
  DeleteOneGQL,
  DeleteManyGQL,
  InsertAccessoryMutationVariables,
} from '@tanglass-erp/infrastructure/graphql';
import { insertedAccessory } from '../models/accessory.model';
import { adaptProduct } from '../utils/dataAdapter';

@Injectable({
  providedIn: 'root',
})
export class AccessoryService {
  constructor(
    private getAllGQL: GetAllAccessoriesGQL,
    private getByIdGQL: GetAccessoryByIdGQL,
    private insertOneGQL: InsertAccessoryGQL,
    private deleteOneGQL: DeleteOneGQL,
    private deleteMany: DeleteManyGQL
  ) {}

  getAll() {
    return this.getAllGQL.watch().valueChanges;
  }

  getOneById(id: string) {
    return this.getByIdGQL.fetch({ id });
  }

  insertOne(createdOne: insertedAccessory) {
    let addeValue: InsertAccessoryMutationVariables = adaptProduct(
      createdOne,
      'accessory'
    );
    return this.insertOneGQL.mutate(addeValue);
  }

  removeOne(code: string) {
    return this.deleteOneGQL.mutate({ code });
  }

  removeMany(codes: string[]) {
    return this.deleteMany.mutate({ codes });
  }
}
