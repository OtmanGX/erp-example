import { Injectable } from '@angular/core';
import {
  GetAllTransfersOrdersGQL,
  GetTransferByIdGQL,
  InsertTransferOrderGQL,
} from '@tanglass-erp/infrastructure/graphql';
import * as fromTransfer from "../models/transrefOrder.model";

@Injectable({
  providedIn: 'root'
})
export class TransferOrderService {

  constructor(    
    private getAllGQL: GetAllTransfersOrdersGQL,
    private getTransferByIdGQL: GetTransferByIdGQL,
    private insertTransferOrderGQL: InsertTransferOrderGQL,


    ) {}
  
    getAll() {
      return this.getAllGQL.watch().valueChanges
    }
    
    getOneById(id: number){
      return this.getTransferByIdGQL.fetch({id})
    }

    insertOne(createdOne: fromTransfer.InsertedTransferOrder) { 
       return this.insertTransferOrderGQL.mutate(createdOne)
     }

}
