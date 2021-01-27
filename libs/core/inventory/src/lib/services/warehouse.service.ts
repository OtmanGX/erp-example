import { Injectable } from '@angular/core';
import {
  GetAllWarehousesGQL,
} from '@tanglass-erp/infrastructure/graphql';
import * as fromWarehouse from "../models/warehouse.model";

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(
    private getAllGQL: GetAllWarehousesGQL,

  ) {
    /** 
    let data: fromWarehouse.Warehouse[]
    this.getAll().subscribe(o=>data=o.data.stock_warehouse)   
*/
   }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }
}
