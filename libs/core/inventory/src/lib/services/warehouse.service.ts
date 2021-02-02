import { Injectable } from '@angular/core';
import {
  GetAllWarehousesGQL,
  GetWarehouseByIdGQL,
  DeleteManyWarehousesGQL,
  InsertWarehouseGQL,
} from '@tanglass-erp/infrastructure/graphql';
import * as fromWarehouse from "../models/warehouse.model";

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(
    private getAllGQL: GetAllWarehousesGQL,
    private getByIdGQL: GetWarehouseByIdGQL,
    private deleteMany:DeleteManyWarehousesGQL,
    private insertWarehouseGQL: InsertWarehouseGQL,

  ) {}

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(id: string){
    return this.getByIdGQL.fetch({id})
  }


  removeMany(ids: string[]) {
    return this.deleteMany.mutate({ids})
  }
    


  insertOne(createdOne:fromWarehouse.InsertedWarehouse) { 
  return this.insertWarehouseGQL.mutate(createdOne)
   }




}
