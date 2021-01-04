import { Component } from '@angular/core';
import { InputRenderComponent } from '../../input-render-component/input-render.component';
import { SelectRenderComponent } from '../../for-select-render-component/select-render.component';
import { UniSelectRenderComponent } from '../../select-render-component/uni-select-render.component';
import { Aluminium } from '../../../../../../../../../libs/core/product/src/lib/models/service.model';
import { AluminiumMockService } from '@TanglassCore/mock/produit/service/aluminium.mock.service';
import { Aluminium_purchases } from '@TanglassCore/models/ventes/customerPurchases/service_purchases.model';
import { BaseServiceComponent } from './base-service.component';
import { InputPriceRenderComponent } from '../../input-render-component/input-price-render.component';
@Component({
  selector: 'ngx-aluminium',
  templateUrl: './base-service.component.html',
  styleUrls: ['./base-service.component.scss'],
})
export class AluminiumComponent extends BaseServiceComponent<Aluminium> {
  filtrageArgs = ['code'];
  items: Aluminium_purchases[] = [];
  addAluminium(selectedMatierePremiere) {
    let c = this.items.length;
    selectedMatierePremiere.forEach((element) => {
      let service = new Aluminium_purchases();
      service.count = c + 1;
      c++;
      this.assignKnownValues(service, element);
      this.items = [...this.items, ...[service]];
    });
    this.refreshComponent();
    console.log('AluminiumComponent');
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
            instance: new Aluminium(),
          };
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: Aluminium_purchases) => {
            this.replaceRow(row);
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
          instance.emitRow.subscribe((row: Aluminium_purchases) => {
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
          instance.emitRow.subscribe((row: Aluminium_purchases) => {
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
        valuePrepareFunction: (cell, row: Aluminium_purchases) => {
          return row.companie;
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: Aluminium_purchases) => {
            this.replaceRow(row);
          });
        },
      },
    },
  };

  constructor(MockService: AluminiumMockService) {
    super(MockService);
    this.title = 'Aluminium';
  }
}
