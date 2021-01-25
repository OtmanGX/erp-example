import { Injectable } from '@angular/core';
import {
  GetAllTransfersGQL,
} from '@tanglass-erp/infrastructure/graphql';
import * as fromTransfer from "../models/transrefOrder.model";

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(    
    private getAllGQL: GetAllTransfersGQL,

    ) {
      let data: fromTransfer.TransferOrder[]
      this.getAll().subscribe(o => data = o.data.stock_transfer_order)
    
     }
  
    getAll() {
      return this.getAllGQL.watch().valueChanges
    }
}
