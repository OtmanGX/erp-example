import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Consommable } from '@TanglassCore/models/produit/consommable.model';
import { DoubleVitrageMockService } from '@TanglassCore/mock/produit/consommable/film.mock.service';
import { BasedConsommableComponent } from '../based-consommable.component';
import { PopStadipComponent } from './pop-stadip/pop-stadip.component';
@Component({
  selector: 'ngx-baguette',
  templateUrl: '../based-consommable.component.html',
  styleUrls: ['../based-consommable.component.scss'],
})
export class BaguetteComponent extends BasedConsommableComponent<Consommable> {
  constructor(
    public dialogService: NbDialogService,
    consommableService: DoubleVitrageMockService
  ) {
    super(dialogService, consommableService);
    this.title = 'Baguette Stadip';
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
      .open(PopStadipComponent, {
        context: {
          title: 'Ajouter Entité',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((newElement: Consommable) => {
        this.addItem(newElement);
      });
  }
}
