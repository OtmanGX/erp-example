import { Injectable } from '@angular/core';
import {
  GetAllTransfersGQL,
} from '@tanglass-erp/infrastructure/graphql';
@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(    
    private getAllGQL: GetAllTransfersGQL,

    ) {
     }
  
    getAll() {
      return this.getAllGQL.watch().valueChanges
    }
}
