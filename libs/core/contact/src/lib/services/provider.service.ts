import { Injectable } from '@angular/core';
import {
  GetAllProvidersGQL,
  GetProviderByIdGQL,
  UpdateProviderGQL,
  InsertProviderGQL,
  DeleteProviderGQL,
  InsertProviderMutationVariables,
  DeleteManyProvidersGQL,
  AddProviderAddressGQL,
  AddProviderContactGQL,
  AffectProviderContactGQL,
  DeleteProviderAddressGQL

} from '@tanglass-erp/infrastructure/graphql';
import { DetailedProvider, InsertedProvider } from "../models/provider.models";
import { dataAdapter } from '../utils/dataAdapter';
import { InsertAddressContact,InsertContact,AffectContact,DeleteAddress} from "../models/shared.models";
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
    private deleteMany:DeleteManyProvidersGQL,
    private addProviderAddressGQL:AddProviderAddressGQL,
    private addProviderContact:AddProviderContactGQL,
    private affectProviderContact:AffectProviderContactGQL,
    private deleteProviderAddress:DeleteProviderAddressGQL,

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
    return this.updateOneGQL.mutate(updatedOne)
  }

  removeOne(id: string) {
    return this.deleteOneGQL.mutate({ id })
  }

  removeMany(ids: string[]) {
    return this.deleteMany.mutate({ids})
  }
  //new methods for add/delete a provider addresses and add/affect contact to provider

  addAddress(value:InsertAddressContact){
    return this.addProviderAddressGQL.mutate(value)
  }

  addContact(value:InsertContact){
    this.addProviderContact.mutate(value)

  }


  affectContact(value:AffectContact){
    this.affectProviderContact.mutate(value)
  }

  deleteAddress(value:DeleteAddress){
    this.deleteProviderAddress.mutate(value)
  }
  
}
