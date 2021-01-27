import { Injectable } from '@angular/core';
import {
  GetAllGlassesStockGQL,
} from '@tanglass-erp/infrastructure/graphql';
import * as fromWGlass from "../models/glassWarehouse.model";

@Injectable({
  providedIn: 'root'
})
export class WarehouseGlassService {

  constructor(
  private getAllGQL: GetAllGlassesStockGQL,

  ) {
    /** 
    let data: fromWGlass.GlassWarehouse[]
    this.getAll().subscribe(o=>data=o.data.stock_warehouse_substance)   
*/
   }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }
}
