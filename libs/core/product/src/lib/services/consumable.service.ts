import { Injectable } from '@angular/core';
import {
  GetAllConsumablesGQL,


} from '@tanglass-erp/infrastructure/graphql';
import { Consumable } from "../models/consumable.model";
@Injectable({
  providedIn: 'root'
})
export class ConsumableService {


  constructor(
    private getAllGQL: GetAllConsumablesGQL,

  ) {
  

  }



  getAll() {
    return this.getAllGQL.watch().valueChanges
  }
}
