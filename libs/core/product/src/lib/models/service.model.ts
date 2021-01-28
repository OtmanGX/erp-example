import { Consumable } from './consumable.model';
import { OptionalServiceParam,OptionalServiceParamValue } from './service_params';
import {  Product,InsertedProduct } from './shared.model';
import { MetaData } from '@tanglass-erp/core/common';
import { ServicesConfigService } from '../services/servicesConfig.service';
// services collection

export interface ServiceConfig {

  id: string;
  name: string;
  params?: string;
  labelFactory: string;

}
let ser:ServiceConfig
export interface DetailedServiceConfig extends MetaData {

  id: string;
  name: string;
  params?:string;
  services?:Service[];
  labelFactory: string;

}

export interface InsertedServiceConfig extends MetaData {

  name: string;
  params?: string;
  services?:Service[];
  labelFactory: string;

}

// 
export interface Service {
  id?: string;
  serviceConfig?: ServiceConfig;
  product?: Product;
  paramValues?:string;
}

export interface DetailedService extends MetaData{
  id: string;
  serviceConfig: ServiceConfig;
  product: Product;
  paramValues?:string;

}



export interface InsertedService extends MetaData{
  serviceConfigid: string;
  product: InsertedProduct;
  paramValues?:string;

}

