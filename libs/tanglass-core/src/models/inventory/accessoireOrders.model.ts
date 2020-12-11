import { ICommande } from '../ventes/commande.model';
import { Accessoire_purchases } from '../ventes/customerPurchases/accessoire_purchases.model';

export class AccessoireOrder  {
    id?: number;
    attachment_id:number;
    date:Date=new Date();
    delay:Date;
    fromWhere:string='usine';
    items:Accessoire_purchases[];
    isDelivered:boolean=false;//delivered or not yet 
    isAvailable:boolean=true;
    isReady:boolean=false;
    constructor(order:ICommande){
       this.attachment_id=order.id;
       this.items=order.itemsAccessoires;
      this.delay=order.formCommande.delay;
    }
  }
  