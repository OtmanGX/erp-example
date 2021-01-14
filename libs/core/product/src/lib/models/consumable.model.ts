import { Substance } from './shared.model';
import { Service } from "./service.model";
import {  Product } from './shared.model';
import { MetaData } from 'libs/core/shared/metaData';


export interface Consumable {

  id?: number;
  code: string;
  type:string;  // row material or consumable (enum consoCategory)
  label: string;
  Substance: Substance;
  product?: Product

}


export interface DetailedConsumable extends MetaData{

  id?: number;
  code: string;
  type:string;  // row material or consumable (enum consoCategory)
  label: string;
  Substance: Substance;
  product?: Product

}

export interface InsertedConsumable extends MetaData{
  code: string;
  type:string;  // row material or consumable (enum consoCategory)
  label: string;
  Substance: Substance;
  product?: Product
}


export interface ServiceConsumable {

  id?: string;
  quota: number;
  consumable: Consumable;
  service: Service;

}
