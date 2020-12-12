import { Component, OnInit } from '@angular/core';
import { CommandeMockService } from '@TanglassCore/mock/ventes/commande.mock.service';
import { ICommande } from '@TanglassCore/models/ventes/commande.model';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
import { ObjectRenderComponent } from '../../../shared/objects-render-component/object-render.component';

@Component({
  selector: 'ngx-list-commandes',
  templateUrl: './list-commandes.component.html',
  styleUrls: ['./list-commandes.component.scss'],
})
export class ListCommandesComponent implements OnInit {
  dataCommandes: ICommande;
  source: LocalDataSource = new LocalDataSource();

  selectedRows = [];

  constructor(
    private commandeService: CommandeMockService,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getCommandes();
  }
  settings = {
    selectMode: 'multi',
    hideHeader: false,
    actions: false,
    columns: {
      id: {
        title: 'Com N°',
        type: 'custom',
        valuePrepareFunction: (cell, row: ICommande) => {
          let data = { link: 'commandes/fiche/', linkText: 'Comm000' + row.id };
          return data;
        },
        renderComponent: ObjectRenderComponent,
        sortDirection: 'desc',
      },
      client: {
        title: 'Client',
        type: 'html',
        valuePrepareFunction: (cell, row: ICommande) => {
          return row.formCommande.client.nom;
        },
      },
      dateCommande: {
        title: 'Date ',
        type: 'html',
        valuePrepareFunction: (cell, row: ICommande) => {
          let date = this.datepipe.transform(
            row.formCommande.dateCommande,
            'dd/MM/yyyy'
          );
          return date;
        },
      },
      delay: {
        title: 'Délai',
        type: 'html',
        valuePrepareFunction: (cell, row: ICommande) => {
          let date = this.datepipe.transform(
            row.formCommande.delay,
            'dd/MM/yyyy'
          );
          return date;
        },
      },
      companie: {
        title: 'Société',
        type: 'html',
        valuePrepareFunction: (cell, row: ICommande) => {
          return row.formCommande.companie;
        },
      },
      total_HT: {
        title: 'Total HT',
        type: 'number',
      },
      tva: {
        title: 'Total TVA',
        type: 'number',
      },
      total_TTC: {
        title: 'Total TTC',
        type: 'number',
      },
      remise: {
        title: 'Remise',
        type: 'number',
      },
      facturation: {
        title: 'Facturation',
        type: 'string',
      },
      livraison: {
        title: 'Livraison',
        type: 'string',
      },
      avance: {
        title: 'Avance',
        type: 'number',
      },
      reste: {
        title: 'Reste',
        type: 'number',
      },
      traitement: {
        title: 'Traitement',
        type: 'number',
      },
    },
  };
  getCommandes(): void {
    this.commandeService
      .getAll()
      .subscribe(
        (commandes) => this.source.load(commandes) && console.log(commandes)
      );
  }
  onUserRowSelect(event) {
    this.selectedRows = event.selected;
  }
}
