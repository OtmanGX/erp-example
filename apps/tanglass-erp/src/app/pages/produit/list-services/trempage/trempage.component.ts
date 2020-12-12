import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PopTrempageComponent } from './pop-trempage/pop-trempage.component';
import { TrempageMockService } from '@TanglassCore/mock/produit/service/trempage.mock.service';
import { Trempage } from '@TanglassCore/models/produit/service.model';
import { BasedServiceComponent } from '../based-service.component';
@Component({
  selector: 'ngx-trempage',
  templateUrl: '../based-service.component.html',
  styleUrls: ['../based-service.component.scss'],
})
export class TrempageComponent extends BasedServiceComponent<Trempage> {
  constructor(
    public dialogService: NbDialogService,
    trempageService: TrempageMockService
  ) {
    super(dialogService, trempageService);
    this.title = 'Trempage';
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
      .open(PopTrempageComponent, {
        context: {
          title: 'Ajouter Entité',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((newElement: Trempage) => {
        this.addItem(newElement);
      });
  }
}
