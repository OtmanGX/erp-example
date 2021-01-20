import { Injectable } from '@angular/core';
import {
  GetAllServiceConfigGQL,
  InsertServiceConfigGQL,
  GetServiceConfigByIdGQL,
InsertServiceConfigMutationVariables


} from '@tanglass-erp/infrastructure/graphql';
import { ServiceConfig,DetailedServiceConfig } from "../models/service.model";
@Injectable({
  providedIn: 'root'
})
export class ServicesConfigService {

  constructor(
    private getAllGQL: GetAllServiceConfigGQL,
    private getByIdGQL: GetServiceConfigByIdGQL,
    private insertOneGQL: InsertServiceConfigGQL,
  ) {
    this.getOneById('ee196a6a-9291-4932-b067-64d976cc5a20').subscribe(obj => { let data: DetailedServiceConfig = obj.data.product_serviceConfig_by_pk; console.log(obj.data.product_serviceConfig_by_pk) });
    this.getAll().subscribe(obj =>{let data: ServiceConfig[]=obj.data.product_serviceConfig;console.log(obj.data.product_serviceConfig)} );
   
  }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  
  getOneById(id: string) {
    return this.getByIdGQL.subscribe({ id })
  }

  insertOne(createdOne: InsertServiceConfigMutationVariables) {
    return this.insertOneGQL.mutate(createdOne)
  }
}
