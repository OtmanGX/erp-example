import { Substance } from './shared.model';
import { Service } from "./service.model";
import {  Product } from './shared.model';
import { MetaData } from 'libs/core/shared/metaData';


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
  category:string;  // row material or consumable (enum consoCategory)
  Substance?: Substance;
  product: Product
}


export interface ServiceConsumable {

  id?: string;
  quota: number;
  consumable: Consumable;
  service: Service;

}
