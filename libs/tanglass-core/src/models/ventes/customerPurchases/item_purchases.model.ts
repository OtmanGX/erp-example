import { Service } from "../../../../../core/product/src/lib/models/service.model";
import { MatièrePremière } from "../../../../../core/product/src/lib/models/glasse.model";
import { Accessory } from "../../../../../core/product/src/lib/models/accessoire.model";
import { Consumable } from '../../../../../core/product/src/lib/models/consommable.model';
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




