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


export class FormDelivery{
    client: Client =new Client();
    contact:Contact=new Contact();
    companie: string ='';
    date: Date=new Date();
    nature:LivraisonModesDirection.delivery;
    paiementMode:'';
    isInvoiced: boolean=false;
    commandesId:string[];
 }

export class Delivery extends BaseModel  {

  id?: number;
  formDelivery:FormDelivery=new FormDelivery();
  itemsMatierePremieres: MatierePremiere_purchases[] = [];
  //itemsClients: VerreClient_purchases[] = [];
  itemsServices: Service_purchases[] = [];
  itemsAccessoires: Accessoire_purchases[] = [];
  itemsConsommables: Consommable_purchases[] = [];
  itemsSystemApparent: SystemApparent_purchases[] = [];
  total_HT: number = 0;
  tva: number = 0;
  total_TTC: number = 0;
  discount: number;

  totalMatierePremiereAmount: number=0;
  totalServicesAmount: number=0;
  totalAccessoiresAmount: number=0;
  totalConsommablesAmount: number=0;
  totalSystemApparentAmount: number=0;

  montant_HT: BehaviorSubject<number> = new BehaviorSubject(0);
  montant_TVA: BehaviorSubject<number> = new BehaviorSubject(0);
  montant_discount: BehaviorSubject<number> = new BehaviorSubject(0);
  montant_TTC: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor()
    {
      super()
    }

 amountMatPremiere():void{
  this.totalMatierePremiereAmount = this.itemsMatierePremieres.reduce(function (total, item) {
    return total + item.total_purchase;
  }, 0);
  this.updateTotalAmount();
 }
 amountServices():void{
  this.totalServicesAmount = this.itemsServices.reduce(function (total, item) {
    return total + item.total_purchase;
  }, 0);

  this.updateTotalAmount();

}
  amountConsommables():void{
    this.totalConsommablesAmount = this.itemsConsommables.reduce(function (total, item) {
      return total + item.total_purchase;
    }, 0);

    this.updateTotalAmount();

 }

 amountAccessoires():void{
  this.totalAccessoiresAmount = this.itemsAccessoires.reduce(function (total, item) {
    return total + item.total_purchase;
  }, 0);
  this.updateTotalAmount();

 }
 amountSystemeApparent():void{
  this.totalSystemApparentAmount = this.itemsSystemApparent.reduce(function (total, item) {
    return total + item.total_purchase;
  }, 0);
  this.updateTotalAmount();

 }


  updateTotalAmount():void {

    this.total_HT=
    this.totalMatierePremiereAmount
    +this.totalServicesAmount
    +this.totalConsommablesAmount
    +this.totalAccessoiresAmount
    +this.totalSystemApparentAmount;
    this.tva=0.2*this.total_HT;
    this.total_TTC=this.total_HT+this.tva;
    this.updateAmountsSubjects();

  }
  updateAmountsSubjects():void{
    this.montant_HT.next(this.total_HT);
    this.montant_TVA.next(this.tva);
    this.montant_TTC.next(this.total_TTC);
  }
}




