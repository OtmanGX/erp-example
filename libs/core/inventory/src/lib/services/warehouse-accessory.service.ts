import { Injectable } from '@angular/core';
import {
  GetAllAccessoriesStockGQL,

} from '@tanglass-erp/infrastructure/graphql';
import * as fromWAccessory from "../models/accessoryWarehouse.model";
@Injectable({
  providedIn: 'root'
})
export class WarehouseAccessoryService {

  constructor(
    private getAllGQL: GetAllAccessoriesStockGQL,
  ) {
    /** 
    let data:fromWAccessory.AccessoryWarehouse[]
    this.getAll().subscribe(o => data =o.data.stock_warehouse_substance) 
    console.log(data)
    */

  }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }
}
