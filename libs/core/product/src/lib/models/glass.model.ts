import { MetaData } from '@tanglass-erp/core/common';
import { Substance, Product,InsertedProduct } from './shared.model';

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

  type?: string;
  color?: string;
  thickness: number;
  product: InsertedProduct;
  substance?: Substance;
}