import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PopPoseComponent } from './pop-pose/pop-pose.component';
import { Pose } from '@TanglassCore/models/produit/service.model';
import { BasedServiceComponent } from '../based-service.component';
import { PoseMockService } from '@TanglassCore/mock/produit/service/pose.mock.service';

@Component({
  selector: 'ngx-pose',
  templateUrl: '../based-service.component.html',
  styleUrls: ['../based-service.component.scss'],
})
export class PoseComponent extends BasedServiceComponent<Pose> {
  constructor(
    public dialogService: NbDialogService,
    poseService: PoseMockService
  ) {
    super(dialogService, poseService);
    this.title = 'Pose';
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
      .open(PopPoseComponent, {
        context: {
          title: 'Ajouter Entité',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe((newElement: Pose) => {
        this.addItem(newElement);
      });
  }
}
