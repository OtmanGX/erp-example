import { Glasse } from './glasse.model';
import { Consumable } from './consommable.model';
import { optionalServiceParam } from './service_params';

export interface Service {

  id?: string;
  name:string;
  defaultPriceUnit:string;
  params: optionalServiceParam[] ;

}


export interface ServiceGlasse {
 
  id? : string;
  glasse : Glasse;
  service: Service;
  labelFactory: string ;
}


export interface ServiceConsumable {
 
  id? : string;
  quota: number ;
  consumable : Consumable;
  service: Service;
}
