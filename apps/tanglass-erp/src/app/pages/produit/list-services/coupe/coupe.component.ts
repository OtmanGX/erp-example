import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PopCoupeComponent } from './pop-coupe/pop-coupe.component';
import { CoupeMockService } from '@TanglassCore/mock/produit/service/coupe.mock.service';
import { Coupe } from '../../../../../../../../libs/core/product/src/lib/models/service.model';
import { BasedServiceComponent } from '../based-service.component';
@Component({
  selector: 'ngx-coupe',
  templateUrl: '../based-service.component.html',
  styleUrls: ['../based-service.component.scss'],
})
export class CoupeComponent extends BasedServiceComponent<Coupe> {
  constructor(
    public dialogService: NbDialogService,
    coupeService: CoupeMockService
  ) {
    super(dialogService, coupeService);
    this.title = 'Coupe';
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

  add_caracteristics(): void {
    this.dialogService
      .open(PopCoupeComponent, {
        context: {
          title: 'Ajouter Entité',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe({
        next: (item) => {
          if (item) {
            this.addItem(item);
          }
        },
      });
  }

  onSave(): void {
    //send service Collection to server
  }
}
