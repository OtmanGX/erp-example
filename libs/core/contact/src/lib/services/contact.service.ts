import { Injectable } from '@angular/core';
import {
  GetAllContactsGQL,
  GetContactByIdGQL,
  DeleteContactGQL,
  UpdateContactGQL,
  InsertContactGQL,
  InsertContactMutationVariables,
  DeleteManyContactsGQL,
  AddContactAddressGQL,
  Contact_Contact_Address_Insert_Input,
  DeleteContactAddressGQL,
} from '@tanglass-erp/infrastructure/graphql';


import {  DetailedContact, InsertedContact } from '../models/contact.models';
import { InsertAddressContact,DeleteAddress } from '../models/shared.models';
import {  dataAdapter } from '../utils/dataAdapter';



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
    private deleteMany:DeleteManyContactsGQL,
    private addContactAddressGQL:AddContactAddressGQL,
    private deleteContactAddress:DeleteContactAddressGQL,


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
    return this.updateOneGQL.mutate(updatedOne)
  }

  removeOne(id: string) {
    return this.deleteOneGQL.mutate({ id })
  }

  removeMany(ids: string[]) {
    return this.deleteMany.mutate({ids})
  }

  //new methods for add/delete a contact addresses 

   addAddress(value:InsertAddressContact){
     return this.addContactAddressGQL.mutate(value)
   }

   deleteAddress(value:DeleteAddress){
       this.deleteContactAddress.mutate(value)
   }


}
