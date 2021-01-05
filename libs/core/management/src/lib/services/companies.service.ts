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
import {  ApolloQueryResult,FetchResult} from '@apollo/client/core';
import {Observable  } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  constructor(
    private getAllGQL: GetAllCompaniesGQL,
    private getByIdGQL:GetCompanyByIdGQL,
    private insertOneGQL:InsertCompanyGQL,

  ) {}


  getAll():Observable<ApolloQueryResult<GetAllCompaniesQuery>>{
    return this.getAllGQL.watch().valueChanges
  }
  getOneById(
    $id?: GetCompanyByIdQueryVariables,):Observable<ApolloQueryResult<GetCompanyByIdQuery>>{
    return  this.getByIdGQL.fetch($id)

  }
  
  insertOne($createdCompany:InsertCompanyMutationVariables):Observable<FetchResult<InsertCompanyMutation>>{
   return  this.insertOneGQL.mutate($createdCompany)
  }

}