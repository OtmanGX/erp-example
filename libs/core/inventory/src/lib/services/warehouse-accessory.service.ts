import { Injectable } from '@angular/core';
import { GetAccessoryWarehousesByIdGQL, GetAllAccessoriesStockGQL } from '@tanglass-erp/infrastructure/graphql';
import { map } from 'rxjs/operators';
import { AdaptSubstanceStockDetails } from '../utils/detailOrders.Adapter';

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
   //this.getOneById("b7f805a2-72bc-4030-b82a-033132856a31").subscribe(o=>console.log(o))
  }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(id: string) {
    return this.getAccessoryWarehousesByIdGQL.fetch({ id }).pipe(map((data) =>
    AdaptSubstanceStockDetails(data.data)))
  }

}
