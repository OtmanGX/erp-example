import { Consumable } from './consumable.model';
import { OptionalServiceParam,OptionalServiceParamValue } from './service_params';
import {  Product } from './shared.model';
import { MetaData } from "@tanglass-erp/core/shared";
// services collection

export interface ServiceConfig {

  id: string;
  name: string;
  params?: OptionalServiceParam[];
  labelFactory: string;

}

export interface DetailedServiceConfig extends MetaData {

  id: string;
  name: string;
  params?: OptionalServiceParam[];
  services?:Service[];
  labelFactory: string;

}

// 
export interface Service {
  id?: string;
  serviceCollection?: ServiceConfig;
  product?: Product;
  optionalParamValues?:OptionalServiceParamValue[];
}

export interface DetailedService extends MetaData{
  id: string;
  serviceCollection: ServiceConfig;
  product: Product;
  paramValues?:OptionalServiceParamValue[];

}
