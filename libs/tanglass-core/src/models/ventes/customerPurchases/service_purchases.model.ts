import { Item_purchases } from "./item_purchases.model";
import {
  Aluminium,
  Biseautage, Bombage,
  BordPolis,
  Coupe,
  Encoche, Gravage, Pose, Sablage,
  Service,
  Trempage,
  Trous
} from '@TanglassCore/models/produit/service.model';

export class Services_items{
  coupe:Coupe_purchases[]=[];
  bordPolis:BordPolis_purchases[]=[];
  encoche:Encoche_purchases[]=[];
  sablage:Sablage_purchases[]=[];
  trempage:Trempage_purchases[]=[];
  trous:Trous_purchases[]=[];
  biseautage:Biseautage_purchases[]=[];
  bombage:Bombage_purchases[]=[];
  gravage:Gravage_purchases[]=[];
  aluminium:Aluminium_purchases[]=[];
  pose:Pose_purchases[]=[];
}

export abstract class Service_purchases extends Item_purchases {

  Mat_Premiere_Code='';
  Mat_Premiere_Count:number;
  item:Service

}

export class Coupe_purchases extends Service_purchases {

  item= new Coupe();

  setQuantity(largeur:number,hauteur:number,pieces:number) {
    this.quantity= largeur * hauteur * pieces;
  }
}
export class BordPolis_purchases extends Service_purchases {
  item= new BordPolis();
  setQuantity(largeur,hauteur,pieces) {
    this.quantity= (largeur +hauteur) * 2 * pieces;
  }
}
export class Trous_purchases extends Service_purchases {
  item= new Trous();
  diametre: number=0;
}

export class Encoche_purchases extends Service_purchases {
  item= new Encoche();
}
export class Biseautage_purchases extends Service_purchases {
  item= new Biseautage();
  setQuantity(largeur,hauteur,pieces) {
    this.quantity= (largeur +hauteur) * 2 * pieces;
  }
}

export class Trempage_purchases extends Service_purchases {
  item= new Trempage();
  setQuantity(largeur:number,hauteur:number,pieces:number) {
    this.quantity= largeur * hauteur * pieces;
  }
}

export class Bombage_purchases extends Service_purchases  {
  item= new Bombage()
  setQuantity(largeur:number,hauteur:number,pieces:number) {
    this.quantity= largeur * hauteur * pieces;
  }
}

export class Sablage_purchases extends Service_purchases {
  item= new Sablage();
  setQuantity(largeur:number,hauteur:number,pieces:number) {
    this.quantity= largeur * hauteur * pieces;
  }
}

export class Gravage_purchases extends Service_purchases  {
  item= new Gravage();
  setQuantity(largeur,hauteur,pieces) {
    this.quantity= (largeur +hauteur) * 2 * pieces;
  }
}
export class Aluminium_purchases extends Service_purchases  {
  item = new Aluminium()
}

export class Pose_purchases extends Service_purchases  {
  item = new Pose()
}





