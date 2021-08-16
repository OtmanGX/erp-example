import { MetaData } from '@tanglass-erp/core/common';
import { Substance, Product,InsertedProduct } from './shared.model';

import { Service } from "./service.model";
import { ShortConsumable } from './consumable.model';


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
  glass:ShortGlass
  product: InsertedProduct;
  substance?: Substance;
}

 interface ShortGlass{
  type?: string;
  color?: string;
  thickness: number;
}
