import { Service } from "../../produit/service.model";
import { MatièrePremière } from "../../produit/glasse.model";
import { Accessory } from "../../produit/accessoire.model";
import { Consumable } from '../../produit/consommable.model';
import { SystemApparent } from "../../produit/systemApparent.model";

export abstract class Item_purchases {
  id?:number;
  count:number=0;
  attachement_id: string;
  item:MatièrePremière|Accessory|Service|Consumable|SystemApparent;
  total_purchase:number=0;
  companie:string='';
  quantity:number=1;
  isReady:boolean=false;
  isDelivered:boolean=false;
  isOut:boolean=false;

}




