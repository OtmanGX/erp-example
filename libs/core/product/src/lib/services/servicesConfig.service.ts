import { Injectable } from '@angular/core';
import { ServiceConfig } from '../models/service.model';
import {
  GetAllServiceConfigGQL,


} from '@tanglass-erp/infrastructure/graphql';
@Injectable({
  providedIn: 'root'
})
export class ServicesConfigService {

  constructor(
    private getAllGQL: GetAllServiceConfigGQL,

  ) {
    let data: ServiceConfig[]
    this.getAll().subscribe(o => data = o.data.product_serviceConfig)

  }



  getAll() {
    return this.getAllGQL.watch().valueChanges
  }
}
