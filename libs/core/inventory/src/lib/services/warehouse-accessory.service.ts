import { Injectable } from '@angular/core';
import {
  GetAllAccessoriesStockGQL,
  GetAccessoryWarehousesByIdGQL
} from '@tanglass-erp/infrastructure/graphql';
import * as fromWAccessory from "../models/accessoryWarehouse.model";
@Injectable({
  providedIn: 'root'
})
export class WarehouseAccessoryService {

  constructor(
    private getAllGQL: GetAllAccessoriesStockGQL,
    private getAccessoryWarehousesByIdGQL: GetAccessoryWarehousesByIdGQL,

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

  getOneById(id: number) {
    return this.getAccessoryWarehousesByIdGQL.fetch({ id })
  }

}
