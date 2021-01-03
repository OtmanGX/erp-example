import { Injectable } from '@angular/core';
import {
  GetAllCompaniesGQL,
  GetAllCompaniesQuery,
  GetAllCompaniesQueryVariables,

} from '@tanglass-erp/infrastructure/graphql';
import { ApolloQueryResult ,ApolloClientOptions,WatchQueryOptions,} from '@apollo/client/core';
import {Observable  } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(
    private getAllCompaniesGQL: GetAllCompaniesGQL,

  ) {}


  getCompanies():Observable<ApolloQueryResult<GetAllCompaniesQuery>>{
    return this.getAllCompaniesGQL.watch().valueChanges
  }


}
