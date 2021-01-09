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
  ) { 
  }

  getAll(){
    return this.getAllGQL.watch().valueChanges
  }
  getOneById(id: string){
    return  this.getByIdGQL.fetch({id})
  }
  
  insertOne(createdUser:InsertUserMutationVariables){
   return  this.insertOneGQL.mutate(createdUser)
  }

  updateOne(id: string) {
    return this.updateOneGQL.mutate({id})
  }

  removeOne(id: string) {
    return this.deleteOneGQL.mutate({id})
  }
}
