import { Injectable } from '@angular/core';
import {
  GetAllCustomersGQL,
  GetCustomerByIdGQL,
  DeleteCustomerGQL,
  UpdateCustomerGQL,
  InsertCustomerGQL,
  InsertCustomerMutationVariables,
  UpdateCustomerMutationVariables,
  Contact_Customer_Address_Insert_Input,
  DeleteManyCustomersGQL,
  AddCustomerAddressesGQL

} from '@tanglass-erp/infrastructure/graphql';
import { InsertAddressesCustomer, DetailedCustomer, InsertedCustomer } from '../models/customer.models';
import { DetailedCustomerVM } from '../pagesVM/customers.vm';
import { adaptAddress, dataAdapter } from '../utils/dataAdapter';

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
    private addCustomerAddressesGQL:AddCustomerAddressesGQL

    ) {
/** 
    this.getOneById('ca6c4a90-dac3-46f0-945c-26ace051f52e').subscribe(obj => { let data: DetailedCustomer = obj.data.contact_customer_by_pk; console.log(obj.data.contact_customer_by_pk) });
    this.getAll().subscribe(obj => { let data: Customer[] = obj.data.contact_customer; console.log(obj.data.contact_customer) });
    this.updateOne({ id: "ca6c4a90-dac3-46f0-945c-26ace051f52e", phone: "phoneUpdate", name: "nameupdate" }).subscribe(obj => { let data: Customer = obj.data.update_contact_customer_by_pk; console.log(obj.data.update_contact_customer_by_pk) });
   
    this.insertOne(
  
    {  phone: "new phone", name: "new name" ,
    addresses:[{address:" test address",city:"city",zip:"zip"},
  {address:" test address2",city:"city2",zip:"zip2"}]
  ,contacts:[{code:" contact code ",name:"contactname",phone:"0248545"}],
  affectedContacts:[]
  }
  
  ).subscribe(obj => { let data: Customer = obj.data.insert_contact_customer_one; console.log(obj.data.insert_contact_customer_one) });
  

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

  //new methods
  
  addAddresses(value:InsertAddressesCustomer){
    return this.addCustomerAddressesGQL.mutate(value)
  }
  addContacts(){
    
  }
  affectContacts(){

  }

}
