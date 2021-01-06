import { Injectable } from '@angular/core';
import {
  GetAllUsersGQL,
  GetUserByIdGQL,
  InsertUserGQL,
  GetUserByIdQueryVariables,
  InsertUserMutationVariables,
} from '@tanglass-erp/infrastructure/graphql';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private getAllGQL: GetAllUsersGQL,
    private getByIdGQL:GetUserByIdGQL,
    private insertOneGQL:InsertUserGQL,
  ) { }

  getAll(){
    return this.getAllGQL.watch().valueChanges
  }
  getOneById(
    $id?: GetUserByIdQueryVariables,){
    return  this.getByIdGQL.fetch($id)
  }
  
  insertOne($createdCompany:InsertUserMutationVariables){
   return  this.insertOneGQL.mutate($createdCompany)
  }
}
