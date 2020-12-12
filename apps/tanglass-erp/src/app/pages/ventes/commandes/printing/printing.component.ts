import { Component, OnInit } from '@angular/core';
import { Consommable_purchases } from '@TanglassCore/models/ventes/customerPurchases/consommable_purchases.model';
import { Service_purchases } from '@TanglassCore/models/ventes/customerPurchases/service_purchases.model';
import { Accessoire_purchases } from '@TanglassCore/models/ventes/customerPurchases/accessoire_purchases.model';
import { ActivatedRoute } from '@angular/router';
import { CommandeMockService } from '@TanglassCore/mock/ventes/commande.mock.service';
import { ICommande } from '@TanglassCore/models/ventes/commande.model';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ngx-printing',
  templateUrl: './printing.component.html',
  styleUrls: ['./printing.component.scss'],
})
export class PrintingComponent implements OnInit {
  id: number;
  commande: ICommande;
  dataServices: Service_purchases[] = [];
  dataConsommables: Consommable_purchases[] = [];
  constructor(
    private readonly route: ActivatedRoute,
    private readonly commandeService: CommandeMockService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.commandeService.getOneById(this.id).subscribe({
      next: (commande: ICommande) => {
        if (commande) {
          this.commande = commande;
          this.concatServicesAndCons();
        }
      },
    });
    this.commande.total_TTC;
  }
  concatServicesAndCons() {
    this.dataServices = Object.values(this.commande.itemsServices).reduce(
      function (a, b) {
        return a.concat(b);
      }
    );
    this.dataConsommables = Object.values(
      this.commande.itemsConsommables
    ).reduce(function (a, b) {
      return a.concat(b);
    });
  }
}
