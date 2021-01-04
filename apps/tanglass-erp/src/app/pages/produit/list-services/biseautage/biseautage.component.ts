import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PopBiseautageComponent } from './pop-biseautage/pop-biseautage.component';
import { FormBuilder } from '@angular/forms';
import { BiseautageMockService } from '@TanglassCore/mock/produit/service/biseautage.mock.service';
import { Biseautage } from '../../../../../../../../libs/core/product/src/lib/models/service.model';
import { BasedServiceComponent } from '../based-service.component';

@Component({
  selector: 'ngx-biseautage',
  templateUrl: '../based-service.component.html',
  styleUrls: ['../based-service.component.scss'],
})
export class BiseautageComponent extends BasedServiceComponent<Biseautage> {
  constructor(
    public dialogService: NbDialogService,
    BiseautageService: BiseautageMockService
  ) {
    super(dialogService, BiseautageService);
    this.title = 'Biseautage';
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
        title: 'Type ',
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
      .open(PopBiseautageComponent, {
        context: {
          title: 'Ajouter Entité',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((newElement: Biseautage) => {
        this.addItem(newElement);
      });
  }
}
