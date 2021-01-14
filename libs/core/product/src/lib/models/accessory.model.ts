import { MetaData } from 'libs/core/shared/metaData';
import { Substance, Product } from './shared.model';

export interface Accessory {

  id?: string;
  name: string;
  type: string;
  quota: number;
  substance: Substance;
  product: Product;
}


export interface DetailedAccessory  extends MetaData{
  id:string
  name: string;
  type: string;
  quota: number;
  substance: Substance;
  product: Product;
}


export interface insertedAccessory{
  name: string;
  type: string;
  quota: number;
  substance: Substance;
  product: Product;
}