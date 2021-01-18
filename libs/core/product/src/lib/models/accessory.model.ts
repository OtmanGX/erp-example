import { MetaData } from 'libs/core/shared/metaData';
import { Substance, Product } from './shared.model';

export interface Accessory {

  id?: string;
  category: string;// enum for affecting types (accessory/apparent)
  quota?: number;
  substance?: Substance;
  product: Product;
}


export interface DetailedAccessory  extends MetaData{
  id:string
  type: string;
  quota?: number;
  substance?: Substance;
  product: Product;
}


export interface insertedAccessory{
  type: string;
  quota?: number;
  substance?: Substance;
  product: Product;
}