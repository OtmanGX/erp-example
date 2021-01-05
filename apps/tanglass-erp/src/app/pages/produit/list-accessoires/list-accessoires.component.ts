import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PopAccessoireComponent } from './pop-accessoire/pop-accessoire.component';
import { AccessoireMockService } from '@TanglassCore/mock/produit/accessoire.mock.service';
import { Accessoire } from '@TanglassCore/models/produit/accessoire.model';

import { LocalDataSource } from 'ng2-smart-table';
import { Accessoire_purchases } from '@TanglassCore/models/ventes/customerPurchases/accessoire_purchases.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-list-accessoires',
  templateUrl: './list-accessoires.component.html',
  styleUrls: ['./list-accessoires.component.scss'],
})
export class ListAccessoiresComponent implements OnInit, OnDestroy {
  selectedRows = [];
  dataAccessoires: Accessoire[] = [];
  accessoireSubscription: Subscription;
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private dialogService: NbDialogService,
    private accessoireService: AccessoireMockService
  ) {}

  ngOnInit(): void {
    this.getAccessoires();
  }
  ngOnDestroy(): void {
    this.accessoireSubscription.unsubscribe();
  }
  getAccessoires() {
    this.accessoireSubscription = this.accessoireService.getAll().subscribe({
      next: (accessoires) =>
        (this.dataAccessoires = accessoires) &&
        this.source.load(this.dataAccessoires),
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
        width: '80px',
      },
      libelle: {
        title: 'Libellé',
        type: 'string',
      },
      prix_default: {
        title: 'Prix de Vente ',
        type: 'number',
        width: '150px',
      },
      prix_min: {
        title: 'Prix Min ',
        type: 'number',
        width: '150px',
      },
      prix_max: {
        title: 'Prix Max ',
        type: 'number',
        width: '150px',
      },
      prix_Achat: {
        title: "Prix d'Achat ",
        type: 'number',
        width: '150px',
      },
      tags: {
        title: 'Tags',
        type: 'string',
      },
      companie: {
        title: 'Société',
        type: 'html',
        valuePrepareFunction: (cell, row: Accessoire_purchases) => {
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
  openPopUpAccessoire() {
    this.dialogService
      .open(PopAccessoireComponent, {
        context: {
          title: 'Accessoire',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe({
        next: (accessoire) => {
          if (accessoire) {
            this.source.load(this.dataAccessoires);
          }
        },
      });
  }
}
