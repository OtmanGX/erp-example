import { Injectable } from '@angular/core';
import {
  GetAllServiceConfigGQL,
  InsertServiceConfigGQL,
  GetServiceConfigByIdGQL,
  InsertServiceGQL,
  InsertServiceMutationVariables,
  DeleteManyGQL,
} from '@tanglass-erp/infrastructure/graphql';
import {
  InsertedServiceConfig,
  InsertedService,
} from '../models/service.model';
import { adaptProduct } from '../utils/dataAdapter';
@Injectable({
  providedIn: 'root',
})
export class ServicesConfigService {
  constructor(
    private getAllGQL: GetAllServiceConfigGQL,
    private getByIdGQL: GetServiceConfigByIdGQL,
    private insertOneGQL: InsertServiceConfigGQL,
    private insertOneItemGQL: InsertServiceGQL,
    private deleteMany: DeleteManyGQL
  ) {}

  getAll() {
    return this.getAllGQL.watch().valueChanges;
  }

  getOneById(id: string) {
    return this.getByIdGQL.fetch({ id });
  }

  insertOne(createdOne: InsertedServiceConfig) {
    return this.insertOneGQL.mutate(createdOne);
  }

  addOneItem(createdOne: InsertedService) {
    let addeValue: InsertServiceMutationVariables = adaptProduct(
      createdOne,
      'service'
    );

    return this.insertOneItemGQL.mutate(addeValue);
  }

  removeManyItems(codes: string[]) {
    return this.deleteMany.mutate({ codes });
  }
}
