import { Injectable } from '@angular/core';
import {
  GetAllProvidersGQL,
  GetProviderByIdGQL,
  DeleteProviderGQL

} from '@tanglass-erp/infrastructure/graphql';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(
    private getAllGQL: GetAllProvidersGQL,
    private getByIdGQL: GetProviderByIdGQL,
    private deleteOneGQL: DeleteProviderGQL,



  ) { }


  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(
    id: string) {
    return this.getByIdGQL.fetch({ id })
  }
  removeOne(id: string) {
    return this.deleteOneGQL.mutate({ id })
  }

}
