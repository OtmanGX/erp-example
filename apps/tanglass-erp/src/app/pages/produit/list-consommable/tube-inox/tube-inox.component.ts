import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import {
  Consumable,
  TubeInox,
} from '../../../../../../../../libs/core/product/src/lib/models/consommable.model';
import { TubeInoxMockService } from '@TanglassCore/mock/produit/consommable/tubeInox.mock.service';
import { BasedConsommableComponent } from '../based-consommable.component';
import { PopInoxComponent } from './pop-inox/pop-inox.component';

@Component({
  selector: 'ngx-tube-inox',
  templateUrl: '../based-consommable.component.html',
  styleUrls: ['../based-consommable.component.scss'],
})
export class TubeInoxComponent extends BasedConsommableComponent<TubeInox> {
  constructor(
    public dialogService: NbDialogService,
    consommableService: TubeInoxMockService
  ) {
    super(dialogService, consommableService);
    this.title = 'Tubes Inox';
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
      .open(PopInoxComponent, {
        context: {
          title: 'Ajouter Entité',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((newElement: TubeInox) => {
        this.addItem(newElement);
      });
  }
}
