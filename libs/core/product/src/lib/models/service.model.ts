import { Glass } from './glass.model';
import { Consumable } from './consumable.model';
import { optionalServiceParam } from './service_params';
import {  Product } from './shared.model';

// services collection

export interface Service {

  id?: string;
  name: string;
  params: optionalServiceParam[];

}


// 
export interface ServiceGlass {
  id?: string;
  glass: Glass;
  service: Service;
  labelFactory: string;
  product: Product
}
