import { Injectable } from '@angular/core';
import {
  GetAllProvidersGQL,
  GetProviderByIdGQL,
  UpdateProviderGQL,
  InsertProviderGQL,
  DeleteProviderGQL,
  InsertProviderMutationVariables,
  UpdateProviderMutationVariables,
  InsertProviderMutation

} from '@tanglass-erp/infrastructure/graphql';
import { Provider,DetailedProvider, InsertedProvider } from "../models/provider.models";
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
    let updatedValue: UpdateProviderMutationVariables;
    updatedValue ={...updatedOne,...adaptAddress(updatedOne.addresses)}
    return this.updateOneGQL.mutate(updatedValue)
  }

  removeOne(id: string) {
    return this.deleteOneGQL.mutate({ id })
  }

}
