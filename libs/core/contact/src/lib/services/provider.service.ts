import { Injectable } from '@angular/core';
import {
  GetAllProvidersGQL,
  GetProviderByIdGQL,
  UpdateProviderGQL,
  InsertProviderGQL,
  DeleteProviderGQL,
  InsertProviderMutationVariables,
  UpdateProviderMutationVariables,
  DeleteManyProvidersGQL
} from '@tanglass-erp/infrastructure/graphql';
import { DetailedProvider, InsertedProvider } from "../models/provider.models";
import { adaptAddress, dataAdapter } from '../utils/dataAdapter';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(
    private getAllGQL: GetAllProvidersGQL,
    private getByIdGQL: GetProviderByIdGQL,
    private insertOneGQL: InsertProviderGQL,
    private updateOneGQL: UpdateProviderGQL,
    private deleteOneGQL: DeleteProviderGQL,
    private deleteMany:DeleteManyProvidersGQL
  ) {

  }


  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(id: string) {
    return this.getByIdGQL.fetch({ id })
  }

  insertOne(createdOne:InsertedProvider) {
    let addedValue: InsertProviderMutationVariables;
    addedValue= dataAdapter(createdOne);

    return this.insertOneGQL.mutate(addedValue)


  }
  updateOne(updatedOne:DetailedProvider ) {
    let updatedValue: UpdateProviderMutationVariables;
    updatedValue ={...updatedOne,...adaptAddress(updatedOne.addresses)}
    return this.updateOneGQL.mutate(updatedValue)
  }

  removeOne(id: string) {
    return this.deleteOneGQL.mutate({ id })
  }

  removeMany(ids: string[]) {
    return this.deleteMany.mutate({ids})
  }

}
