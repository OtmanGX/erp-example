import { Injectable } from '@angular/core';
import {
  GetAllUsersGQL,
  GetUserByIdGQL,
  InsertUserGQL,
  InsertUserMutationVariables,
  UpdateUserGQL,
  UpdateUserMutationVariables,
  DeleteUserGQL,
} from '@tanglass-erp/infrastructure/graphql';
import { User ,DetailedUser} from '../models/user.models';
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
    this.getOneById('a1d93bb6-d9f0-462a-a967-986d6898a4f9').subscribe(obj => { let data: DetailedUser = obj.data.management_userProfile_by_pk; console.log(obj.data.management_userProfile_by_pk) });
    this.getAll().subscribe(obj =>{let data: User[]=obj.data.management_userProfile;console.log(obj.data.management_userProfile)} );
    this.insertOne(
      {CIN: "ghbfb",
      email: "fgdnf",
      firstname: "gfdbfg",
      lastname: "gfdbhngfn",
      phone: "654654",
      username: "gfnfg"}
      
      ).subscribe(obj =>{let data: User=obj.data.insert_management_userProfile_one;console.log(obj.data.insert_management_userProfile_one)} );
    this.updateOne({id:"a1d93bb6-d9f0-462a-a967-986d6898a4f9",phone:"phoneyht",firstname:"firseth",lastname:"lasttyj",username:"rnametyh"}).subscribe(obj =>{let data: User=obj.data.update_management_userProfile_by_pk;console.log(obj.data.update_management_userProfile_by_pk)} );

  }

  getAll(){
    return this.getAllGQL.watch().valueChanges
  }
  getOneById(id: string){
    return  this.getByIdGQL.fetch({id})
  }
  
  insertOne(createdOne:InsertUserMutationVariables){
   return  this.insertOneGQL.mutate(createdOne)
  }

  updateOne(updatedOne: UpdateUserMutationVariables) {
    return this.updateOneGQL.mutate(updatedOne)
  }

  removeOne(id: string) {
    return this.deleteOneGQL.mutate({id})
  }
}
