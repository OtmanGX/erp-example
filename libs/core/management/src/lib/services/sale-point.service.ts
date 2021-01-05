import { Injectable } from '@angular/core';
import {
  GetAllSalesPointsGQL,
  GetSalePointByIdGQL,
  InsertSalePointGQL,
  GetSalePointByIdQueryVariables,
  InsertSalePointMutationVariables,
} from '@tanglass-erp/infrastructure/graphql';


@Injectable({
  providedIn: 'root'
})
export class SalePointService {

  constructor(
    private getAllGQL: GetAllSalesPointsGQL,
    private getByIdGQL:GetSalePointByIdGQL,
    private insertOneGQL:InsertSalePointGQL,
  ) { }

  getAll(){
    return this.getAllGQL.watch().valueChanges
  }
  getOneById(
    $id?: GetSalePointByIdQueryVariables,){
    return  this.getByIdGQL.fetch($id)
  }
  
  insertOne($createdCompany:InsertSalePointMutationVariables){
   return  this.insertOneGQL.mutate($createdCompany)
  }
}
