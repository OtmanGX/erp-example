import { Injectable } from '@angular/core';
import {
  GetAllCustomersGQL,


} from '@tanglass-erp/infrastructure/graphql';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private getAllGQL: GetAllCustomersGQL,
    /** 
    private getByIdGQL: GetCustomerByIdGQL,
    private insertOneGQL: InsertCustomerGQL,*/
  ) { }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }
/** 
  getOneById(
    $id?: GetCustomerByIdQueryVariables,) {
    return this.getByIdGQL.fetch($id)
  }

  insertOne($createdOne: InsertCustomerMutationVariables) {
    return this.insertOneGQL.mutate($createdOne)
  }
*/

}
