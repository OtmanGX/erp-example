import { Injectable } from '@angular/core';
import {
  GetAllContactsGQL,
  GetContactByIdGQL,
  DeleteContactGQL,
  UpdateContactGQL,
  InsertContactGQL,
  InsertContactMutationVariables,
  UpdateContactMutationVariables,
  DeleteManyContactsGQL

} from '@tanglass-erp/infrastructure/graphql';


import {   DetailedContact, InsertedContact } from '../models/contact.models';
import {  dataAdapter,adaptAddress } from '../utils/dataAdapter';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private getAllGQL: GetAllContactsGQL,
    private getByIdGQL: GetContactByIdGQL,
    private deleteOneGQL: DeleteContactGQL,
    private insertOneGQL: InsertContactGQL,
    private updateOneGQL: UpdateContactGQL,
    private deleteMany:DeleteManyContactsGQL

  ) {

  }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(id: string) {
    return this.getByIdGQL.fetch({ id })
  }

  insertOne(createdOne: InsertedContact) {
    let addedValue: InsertContactMutationVariables;
    addedValue = dataAdapter(createdOne);
    return this.insertOneGQL.mutate(addedValue)
  }
  updateOne(updatedOne: DetailedContact) {
    let updatedValue: UpdateContactMutationVariables;
    let addresses=adaptAddress(updatedOne.addresses)
    updatedValue ={...updatedOne,...{addresses}}
    return this.updateOneGQL.mutate(updatedValue)
  }


  updateCustomers(){

  }
  updateProviders(){

  }
  removeOne(id: string) {
    return this.deleteOneGQL.mutate({ id })
  }

  removeMany(ids: string[]) {
    return this.deleteMany.mutate({ids})
  }




}
