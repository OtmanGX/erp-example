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
    this.getOneById('b135bd5f-98c6-4be8-a49b-92572e711738').subscribe(o=>console.log(o.data.management_SalesPoint_by_pk))

   }

  getAll(){
    return this.getAllGQL.watch().valueChanges
  }
  getOneById(id: string,){
    return  this.getByIdGQL.fetch({id})
  }
  
  insertOne(createdSalePoint:InsertSalePointMutationVariables){
   return  this.insertOneGQL.mutate(createdSalePoint)
  }

  updateOne(updatedOne: UpdateSalePointMutationVariables) {
    return this.updateOneGQL.mutate(updatedOne)
  }

  removeOne(id: string) {
    return this.deleteOneGQL.mutate({id})
  }
}
