import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';
import { PopSystemeApparentComponent } from './pop-systeme-apparent/pop-systeme-apparent.component';
import { SystemApparentMockService } from '@TanglassCore/mock/produit/systemApparent.mock.service';
import { SystemApparent } from '@TanglassCore/models/produit/systemApparent.model';
import { SystemApparent_purchases } from '@TanglassCore/models/ventes/customerPurchases/systemApparent_purchases.model';

@Component({
  selector: 'ngx-list-systeme-apparent',
  templateUrl: './list-systeme-apparent.component.html',
  styleUrls: ['./list-systeme-apparent.component.scss'],
})
export class ListSystemeApparentComponent implements OnInit {
  selectedRows = [];
  dataSystemeApparent: SystemApparent[];
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private dialogService: NbDialogService,
    private systemApparentService: SystemApparentMockService
  ) {}

  ngOnInit(): void {
    this.getSystemesApparents();
  }
  getSystemesApparents() {
    this.systemApparentService.getAll().subscribe({
      next: (systemeApparent) =>
        (this.dataSystemeApparent = systemeApparent) &&
        this.source.load(this.dataSystemeApparent),
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
      epaisseur: {
        title: 'Epaisseur',
        type: 'string',
      },
      paramCalcul: {
        title: 'Epaisseur',
        type: 'number',
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
        valuePrepareFunction: (cell, row: SystemApparent_purchases) => {
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
      .open(PopSystemeApparentComponent, {
        context: {
          title: 'Systèmes Apparents',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe({
        next: (systemeApparent) => {
          if (systemeApparent) {
            this.source.load(this.dataSystemeApparent);
          }
        },
      });
  }
}
