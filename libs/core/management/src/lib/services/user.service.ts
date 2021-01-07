import { Injectable } from '@angular/core';
import {
  GetAllUsersGQL,
  GetUserByIdGQL,
  InsertUserGQL,
  GetUserByIdQueryVariables,
  InsertUserMutationVariables,
  UpdateUserGQL,
  UpdateUserMutationVariables,
  DeleteUserGQL,
  DeleteUserMutationVariables,
} from '@tanglass-erp/infrastructure/graphql';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private getAllGQL: GetAllUsersGQL,
    private getByIdGQL:GetUserByIdGQL,
    private insertOneGQL:InsertUserGQL,
    private updateOneGQL: UpdateUserGQL,
    private deleteOneGQL: DeleteUserGQL,
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

  updateOne($id?: UpdateUserMutationVariables) {
    return this.updateOneGQL.mutate($id)
  }

  removeOne($id?: DeleteUserMutationVariables) {
    return this.deleteOneGQL.mutate($id)
  }
}
