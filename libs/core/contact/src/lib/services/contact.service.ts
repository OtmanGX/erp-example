import { Injectable } from '@angular/core';
import {
  GetAllContactsGQL,

  
  
} from '@tanglass-erp/infrastructure/graphql';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private getAllGQL: GetAllContactsGQL,
  ) { }

  getAll(){
    return this.getAllGQL.watch().valueChanges
  }
  

}
