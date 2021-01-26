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
import { InsertAddressContact,InsertContact,AffectContactProvider,DeleteAddress} from "../models/shared.models";
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
    /**
    this.getOneById('ca6c4a90-dac3-46f0-945c-26ace051f52e').subscribe(obj => { let data: DetailedProvider = obj.data.contact_provider_by_pk; console.log(obj.data.contact_provider_by_pk) });
    this.getAll().subscribe(obj =>{let data: Provider[]=obj.data.contact_provider;console.log(obj.data.contact_provider)} );
    this.insertOne({phone:"phone",name:"name"}).subscribe(obj =>{let data: Provider=obj.data.insert_contact_provider_one;console.log(obj.data.insert_contact_provider_one)} );
    this.updateOne({id:"ca6c4a90-dac3-46f0-945c-26ace051f52e",phone:"phoneUpdate",name:"nameupdate"}).subscribe(obj =>{let data: Provider=obj.data.update_contact_provider_by_pk;console.log(obj.data.update_contact_provider_by_pk)} );
 */

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
    return this.addProviderContact.mutate(value)

  }


  affectContact(value:AffectContactProvider[]){
    return this.affectProviderContact.mutate({affectedContacts:value})
  }

  deleteAddress(value:DeleteAddress){
    return this.deleteProviderAddress.mutate(value)
  }

}
