import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PopTrousComponent } from './pop-trous/pop-trous.component';
import { TrousMockService } from '@TanglassCore/mock/produit/service/trous.mock.service';
import { Trous } from '@TanglassCore/models/produit/service.model';
import { BasedServiceComponent } from '../based-service.component';

@Component({
  selector: 'ngx-trous',
  templateUrl: '../based-service.component.html',
  styleUrls: ['../based-service.component.scss'],
})
export class TrousComponent extends BasedServiceComponent<Trous> {
  constructor(
    public dialogService: NbDialogService,
    trousService: TrousMockService
  ) {
    super(dialogService, trousService);
    this.title = 'Trous';
  }

  settings = {
    hideHeader: false,
    hideSubHeader: true,
    noDataMessage: ' Pas de données',
    actions: {
      position: 'right',
      add: false,
      edit: false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    edit: false,
    columns: {
      code: {
        title: 'Code',
        type: 'string',
      },
      libelle: {
        title: 'Désignation',
        type: 'string',
      },
      outil: {
        title: 'Outil',
        type: 'string',
      },
      epaisseur: {
        title: "Intervalle d'Epaisseur ",
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '[ ' + row.epaisseur_min + ' , ' + row.epaisseur_max + ' ]';
        },
      },
      diametre: {
        title: 'Intervalle du diamètre ',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '[ ' + row.diametre_min + ' , ' + row.diametre_max + ' ]';
        },
      },
      prix: {
        title: 'Intervalle des Prix',
        valuePrepareFunction: (cell, row) => {
          return '[ ' + row.prix_min + ' , ' + row.prix_max + ' ]';
        },
      },
      prix_default: {
        title: 'Prix de vente',
        type: 'string',
      },
    },
  };

  add_caracteristics() {
    this.dialogService
      .open(PopTrousComponent, {
        context: {
          title: 'Ajouter Entité',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((newElement: Trous) => {
        this.addItem(newElement);
      });
  }
}
