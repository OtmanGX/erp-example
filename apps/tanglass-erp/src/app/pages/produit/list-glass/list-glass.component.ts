import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import { PopGlassComponent } from './pop-glass/pop-glass.component';
import { MatierePremiereMockService } from '@TanglassCore/mock/produit/mat_premiere.mock.service';
import { MatièrePremière } from '../../../../../../../libs/core/product/src/lib/models/glasse.model';
import { SelectDiametreComponent } from '../../ventes/shared/for-select-render-component/select-diametre.component';
import { MatierePremiere_purchases } from '@TanglassCore/models/ventes/customerPurchases/matiere_premiere_purchases.model';

@Component({
  selector: 'ngx-list-matierePremiere',
  templateUrl: './list-glass.component.html',
  styleUrls: ['./list-glass.component.scss'],
})
export class ListGlassComponent implements OnInit {
  selectedRows = [];
  dataMat_premiere: MatièrePremière[];
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private dialogService: NbDialogService,
    private matierePremiereService: MatierePremiereMockService
  ) {}

  ngOnInit(): void {
    this.getMp();
  }
  getMp() {
    this.matierePremiereService.getAll().subscribe({
      next: (Mp) =>
        (this.dataMat_premiere = Mp) && this.source.load(this.dataMat_premiere),
    });
  }
  settings = {
    selectMode: 'multi',
    hideHeader: false,
    actions: false,
    columns: {
      code: {
        title: 'Code',
        type: 'string',
        sortDirection: 'desc',
      },
      libelle: {
        title: 'Libellé',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      color: {
        title: 'Couleur',
        type: 'string',
      },
      epaisseur: {
        title: 'Epaisseur',
        type: 'string',
      },

      prix_default: {
        title: 'Prix de Vente',
        type: 'number',
      },
      prix_min: {
        title: 'Prix min',
        type: 'number',
      },
      prix_max: {
        title: 'Prix max',
        type: 'number',
      },
      prix_Achat: {
        title: "Prix d'Achat ",
        type: 'number',
      },
      tags: {
        title: 'Tags',
        type: 'string',
      },
      companie: {
        title: 'Société',
        type: 'html',
        valuePrepareFunction: (cell, row: MatierePremiere_purchases) => {
          let companies: string = '';
          for (let companie of row.companie) {
            companies += ' ' + companie;
          }
          return companies;
        },
      },
    },
  };

  onUserRowSelect(event) {
    this.selectedRows = event.selected;
  }
  openPopUpMp() {
    this.dialogService
      .open(PopGlassComponent, {
        context: {
          title: 'Matière Première',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe({
        next: (Mp) => {
          if (Mp) {
            this.source.load(this.dataMat_premiere);
          }
        },
      });
  }
}
