import { Consumable } from "../../../../../core/product/src/lib/models/consommable.model";
import { Item_purchases } from "./item_purchases.model";
import { Mixin } from 'ts-mixer';


export class Consommable_items{
  baguette:Baguette_purchases[]=[];
  film:Film_purchases[]=[];
  piece:Consommable_purchases[]=[];
  peinture:Peinture_purchases[]=[];
  uchannel:Consommable_purchases[]=[];
  tubeInox:TubeInox_purchases[]=[];
}
export class Consommable_purchases extends Item_purchases  {
  Mat_Premiere_Code='-';
  Mat_Premiere_Count:number=0;
  item:Consumable= new Consumable()
}
 class QuantityLinearCalculator {
  quantity:number;
  setQuantity(largeur:number,hauteur:number,pieces:number) {
      this.quantity= (largeur +hauteur) * 2 * pieces;
  }
}
 class QuantitySquareCalculator {
  quantity:number;
  setQuantity(largeur:number,hauteur:number,pieces:number) {
    this.quantity= largeur*hauteur * pieces;
  }
}

export class Baguette_purchases extends Mixin(Consommable_purchases,QuantityLinearCalculator) {}
export class Film_purchases extends Mixin(Consommable_purchases,QuantitySquareCalculator){}
export class Peinture_purchases extends Mixin(Consommable_purchases,QuantitySquareCalculator){}
export class TubeInox_purchases extends Mixin(Consommable_purchases,QuantitySquareCalculator){}

