import { Injectable } from '@angular/core';
import {
  GetAllCompaniesGQL,
  GetAllCompaniesQuery,
  GetCompanyByIdGQL,
  GetCompanyByIdQuery,
  GetCompanyByIdQueryVariables,
  InsertCompanyGQL,
  InsertCompanyMutationVariables,InsertCompanyMutation,

} from '@tanglass-erp/infrastructure/graphql';
import {  ApolloQueryResult,ApolloClientOptions,WatchQueryOptions,FetchResult} from '@apollo/client/core';
import {Observable,of  } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  constructor(
    private getAllGQL: GetAllCompaniesGQL,
    private getByIdGQL:GetCompanyByIdGQL,
    private insertOneGQL:InsertCompanyGQL,

  ) {}


  getCompanies():Observable<ApolloQueryResult<GetAllCompaniesQuery>>{
    return this.getAllGQL.watch().valueChanges
  }
  getCompanyById(
    $id?: GetCompanyByIdQueryVariables,):Observable<ApolloQueryResult<GetCompanyByIdQuery>>{
    return  this.getByIdGQL.fetch($id)
  }
  
  insertOneCompany($createdCompany:InsertCompanyMutationVariables):Observable<FetchResult<InsertCompanyMutation>>{
   return  this.insertOneGQL.mutate($createdCompany)
  }

}