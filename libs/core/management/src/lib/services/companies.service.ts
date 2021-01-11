import { Injectable } from '@angular/core';
import {
  GetAllCompaniesGQL,
  GetAllCompaniesQuery,
  GetCompanyByIdGQL,
  GetCompanyByIdQuery,
  GetCompanyByIdQueryVariables,
  InsertCompanyGQL,
  InsertCompanyMutationVariables, InsertCompanyMutation,
  UpdateCompanyGQL,
  UpdateCompanyMutationVariables,
  DeleteCompanyGQL,
  DeleteCompanyMutationVariables,

} from '@tanglass-erp/infrastructure/graphql';
import { ApolloQueryResult, FetchResult } from '@apollo/client/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  constructor(
    private getAllGQL: GetAllCompaniesGQL,
    private getByIdGQL: GetCompanyByIdGQL,
    private insertOneGQL: InsertCompanyGQL,
    private updateOneGQL: UpdateCompanyGQL,
    private deleteOneGQL: DeleteCompanyGQL,

  ) {

   }


  getAll() {
    return this.getAllGQL.watch().valueChanges
  }
  getOneById(id: string) {
    console.log(id);
    return this.getByIdGQL.fetch({ id })
  }

  insertOne(createdCompany: InsertCompanyMutationVariables) {
    return this.insertOneGQL.mutate(createdCompany)

  }
  updateOne(id: string) {
    return this.updateOneGQL.mutate({id})
  }

  removeOne(id: string) {
    return this.deleteOneGQL.mutate({id})
  }

}
