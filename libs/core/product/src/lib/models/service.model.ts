import { Glass } from './glass.model';
import { optionalServiceParam } from './service_params';
import {  Product } from './shared.model';
import { MetaData } from "@tanglass-erp/core/shared";
// services collection

export interface Service {

  id?: string;
  name: string;
  params: optionalServiceParam[];

}

export interface DetailedService extends MetaData {

  id?: string;
  name: string;
  params: optionalServiceParam[];
  services:ServiceGlass[];

}

//
export interface ServiceGlass {
  id?: string;
  glass: Glass;
  service: Service;
  labelFactory: string;
  product: Product
}

export interface DetailedServiceGlass extends MetaData{
  id?: string;
  glass: Glass;
  service: Service;
  labelFactory: string;
  product: Product
}
