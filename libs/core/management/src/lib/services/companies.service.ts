
import { Injectable } from '@angular/core';
import { useQuery,QueryResult } from '@apollo/client';
import { Companie } from "../models/companies.models";
import {
  GetAllCompaniesGQL,
  GetAllCompaniesQuery,
  GetAllCompaniesQueryVariables,
  GetCompanyByIdGQL,
  GetCompanyByIdQuery,
  GetCompanyByIdQueryVariables,
  InsertCompanyGQL,
  InsertCompanyMutationVariables,InsertCompanyMutation,
  Management_Company_Insert_Input,
  GetAllCompaniesDocument
} from '@tanglass-erp/infrastructure/graphql';
import { ApolloQueryResult ,ApolloClientOptions,WatchQueryOptions} from '@apollo/client/core';
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


  getCompanies():Observable< QueryResult<Companie[], GetAllCompaniesQueryVariables>> {
    return  of(useQuery<Companie[],GetAllCompaniesQueryVariables>(GetAllCompaniesDocument))
  }

  getCompanyById(
    $id?: GetCompanyByIdQueryVariables,):Observable<ApolloQueryResult<GetCompanyByIdQuery>>{
    return  this.getByIdGQL.fetch($id)
  }

}