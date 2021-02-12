import { Injectable } from '@angular/core';
import {
  GetAllTransfersOrdersGQL,
  GetTransferByIdGQL,
  InsertTransferOrderGQL,
  GetAllOrdersDetailsGQL,
} from '@tanglass-erp/infrastructure/graphql';
import { map } from 'rxjs/operators';
import * as fromTransfer from "../models/transrefOrder.model";
import { AdaptOrderedItems } from "../utils/detailOrders.Adapter";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class TransferOrderService {

  constructor(
    private getAllGQL: GetAllTransfersOrdersGQL,
    private getTransferByIdGQL: GetTransferByIdGQL,
    private insertTransferOrderGQL: InsertTransferOrderGQL,
    private getAllOrdersDetailsGQL: GetAllOrdersDetailsGQL,

  ) { }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }


  getAllItemsOrders(): Observable<fromTransfer.OrderDetails[]> {
    return this.getAllOrdersDetailsGQL.watch().valueChanges.pipe(map((data) =>
      data.data.stock_order_item.map((obj) => AdaptOrderedItems(obj))
    )
    )
  }

  getOneById(id: number) {
    return this.getTransferByIdGQL.fetch({ id })
  }

  insertOne(createdOne: fromTransfer.InsertedTransferOrder) {
    return this.insertTransferOrderGQL.mutate(createdOne)
  }

}
