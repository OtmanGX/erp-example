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
  
} from '@tanglass-erp/infrastructure/graphql';
import { Customer, DetailedCustomer } from '../models/customer.models';
import { Address } from 'cluster';
import { DataAdapter } from '../utils/addressesAdapter';
import { DetailedCustomerVM } from '../pagesVM/customers.vm';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private getAllGQL: GetAllCustomersGQL,
    private getByIdGQL: GetCustomerByIdGQL,
    private deleteOneGQL: DeleteCustomerGQL,
    private insertOneGQL: InsertCustomerGQL,
    private updateOneGQL: UpdateCustomerGQL) {

     this.getOneById('ca6c4a90-dac3-46f0-945c-26ace051f52e').subscribe(obj => { let data: DetailedCustomer = obj.data.contact_customer_by_pk; console.log(obj.data.contact_customer_by_pk) });
    this.getAll().subscribe(obj => { let data: Customer[] = obj.data.contact_customer; console.log(obj.data.contact_customer) });
    this.insertOne({addresses:[{address:"address",city:"city"}],phone:"phone",name:"name"}).subscribe(obj =>{let data: Customer=obj.data.insert_contact_customer_one;console.log(obj.data.insert_contact_customer_one)} );
    this.updateOne({ id: "ca6c4a90-dac3-46f0-945c-26ace051f52e", phone: "phoneUpdate", name: "nameupdate" }).subscribe(obj => { let data: Customer = obj.data.update_contact_customer_by_pk; console.log(obj.data.update_contact_customer_by_pk) });

  }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }
  
    getOneById(id: string,) {
      return this.getByIdGQL.fetch({ id })
    }
    
  insertOne(createdOne: DetailedCustomer) {
       
    let addedValue:InsertCustomerMutationVariables=new DataAdapter<DetailedCustomer>(createdOne);
    return this.insertOneGQL.mutate(addedValue)

  }
  updateOne(updatedOne: UpdateCustomerMutationVariables) {
    return this.updateOneGQL.mutate(updatedOne)
  }
  removeOne(id: string) {
    return this.deleteOneGQL.mutate({ id })
  }
}
