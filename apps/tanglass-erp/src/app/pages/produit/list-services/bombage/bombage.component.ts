import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PopBombageComponent } from './pop-bombage/pop-bombage.component';
import { Bombage } from '../../../../../../../../libs/core/product/src/lib/models/service.model';
import { BombageMockService } from '@TanglassCore/mock/produit/service/bombage.mock.service';

import { BasedServiceComponent } from '../based-service.component';
@Component({
  selector: 'ngx-bombage',
  templateUrl: '../based-service.component.html',
  styleUrls: ['../based-service.component.scss'],
})
export class BombageComponent extends BasedServiceComponent<Bombage> {
  constructor(
    public dialogService: NbDialogService,
    bombageService: BombageMockService
  ) {
    super(dialogService, bombageService);
    this.title = 'Bombage';
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
      .open(PopBombageComponent, {
        context: {
          title: 'Ajouter Entité',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((newElement: Bombage) => {
        this.addItem(newElement);
      });
  }
}
