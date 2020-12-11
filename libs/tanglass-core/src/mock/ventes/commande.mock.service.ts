import { commandes} from '../../data/ventes/commande.data';
import { Injectable } from '@angular/core';
import {Commande, ICommande} from '../../models/ventes/commande.model'
import { BaseMockService } from "../shared/base.mock.service";
import { Mixin } from 'ts-mixer';
import {CommandeService} from '../../services/ventes/commande.service'
import { of as observableOf,  Observable } from 'rxjs';


class CommandeMockData extends BaseMockService<ICommande> {
  constructor() {
    super();
    this.listData = commandes;
  }
}

@Injectable({
  providedIn: "root",
})
export class CommandeMockService extends Mixin(CommandeService,CommandeMockData){



 
  findByClient(clientId): Observable<ICommande[]> {
    let matchedCommandes = this.listData.filter(item => item.formCommande.client.id === clientId);
    return observableOf(matchedCommandes)
  }

  

}



