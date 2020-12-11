import { MatierePremiere_purchases, VerreClient_purchases, } from './customerPurchases/matiere_premiere_purchases.model';
import { Accessoire_purchases } from "./customerPurchases/accessoire_purchases.model";
import { Services_items, Service_purchases } from "./customerPurchases/service_purchases.model";
import { Client } from './client.model';
import { Contact } from './contact.model';
import { BehaviorSubject } from 'rxjs';
import { BaseModel } from '../baseModel.model';
import { companiesDirection,LivraisonModesDirection } from "../../../@core/enums/ventes.enum";
import {  Consommable_items, Consommable_purchases } from './customerPurchases/consommable_purchases.model';
import { SystemApparent_purchases } from './customerPurchases/systemApparent_purchases.model';


export class FormInvoice{
    client: Client =new Client();
    contact:Contact=new Contact();
    companie: string ='';
    date: Date=new Date();
    deliveriesId:string[];
    nature:LivraisonModesDirection.delivery;
 }

export class Invoice extends BaseModel  {

  id?: number;
  formInvoice:FormInvoice=new FormInvoice();
  itemsMatierePremieres: MatierePremiere_purchases[] = [];
  itemsServices: Service_purchases[] = [];
  itemsAccessoires: Accessoire_purchases[] = [];
  itemsConsommables: Consommable_purchases[] = [];
  itemsSystemApparent: SystemApparent_purchases[] = [];

  total_HT: number = 0;
  tva: number = 0;
  total_TTC: number = 0;
  discount: number;

  montant_HT: BehaviorSubject<number> = new BehaviorSubject(0);
  montant_TVA: BehaviorSubject<number> = new BehaviorSubject(0);
  montant_discount: BehaviorSubject<number> = new BehaviorSubject(0);
  montant_TTC: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor()
    {
      super()
    }



}
