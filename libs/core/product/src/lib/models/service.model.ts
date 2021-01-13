import { Glass, Product } from './glass.model';
import { Consumable } from './consummable.model';
import { optionalServiceParam } from './service_params';

export interface Service {

  id?: string;
  name:string;
  params: optionalServiceParam[] ;

}



export interface ServiceGlass{
  id? : string;
  glasse : Glass;
  service: Service;
  labelFactory: string ;
  product:Product
}

export interface ServiceConsumable {
 
  id? : string;
  quota: number ;
  consumable : Consumable;
  service: Service;
  
}
