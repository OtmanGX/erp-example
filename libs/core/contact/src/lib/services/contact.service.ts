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
  Contact_Contact
} from '@tanglass-erp/infrastructure/graphql';
import { Contact ,DetailedContact} from '../models/contact.models';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private getAllGQL: GetAllContactsGQL,
    private getByIdGQL: GetContactByIdGQL,
    private deleteOneGQL: DeleteContactGQL,
    private insertOneGQL: InsertContactGQL,
    private updateOneGQL: UpdateContactGQL

  ) {
    this.getOneById('ee196a6a-9291-4932-b067-64d976cc5a20').subscribe(obj => { let data: DetailedContact = obj.data.contact_contact_by_pk; console.log(obj.data.contact_contact_by_pk) });
    this.getAll().subscribe(obj =>{let data: Contact[]=obj.data.contact_contact;console.log(obj.data.contact_contact)} );
    this.insertOne({phone:"phone",name:"name"}).subscribe(obj =>{let data: Contact=obj.data.insert_contact_contact_one;console.log(obj.data.insert_contact_contact_one)} );
    this.updateOne({id:"ee196a6a-9291-4932-b067-64d976cc5a20",phone:"phoneUpdate",name:"nameupdate"}).subscribe(obj =>{let data: Contact=obj.data.update_contact_contact_by_pk;console.log(obj.data.update_contact_contact_by_pk)} );

   }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(id: string) {
    return this.getByIdGQL.fetch({ id })
  }
 
  insertOne(createdOne: InsertContactMutationVariables) {
    return this.insertOneGQL.mutate(createdOne)

  }
  updateOne(updatedOne: UpdateContactMutationVariables) {
    return this.updateOneGQL.mutate(updatedOne)
  }
  removeOne(id: string) {
    return this.deleteOneGQL.mutate({ id })
  }



}
