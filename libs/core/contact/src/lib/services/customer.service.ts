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

} from '@tanglass-erp/infrastructure/graphql';
import {  DetailedCustomer, InsertedCustomer } from '../models/customer.models';
import {  dataAdapter } from '../utils/dataAdapter';
import { InsertAddressContact ,InsertContact,AffectContact} from "../models/shared.models";
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
    private affectCustomerContact:AffectCustomerContactGQL

    ) {
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

  addAddress(value:InsertAddressContact){
    return this.addCustomerAddressGQL.mutate(value)
  }
  addContact(value:InsertContact){
    this.addCustomerContact.mutate(value)
  }

  affectContact(value:AffectContact){
    this.affectCustomerContact.mutate(value)

  }

}
