import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Uchannel } from '../../../../../../../../libs/core/product/src/lib/models/consommable.model';
import { UchannelMockService } from '@TanglassCore/mock/produit/consommable/uchannel.mock.service';
import { BasedConsommableComponent } from '../based-consommable.component';
import { PopUchannelComponent } from './pop-uchannel/pop-uchannel.component';

@Component({
  selector: 'ngx-uchannel',
  templateUrl: '../based-consommable.component.html',
  styleUrls: ['../based-consommable.component.scss'],
})
export class UchannelComponent extends BasedConsommableComponent<Uchannel> {
  constructor(
    public dialogService: NbDialogService,
    consommableService: UchannelMockService
  ) {
    super(dialogService, consommableService);
    this.title = 'Uchannel';
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
      .open(PopUchannelComponent, {
        context: {
          title: 'Ajouter Entité',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((newElement: Uchannel) => {
        this.addItem(newElement);
      });
  }
}
