import { Injectable } from '@angular/core';
import {
  GetAllTransfersOrdersGQL,
  GetTransferOrderByIdGQL,
  InsertTransferOrderGQL,
  GetAllOrdersDetailsGQL,
  InsertItemTranfserGQL,
  InsertItemTranfserMutationVariables
} from '@tanglass-erp/infrastructure/graphql';
import { map } from 'rxjs/operators';
import * as fromTransfer from "../models/transrefOrder.model";
import { AdaptOrderedItems,AdaptTransferOrderDetails } from "../utils/detailOrders.Adapter";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class TransferOrderService {

  constructor(
    private getAllGQL: GetAllTransfersOrdersGQL,
    private getTransferOrderByIdGQL: GetTransferOrderByIdGQL,
    private insertTransferOrderGQL: InsertTransferOrderGQL,
    private getAllOrdersDetailsGQL: GetAllOrdersDetailsGQL,
    private insertItemTranfserGQL: InsertItemTranfserGQL,

  ) {
   
   }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }


  getAllItemsOrders(): Observable<fromTransfer.OrderDetails[]> {
    return this.getAllOrdersDetailsGQL.watch().valueChanges.pipe(map((data) =>
      data.data.stock_order_item.map((obj) => AdaptOrderedItems(obj))
    )
    )
  }


  addTransfered(value:InsertItemTranfserMutationVariables){
    return this.insertItemTranfserGQL.mutate(value)

  }
  getOneById(id: number) {
    return this.getTransferOrderByIdGQL.fetch({ id }).pipe(map((data)=>AdaptTransferOrderDetails(data.data)))
  }

  insertOne(createdOne: fromTransfer.InsertedTransferOrder) {
    return this.insertTransferOrderGQL.mutate(createdOne)
  }

}
