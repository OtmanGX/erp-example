import { Injectable } from '@angular/core';
import {
  GetAllTransfersOrdersGQL,
  GetTransferByIdGQL
} from '@tanglass-erp/infrastructure/graphql';
import * as fromTransfer from "../models/transrefOrder.model";
import { flattenObj } from "@tanglass-erp/core/common";

@Injectable({
  providedIn: 'root'
})
export class TransferOrderService {

  constructor(    
    private getAllGQL: GetAllTransfersOrdersGQL,
    private getTransferByIdGQL: GetTransferByIdGQL,


    ) {
      
      let data
      let transferOrder:fromTransfer.DetailedTransferOrder
       this.getOneById(1).subscribe(o => console.log(flattenObj(o.data.stock_transfer_order_by_pk)))
      
      }
  
    getAll() {
      return this.getAllGQL.watch().valueChanges
    }
    
    getOneById(id: number){
      return this.getTransferByIdGQL.fetch({id})
    }
}
