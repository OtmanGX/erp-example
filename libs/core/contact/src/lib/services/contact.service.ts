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
  DeleteManyContactsGQL
  
} from '@tanglass-erp/infrastructure/graphql';


import {  Contact, DetailedContact, InsertedContact } from '../models/contact.models';
import { ContactAddress } from '../models/shared.models';
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
