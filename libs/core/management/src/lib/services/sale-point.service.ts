import { Injectable } from '@angular/core';
import {
  GetAllSalesPointsGQL,
  GetSalePointByIdGQL,
  InsertSalePointGQL,
  InsertSalePointMutationVariables,
  UpdateSalePointGQL,
  UpdateSalePointMutationVariables,
  DeleteSalePointGQL,
} from '@tanglass-erp/infrastructure/graphql';
import { DetailedSalePoint, SalePoint } from '../models/sale-point.models';


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
  ) {
   }

  getAll(){
    return this.getAllGQL.watch().valueChanges
  }
  getOneById(id: string,){
    return  this.getByIdGQL.fetch({id})
  }

  insertOne(createdOne:InsertSalePointMutationVariables){
   return  this.insertOneGQL.mutate(createdOne)
  }

  updateOne(updatedOne: UpdateSalePointMutationVariables) {
    return this.updateOneGQL.mutate(updatedOne)
  }

  removeOne(id: string) {
    return this.deleteOneGQL.mutate({id})
  }
}
