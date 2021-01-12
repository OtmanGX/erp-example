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
    this.getOneById('b135bd5f-98c6-4be8-a49b-92572e711738').subscribe(obj => { let data: DetailedSalePoint = obj.data.management_SalesPoint_by_pk; console.log(obj.data.management_SalesPoint_by_pk) });
    this.getAll().subscribe(obj =>{let data: SalePoint[]=obj.data.management_SalesPoint;console.log(obj.data.management_SalesPoint)} );
    this.insertOne({address:"testeeewdrs",name:"nsrtg",phone:"phonerdt"}).subscribe(obj =>{let data: SalePoint=obj.data.insert_management_SalesPoint_one;console.log(obj.data.insert_management_SalesPoint_one)} );
    this.updateOne({id:"b135bd5f-98c6-4be8-a49b-92572e711738",address:"testuee",name:"teghnste",phone:"phone"}).subscribe(obj =>{let data: SalePoint=obj.data.update_management_SalesPoint_by_pk;console.log(obj.data.update_management_SalesPoint_by_pk)} );

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
