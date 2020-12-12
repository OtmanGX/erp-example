import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PopGravageComponent } from './pop-gravage/pop-gravage.component';
import { GravageMockService } from '@TanglassCore/mock/produit/service/gravage.mock.service';
import { Gravage } from '@TanglassCore/models/produit/service.model';
import { BasedServiceComponent } from '../based-service.component';

@Component({
  selector: 'ngx-gravage',
  templateUrl: '../based-service.component.html',
  styleUrls: ['../based-service.component.scss'],
})
export class GravageComponent extends BasedServiceComponent<Gravage> {
  constructor(
    public dialogService: NbDialogService,
    gravageService: GravageMockService
  ) {
    super(dialogService, gravageService);
    this.title = 'Gravage';
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
      .open(PopGravageComponent, {
        context: {
          title: 'Ajouter Entité',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((newElement: Gravage) => {
        this.addItem(newElement);
      });
  }
}
