import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PopEncochesComponent } from './pop-encoches/pop-encoches.component';
import { EncocheMockService } from '@TanglassCore/mock/produit/service/encoche.mock.service';
import { Encoche } from '@TanglassCore/models/produit/service.model';
import { BasedServiceComponent } from '../based-service.component';

@Component({
  selector: 'ngx-encoches',
  templateUrl: '../based-service.component.html',
  styleUrls: ['../based-service.component.scss'],
})
export class EncochesComponent extends BasedServiceComponent<Encoche> {
  constructor(
    public dialogService: NbDialogService,
    encocheService: EncocheMockService
  ) {
    super(dialogService, encocheService);
    this.title = 'Encoches';
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
      outil: {
        title: 'Outil',
        type: 'string',
      },
      epaisseur: {
        title: "Intervalle d'Epaisseur ",
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return '[ ' + row.epaisseur_min + ' , ' + row.epaisseur_max + ' ]';
        },
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
      .open(PopEncochesComponent, {
        context: {
          title: 'Ajouter Entité',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((newElement: Encoche) => {
        this.addItem(newElement);
      });
  }
}
