import { Injectable } from '@angular/core';
import {
  GetAllSalesPointsGQL,
  GetSalePointByIdGQL,
  InsertSalePointGQL,
  GetSalePointByIdQueryVariables,
  InsertSalePointMutationVariables,
  UpdateSalePointGQL,
  UpdateSalePointMutationVariables,
  DeleteSalePointGQL,
  DeleteSalePointMutationVariables,
} from '@tanglass-erp/infrastructure/graphql';


@Injectable({
  providedIn: 'root'
})
export class SalePointService {

  constructor(
    private getAllGQL: GetAllSalesPointsGQL,
    private getByIdGQL:GetSalePointByIdGQL,
    private insertOneGQL:InsertSalePointGQL,
    private updateOneGQL: UpdateSalePointGQL,
    private deleteOneGQL: DeleteSalePointGQL,
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

  updateOne($id?: UpdateSalePointMutationVariables) {
    return this.updateOneGQL.mutate($id)
  }

  removeOne($id?: DeleteSalePointMutationVariables) {
    return this.deleteOneGQL.mutate($id)
  }
}
