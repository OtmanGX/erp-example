import { Item_purchases } from "./item_purchases.model";
import { MatièrePremière, VerreClient } from '@TanglassCore/models/produit/matiere_premiere.model';

export class MatierePremiere_purchases extends Item_purchases {
  item: MatièrePremière=new MatièrePremière();
  largeur: number=0;
  hauteur: number=0;
  pieces:number=1;

}

export class VerreClient_purchases  {
  id?: number=null;
  count:number=0;
  attachement_id: string;
  item: VerreClient=new VerreClient();
  largeur: number=0;
  hauteur: number=0;
  pieces:number=1;


}
