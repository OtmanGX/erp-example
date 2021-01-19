import { Injectable } from '@angular/core';
import {
  GetAllAccessoriesGQL,


} from '@tanglass-erp/infrastructure/graphql';
import { Accessory } from "../models/accessory.model";
@Injectable({
  providedIn: 'root'
})
export class AccessoryService {

  constructor(
    private getAllGQL: GetAllAccessoriesGQL,

  ) {
    
  }


  
  getAll() {
    return this.getAllGQL.watch().valueChanges
  }
}
