import { Injectable } from '@angular/core';
import {
  GetAllCustomersGQL,
  InsertCustomerGQL,
  InsertCustomerMutationVariables,
  
  
} from '@tanglass-erp/infrastructure/graphql';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private getAllGQL: GetAllCustomersGQL,
    private insertOneGQL:InsertCustomerGQL,
  ) { }

  getAll(){
    return this.getAllGQL.watch().valueChanges
  }

  insertOne($createdOne:InsertCustomerMutationVariables){
    return  this.insertOneGQL.mutate($createdOne)
   }
}
