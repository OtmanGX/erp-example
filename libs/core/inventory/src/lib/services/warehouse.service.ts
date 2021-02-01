import { Injectable } from '@angular/core';
import {
  GetAllWarehousesGQL,
  GetWarehouseByIdGQL,
  DeleteManyWarehousesGQL,
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

  ) {
    /** 
    let data: fromWarehouse.Warehouse[]
    this.getAll().subscribe(o=>data=o.data.stock_warehouse)   
*/

   }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(id: string){
    return this.getByIdGQL.fetch({id})
  }


  removeMany(ids: string[]) {
    return this.deleteMany.mutate({ids})
  }
}
