import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PopAluminiumComponent } from './pop-aluminium/pop-aluminium.component';
import { Aluminium } from '../../../../../../../../libs/core/product/src/lib/models/service.model';
import { AluminiumMockService } from '@TanglassCore/mock/produit/service/aluminium.mock.service';
import { BasedServiceComponent } from '../based-service.component';

@Component({
  selector: 'ngx-aluminium',
  templateUrl: '../based-service.component.html',
  styleUrls: ['../based-service.component.scss'],
})
export class AluminiumComponent extends BasedServiceComponent<Aluminium> {
  constructor(
    public dialogService: NbDialogService,
    aluminiumService: AluminiumMockService
  ) {
    super(dialogService, aluminiumService);
    this.title = 'Aluminium';
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
      .open(PopAluminiumComponent, {
        context: {
          title: 'Ajouter Entité',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((newElement: Aluminium) => {
        this.addItem(newElement);
      });
  }
}
