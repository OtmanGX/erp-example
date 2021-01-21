import { InsertedProduct, Substance } from './shared.model';
import { Service } from "./service.model";
import {  Product } from './shared.model';
import { MetaData } from 'libs/core/shared/metaData';
import {
  Product_Product_Insert_Input,
  Product_Product_Unit_Enum,
  Product_ConsumableCategory_Enum
} from '@tanglass-erp/infrastructure/graphql';

export interface Consumable {
  id: string;
  category:string;  // row material or consumable (enum consoCategory)
  Substance?: Substance;
  product: Product
}


export interface DetailedConsumable extends MetaData{

  id: string;
  category:string;  // row material or consumable (enum consoCategory)
  Substance?: Substance;
  product: Product

}

export interface InsertedConsumable extends MetaData{
  category:Product_ConsumableCategory_Enum;  // row material or consumable (enum consoCategory)
  Substance?: Substance;
  product: InsertedProduct
}


export interface ServiceConsumable {

  id?: string;
  quota: number;
  consumable: Consumable;
  service: Service;

}
