import { Injectable } from '@angular/core';
import {
  GetAllCustomersGQL,
  GetCustomerByIdGQL,
  DeleteCustomerGQL,
  UpdateCustomerGQL,
  InsertCustomerGQL,
  InsertCustomerMutationVariables,
  UpdateCustomerMutationVariables,
  DeleteManyCustomersGQL

} from '@tanglass-erp/infrastructure/graphql';
import { DetailedCustomer, InsertedCustomer } from '../models/customer.models';
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
    private deleteMany:DeleteManyCustomersGQL
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
    let updatedValue: UpdateCustomerMutationVariables;
    updatedValue ={...updatedOne,...adaptAddress(updatedOne.addresses)}
    return this.updateOneGQL.mutate(updatedValue)
  }
  removeOne(id: string) {
    return this.deleteOneGQL.mutate({ id })
  }


  removeMany(ids: string[]) {
    return this.deleteMany.mutate({ids})
  }
}
