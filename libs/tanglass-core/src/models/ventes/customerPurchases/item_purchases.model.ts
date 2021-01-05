import { SystemApparent } from "../../produit/systemApparent.model";
import { MatièrePremière } from '@TanglassCore/models/produit/matiere_premiere.model';
import { Consommable } from '@TanglassCore/models/produit/consommable.model';
import { Service } from '@TanglassCore/models/produit/service.model';
import { Accessoire } from '@TanglassCore/models/produit/accessoire.model';

export abstract class Item_purchases {
  id?:number;
  count:number=0;
  attachement_id: string;
  item:MatièrePremière|Accessoire|Service|Consommable|SystemApparent;
  total_purchase:number=0;
  companie:string='';
  quantity:number=1;
  isReady:boolean=false;
  isDelivered:boolean=false;
  isOut:boolean=false;

}




