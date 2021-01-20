import { MetaData } from 'libs/core/shared/metaData';
import { Substance, Product } from './shared.model';

//for displaying the accessory grid
export interface Accessory {

  id?: string;
  category: string;// enum for affecting types (accessory/apparent)
  quota?: number;
  substance?: Substance;
  product: Product;
}


//for displaying accessory fiche and editing

export interface DetailedAccessory  extends MetaData{
  id:string
  category: string;
  quota?: number;
  substance?: Substance;
  product: Product;
}
//for inserting an accessory

export interface insertedAccessory{
  category: string;
  quota?: number;
  substance?: Substance;
  product: Product;
}