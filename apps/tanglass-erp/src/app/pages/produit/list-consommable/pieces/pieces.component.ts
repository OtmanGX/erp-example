import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Consumable } from '../../../../../../../../libs/core/product/src/lib/models/consommable.model';
import { ConsommablePiecesMockService } from '@TanglassCore/mock/produit/consommable/consommablePieces.mock.service';
import { BasedConsommableComponent } from '../based-consommable.component';
import { PopConsommablePiecesComponent } from './pop-consommable-pieces/pop-consommable-pieces.component';

@Component({
  selector: 'ngx-pieces',
  templateUrl: '../based-consommable.component.html',
  styleUrls: ['../based-consommable.component.scss'],
})
export class PiecesComponent extends BasedConsommableComponent<Consumable> {
  constructor(
    public dialogService: NbDialogService,
    consommableService: ConsommablePiecesMockService
  ) {
    super(dialogService, consommableService);
    this.title = 'Pièces en Unité';
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
      .open(PopConsommablePiecesComponent, {
        context: {
          title: 'Ajouter Entité',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((newElement: Consumable) => {
        this.addItem(newElement);
      });
  }
}
