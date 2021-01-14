import { MetaData } from '@tanglass-erp/core/shared';
import { ServiceGlass } from './service.model';
import { Substance, Product } from './shared.model';

import { Service } from "./service.model";


export interface Glass {

  id?: number;
  type: string;
  color: string;
  thickness: string;
  product: Product;
  substance: Substance;
}


export interface DetailedGlass extends MetaData{

  id?: number;
  type: string;
  color: string;
  thickness: string;
  product: Product;
  substance: Substance;
  services:Service[];
}


export interface InsertedGlass {

  id?: number;
  type: string;
  color: string;
  thickness: string;
  product: Product;
  substance: Substance;
  services:Service[];
}