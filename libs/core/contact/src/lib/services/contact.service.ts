import { Injectable } from '@angular/core';
import {
  GetAllContactsGQL,
  GetContactByIdGQL,
  GetContactByIdQueryVariables,
  DeleteContactGQL,
  UpdateContactGQL,
  InsertContactGQL,
  InsertContactMutationVariables,
  UpdateContactMutationVariables,
  DeleteManyContactsGQL,
  AddContactAddressGQL,
  Contact_Contact_Address_Insert_Input
} from '@tanglass-erp/infrastructure/graphql';


import {  DetailedContact, InsertedContact } from '../models/contact.models';
import { InsertAddressContact } from '../models/shared.models';
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
    private addContactAddressGQL:AddContactAddressGQL

  ) {
    /** 
    this.getOneById('ee196a6a-9291-4932-b067-64d976cc5a20').subscribe(obj => { let data: DetailedContact = obj.data.contact_contact_by_pk; console.log(obj.data.contact_contact_by_pk) });
    this.getAll().subscribe(obj =>{let data: Contact[]=obj.data.contact_contact;console.log(obj.data.contact_contact)} );
    this.updateOne({id:"ee196a6a-9291-4932-b067-64d976cc5a20",phone:"phoneUpdate",name:"nameupdate"}).subscribe(obj =>{let data: Contact=obj.data.update_contact_contact_by_pk;console.log(obj.data.update_contact_contact_by_pk)} );
    */

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

  //new methods

   addAddress(value:InsertAddressContact){
     return this.addContactAddressGQL.mutate(value)
   }



}
