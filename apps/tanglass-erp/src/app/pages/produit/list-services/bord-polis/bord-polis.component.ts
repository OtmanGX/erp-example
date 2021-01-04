import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PopBordPolisComponent } from './pop-bord-polis/pop-bord-polis.component';
import { BordPolis } from '../../../../../../../../libs/core/product/src/lib/models/service.model';
import { BordPolisMockService } from '@TanglassCore/mock/produit/service/bord_polis.mock.service';
import { BasedServiceComponent } from '../based-service.component';

@Component({
  selector: 'ngx-bord-polis',
  templateUrl: '../based-service.component.html',
  styleUrls: ['../based-service.component.scss'],
})
export class BordPolisComponent extends BasedServiceComponent<BordPolis> {
  constructor(
    public dialogService: NbDialogService,
    bordPolisMockService: BordPolisMockService
  ) {
    super(dialogService, bordPolisMockService);
    this.title = 'Bord Polis';
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
        title: 'Outil ',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      epaisseur: {
        title: 'Epaisseur ',
        type: 'string',
      },

      prix_min: {
        title: 'Prix de vente minimal',
        type: 'string',
      },
      prix_max: {
        title: 'Prix de vente maximal',
        type: 'string',
      },
      prix_default: {
        title: 'Prix de vente',
        type: 'string',
      },
    },
  };

  add_caracteristics() {
    this.dialogService
      .open(PopBordPolisComponent, {
        context: {
          title: 'Ajouter Entité',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((newElement: BordPolis) => {
        this.addItem(newElement);
      });
  }
}
