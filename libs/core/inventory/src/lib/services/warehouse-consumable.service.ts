import { Injectable } from '@angular/core';
import {
  GetAllConsumablesStockGQL,
  GetConsumableWarehousesByIdGQL,
} from '@tanglass-erp/infrastructure/graphql';

import * as fromWConso from "../models/consumableWarehouse.model";

@Injectable({
  providedIn: 'root'
})
export class WarehouseConsumableService {

  constructor(
    private getAllGQL: GetAllConsumablesStockGQL,
    private GetConsumableWarehousesById: GetConsumableWarehousesByIdGQL,

  ) { 
    /** 
    let data:fromWConso.ConsumableWarehouse[];
    this.getAll().subscribe(o=>data=o.data.stock_warehouse_substance)
    */
  }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }
  getOneById(id: number) {
    return this.GetConsumableWarehousesById.fetch({ id })
  }
}
