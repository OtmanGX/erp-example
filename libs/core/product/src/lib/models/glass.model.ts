import { MetaData } from '@tanglass-erp/core/shared';
import { Substance, Product } from './shared.model';

import { Service } from "./service.model";


export interface Glass {

  id?: string;
  type?: string;
  color?: string;
  thickness: number;
  product: Product;
  substance?: Substance;
}


export interface DetailedGlass extends MetaData{

  id: string;
  type?: string;
  color?: string;
  thickness: number;
  product: Product;
  substance?: Substance;
}


export interface InsertedGlass {

  id?: string;
  type?: string;
  color?: string;
  thickness: number;
  product: Product;
  substance?: Substance;
}