import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PopSablageComponent } from './pop-sablage/pop-sablage.component';
import { SablageMockService } from '@TanglassCore/mock/produit/service/sablage.mock.service';
import { Sablage } from '@TanglassCore/models/produit/service.model';
import { BasedServiceComponent } from '../based-service.component';

@Component({
  selector: 'ngx-sablage',
  templateUrl: '../based-service.component.html',
  styleUrls: ['../based-service.component.scss'],
})
export class SablageComponent extends BasedServiceComponent<Sablage> {
  constructor(
    public dialogService: NbDialogService,
    sablageService: SablageMockService
  ) {
    super(dialogService, sablageService);
    this.title = 'Sablage';
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
      type: {
        title: 'Type',
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
      .open(PopSablageComponent, {
        context: {
          title: 'Ajouter Entité',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((newElement: Sablage) => {
        this.addItem(newElement);
      });
  }
}
