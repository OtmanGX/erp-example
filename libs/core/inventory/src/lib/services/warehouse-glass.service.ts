import { Injectable } from '@angular/core';
import { GetAllGlassesStockGQL, GetGlassWarehousesByIdGQL } from '@tanglass-erp/infrastructure/graphql';
import { AdaptSubstanceStockDetails } from '../utils/detailOrders.Adapter';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WarehouseGlassService {

  constructor(
  private getAllGQL: GetAllGlassesStockGQL,
  private getGlassWarehousesByIdGQL: GetGlassWarehousesByIdGQL,


  ) {
    /**
    let data: fromWGlass.GlassWarehouse[]
    this.getAll().subscribe(o=>data=o.data.stock_warehouse_substance)
*/
   }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(id: string){
    return this.getGlassWarehousesByIdGQL.fetch({ id }).pipe(map((data) =>
    AdaptSubstanceStockDetails(data.data)))
  }
}
