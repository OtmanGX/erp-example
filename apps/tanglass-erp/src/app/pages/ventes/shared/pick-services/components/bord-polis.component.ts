import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ActionsRenderComponent } from '../../actions-render-component/actions-render.component';
import { InputRenderComponent } from '../../input-render-component/input-render.component';
import { SelectRenderComponent } from '../../for-select-render-component/select-render.component';
import { UniSelectRenderComponent } from '../../select-render-component/uni-select-render.component';
import { BordPolis } from '../../../../../../../../../libs/core/product/src/lib/models/service.model';
import { BordPolisMockService } from '@TanglassCore/mock/produit/service/bord_polis.mock.service';
import { BordPolis_purchases } from '@TanglassCore/models/ventes/customerPurchases/service_purchases.model';
import { BaseServiceComponent } from './base-service.component';
import { MatierePremiere_purchases } from '@TanglassCore/models/ventes/customerPurchases/matiere_premiere_purchases.model';
import { InputPriceRenderComponent } from '../../input-render-component/input-price-render.component';

@Component({
  selector: 'ngx-bord-polis',
  templateUrl: './base-service.component.html',
  styleUrls: ['./base-service.component.scss'],
})
export class BordPolisComponent extends BaseServiceComponent<BordPolis> {
  filtrageArgs = ['code', 'type', 'outil'];
  items: BordPolis_purchases[] = [];

  addBordPolis(selectedMatierePremiere) {
    let c = this.items.length;
    selectedMatierePremiere.forEach((element) => {
      let service = new BordPolis_purchases();
      service.setQuantity(element.largeur, element.hauteur, element.pieces);
      this.assignKnownValues(service, element);
      service.count = c + 1;
      c++;
      this.items = [...this.items, ...[service]];
    });
    this.refreshComponent();
  }
  settings = {
    hideHeader: false,
    hideSubHeader: true,
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
      count: {
        title: 'N°',
        type: 'number',
      },
      code: {
        title: 'Code',
        type: 'custom',
        renderComponent: SelectRenderComponent,
        valuePrepareFunction: (cell, row) => {
          return {
            textField: 'code',
            data: this.data,
            filtrageArgs: this.filtrageArgs,
            instance: new BordPolis(),
          };
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: BordPolis_purchases) => {
            if (row) {
              this.replaceRow(row);
            }
          });
        },
        width: '130px',
      },
      type: {
        title: 'Type',
        type: 'custom',
        renderComponent: SelectRenderComponent,
        valuePrepareFunction: (cell, row) => {
          return {
            textField: 'type',
            data: this.data,
            filtrageArgs: this.filtrageArgs,
            instance: new BordPolis(),
          };
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: BordPolis_purchases) => {
            if (row) {
              this.replaceRow(row);
            }
          });
        },
        width: '130px',
      },
      outil: {
        title: 'Outil',
        type: 'custom',
        renderComponent: SelectRenderComponent,
        valuePrepareFunction: (cell, row) => {
          return {
            textField: 'outil',
            data: this.data,
            filtrageArgs: this.filtrageArgs,
            instance: new BordPolis(),
          };
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: BordPolis_purchases) => {
            if (row) {
              this.replaceRow(row);
            }
          });
        },
        width: '130px',
      },
      libelle: {
        title: 'Libellé',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return row.item.libelle;
        },
      },
      Mat_Premiere_Code: {
        title: 'Verre',
        type: 'string',
      },
      Mat_Premiere_Count: {
        title: 'Verre N°',
        type: 'string',
      },

      prix_default: {
        title: 'P.U',
        type: 'custom',
        renderComponent: InputPriceRenderComponent,
        valuePrepareFunction: (cell, row) => {
          return 'prix_default';
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: BordPolis_purchases) => {
            this.replaceRow(row);
          });
        },
      },
      quantity: {
        title: 'Quantité',
        type: 'custom',
        renderComponent: InputRenderComponent,
        valuePrepareFunction: (cell, row) => {
          return 'quantity';
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: BordPolis_purchases) => {
            this.replaceRow(row);
          });
        },
      },
      total_purchase: {
        title: 'Montant total HT',
        type: 'number',
      },
      companie: {
        title: 'société',
        type: 'custom',
        renderComponent: UniSelectRenderComponent,
        valuePrepareFunction: (cell, row: BordPolis_purchases) => {
          return row.companie;
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: BordPolis_purchases) => {
            this.replaceRow(row);
          });
        },
      },
    },
  };

  constructor(MockService: BordPolisMockService) {
    super(MockService);
    this.title = 'Bord Polis';
  }
}
