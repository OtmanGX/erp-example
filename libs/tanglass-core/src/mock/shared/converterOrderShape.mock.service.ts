import { Injectable } from '@angular/core';
import { ProductionOrder } from '../../models/production/productionOrder.model';
import { ICommande } from '../../models/ventes/commande.model';
import { Article } from '../../models/production/productionOrder.model';


@Injectable({
  providedIn: "root",
})
export class ConverterOrderShape {
   commande:ICommande;
   productionOrdre:ProductionOrder;

constructor(  commande:ICommande){
  this.commande=commande;
  this.productionOrdre=new ProductionOrder();
}
convertToProductionForm():ProductionOrder{
    this.commande.itemsMatierePremieres.forEach(glass=>
      {
       let  key=glass.count;
       let code=glass.item.code

       let article=new Article();
       article.glass=glass;

       // iterate interne glass list
       for(let att in this.commande.itemsServices ){
        if(this.commande.itemsServices[att]){
          let affectedServices=this.commande.itemsServices[att].filter(service=>service.Mat_Premiere_Count==key&&service.Mat_Premiere_Code==code);
          article.addedValues=[
            ...article.addedValues,
           ...affectedServices
          ]
        }
       }

       for(let att in this.commande.itemsConsommables ){
        if(this.commande.itemsConsommables[att]){
          let affectedConsommables=this.commande.itemsConsommables[att].filter(cons=>cons.Mat_Premiere_Count==key&&cons.Mat_Premiere_Code==code)
          article.addedValues=[
            ...article.addedValues,
           ...affectedConsommables
          ]
        }
       }
       article.count=this.productionOrdre.articles.length+1
      this.productionOrdre.articles.push(article)
      })
   //iterate customer glass list
    this.commande.itemsClients.forEach(glass=>
        {
         let  key=glass.count;
         let code=glass.item.code
         let article=new Article();
         article.glass=glass;

         for(let att in this.commande.itemsServices){
           if(this.commande.itemsServices[att]){
            let affectedServices=this.commande.itemsServices[att].filter(service=>service.Mat_Premiere_Count==key&&service.Mat_Premiere_Code==code);
            article.addedValues=[
             ...article.addedValues,
             ...affectedServices
                       ]
           }
       }
         for(let att in this.commande.itemsConsommables ){
          if(this.commande.itemsConsommables[att]){
            let affectedConsommables=this.commande.itemsConsommables[att].filter(cons=>cons.Mat_Premiere_Count==key&&cons.Mat_Premiere_Code==code)

            article.addedValues=[
              ...article.addedValues,
              ...affectedConsommables,
            ]
          }
         }
         article.count=this.productionOrdre.articles.length+1
        this.productionOrdre.articles.push(article)
        })
         this.productionOrdre.attachements_id=this.commande.id;
         this.productionOrdre.date=new Date();
        return this.productionOrdre
   }


}
