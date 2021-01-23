import { Injectable } from '@angular/core';
import {
  GetAllCustomersGQL,
  GetCustomerByIdGQL,
  DeleteCustomerGQL,
  UpdateCustomerGQL,
  InsertCustomerGQL,
  InsertCustomerMutationVariables,
  DeleteManyCustomersGQL,
  AddCustomerAddressGQL,
  AddCustomerContactGQL,
  AffectCustomerContactGQL,
  DeleteCustomerAddressGQL

} from '@tanglass-erp/infrastructure/graphql';
import {  DetailedCustomer, InsertedCustomer,Customer } from '../models/customer.models';
import {  dataAdapter } from '../utils/dataAdapter';
import { InsertAddressContact ,InsertContact,AffectContact,DeleteAddress} from "../models/shared.models";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private getAllGQL: GetAllCustomersGQL,
    private getByIdGQL: GetCustomerByIdGQL,
    private deleteOneGQL: DeleteCustomerGQL,
    private insertOneGQL: InsertCustomerGQL,
    private updateOneGQL: UpdateCustomerGQL,
    private deleteMany:DeleteManyCustomersGQL,
    private addCustomerAddressGQL:AddCustomerAddressGQL,
    private addCustomerContact:AddCustomerContactGQL,
    private affectCustomerContact:AffectCustomerContactGQL,
    private deleteCustomerAddress:DeleteCustomerAddressGQL,

    ) {
/** 
    this.getOneById('ca6c4a90-dac3-46f0-945c-26ace051f52e').subscribe(obj => { let data: DetailedCustomer = obj.data.contact_customer_by_pk; console.log(obj.data.contact_customer_by_pk) });
    this.getAll().subscribe(obj => { let data: Customer[] = obj.data.contact_customer; console.log(obj.data.contact_customer) });
    this.updateOne({ id: "ca6c4a90-dac3-46f0-945c-26ace051f52e", phone: "phoneUpdate", name: "nameupdate" }).subscribe(obj => { let data: Customer = obj.data.update_contact_customer_by_pk; console.log(obj.data.update_contact_customer_by_pk) });
   
   
    this.insertOne(
  
    {  phone: "4554", name: "fh" ,code:"gjy",
    addresses:[{address:"  address",city:"citgyjy",zip:"zip"},
  {address:" test address2",city:"city2",zip:"zip2"}]
  ,contacts:[{code:" contact ukku ",name:"hyukk",phone:"35132"}],
  affectedContacts:[]
  }
  
  ).subscribe(obj => { let data: Customer = obj.data.insert_contact_customer_one; console.log(obj.data.insert_contact_customer_one) });
  
this.updateOne({id:"67740a6b-2e68-4bf6-a6cb-ea81442ac43a",code:"code",name:"nouveau",phone:"4554514"}).subscribe(obj=>console.log(obj.data.update_contact_customer_by_pk))

    */

  }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(id: string,) {
    return this.getByIdGQL.fetch({ id })
  }

  insertOne(createdOne: InsertedCustomer) {
    let addedValue: InsertCustomerMutationVariables;
    addedValue= dataAdapter(createdOne);
    return this.insertOneGQL.mutate(addedValue)
  }

  updateOne(updatedOne: DetailedCustomer) {
    return this.updateOneGQL.mutate(updatedOne)
  }


  removeOne(id: string) {
    return this.deleteOneGQL.mutate({ id })
  }

  removeMany(ids: string[]) {
    return this.deleteMany.mutate({ids})
  }

  //new methods for add/delete a cutomer addresses and add/affect contact to customer
  
  addAddress(value:InsertAddressContact){
    return this.addCustomerAddressGQL.mutate(value)
  }
  addContact(value:InsertContact){
    this.addCustomerContact.mutate(value)
  }

  affectContact(value:AffectContact){
    this.affectCustomerContact.mutate(value)

  }
  deleteAddress(value:DeleteAddress){
    this.deleteCustomerAddress.mutate(value)

  }
}
