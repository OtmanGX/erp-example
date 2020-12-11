import { SystemApparent } from "../../produit/systemApparent.model";
import {Item_purchases } from "./item_purchases.model";


export class SystemApparent_purchases extends Item_purchases  {
 
   item= new SystemApparent();
   unit:number=0;
   setQuantity() {
    this.quantity= this.item.paramCalcul*this.unit;
  }
  }
  