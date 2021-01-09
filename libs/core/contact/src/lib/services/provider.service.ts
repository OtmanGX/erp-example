import { Injectable } from '@angular/core';
import {
  GetAllProvidersGQL,


} from '@tanglass-erp/infrastructure/graphql';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(
    private getAllGQL: GetAllProvidersGQL,

  ) { }

  
  getAll() {
    return this.getAllGQL.watch().valueChanges
  }
/** 
  getOneById(
    $id?: GetProviderByIdQueryVariables,) {
    return this.getByIdGQL.fetch($id)
  }
*/

}
