import { MatierePremiere_purchases, VerreClient_purchases } from '../ventes/customerPurchases/matiere_premiere_purchases.model';
import { Coupe_purchases,BordPolis_purchases,Encoche_purchases,Sablage_purchases,Trempage_purchases,Trous_purchases,Biseautage_purchases,
    Bombage_purchases,Gravage_purchases,Aluminium_purchases,Pose_purchases, Service_purchases} from '../ventes/customerPurchases/service_purchases.model';

    import { Baguette_purchases,Film_purchases,Consommable_purchases,Peinture_purchases,TubeInox_purchases, Consommable_items} from '../ventes/customerPurchases/consommable_purchases.model';
import { Item_purchases } from '../ventes/customerPurchases/item_purchases.model';




export type AddedValue=Service_purchases|Consommable_purchases;

export class Article {
    id?:number;
    count:number=0;
    glass:MatierePremiere_purchases|VerreClient_purchases;
    addedValues:AddedValue[]=[];
    isReady:boolean=false;
}

export class ProductionOrder {
    id?: number=null;
    attachements_id:number;
    articles:Article[]=[];
    date: Date=new Date();
    delay:Date;
    isUrgent:boolean=false;
  
  }


