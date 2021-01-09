import { Injectable } from '@angular/core';
import {
  GetAllContactsGQL,
  GetContactByIdGQL,
  GetContactByIdQueryVariables,
  DeleteContactGQL
} from '@tanglass-erp/infrastructure/graphql';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private getAllGQL: GetAllContactsGQL,
    private getByIdGQL: GetContactByIdGQL,
    private deleteOneGQL: DeleteContactGQL,


  ) { }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(id: string,) {
    return this.getByIdGQL.fetch({ id })
  }

  removeOne(id: string) {
    return this.deleteOneGQL.mutate({ id })
  }



}
