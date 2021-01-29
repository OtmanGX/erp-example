import { Injectable } from '@angular/core';
import {
  GetAllTransfersOrdersGQL,
  GetTransferByIdGQL,
  InsertTransferOrderGQL,
  InsertTransferOrderMutationVariables
} from '@tanglass-erp/infrastructure/graphql';
import * as fromTransfer from "../models/transrefOrder.model";
import { flattenObj } from "@tanglass-erp/core/common";
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransferOrderService {

  constructor(    
    private getAllGQL: GetAllTransfersOrdersGQL,
    private getTransferByIdGQL: GetTransferByIdGQL,
    private insertOneGQL:InsertTransferOrderGQL

    ) {
      let transferOrder:fromTransfer.DetailedTransferOrder
       this.getOneById(1).pipe(
        map(data =>{
          flattenObj(data.data.stock_transfer_order_by_pk)
        }
      
        )).subscribe(o=>console.log(o))
      }
  
    getAll() {
      return this.getAllGQL.watch().valueChanges
    }
    
    getOneById(id: number){
      return this.getTransferByIdGQL.fetch({id})
    }

    insertOne(createdOne: fromTransfer.InsertedTransferOrder) {
      return this.insertOneGQL.mutate(createdOne)
    }
}
