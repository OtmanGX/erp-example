import { Component } from '@angular/core';
import { InputRenderComponent } from '../../input-render-component/input-render.component';
import { SelectRenderComponent } from '../../for-select-render-component/select-render.component';
import { UniSelectRenderComponent } from '../../select-render-component/uni-select-render.component';
import { Consommable } from '@TanglassCore/models/produit/consommable.model';
import { Film_purchases } from '@TanglassCore/models/ventes/customerPurchases/consommable_purchases.model';
import { BaseConsommableComponent } from './base-consommable.component';
import { InputPriceRenderComponent } from '../../input-render-component/input-price-render.component';
import { StadipMockService } from '@TanglassCore/mock/produit/consommable/baguette.mock.service';
@Component({
  selector: 'ngx-film',
  templateUrl: './base-consommable.component.html',
  styleUrls: ['./base-consommable.component.scss'],
})
export class FilmComponent extends BaseConsommableComponent<Consommable> {
  filtrageArgs = ['code'];
  items: Film_purchases[] = [];
  addFilm(selectedMatierePremiere) {
    let c = this.items.length;
    selectedMatierePremiere.forEach((element) => {
      let consommable = new Film_purchases();
      consommable.setQuantity(element.largeur, element.hauteur, element.pieces);
      consommable.count = c + 1;
      c++;
      this.assignKnownValues(consommable, element);
      this.items = [...this.items, ...[consommable]];
    });
    this.refreshComponent();
  }
  settings = {
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
            instance: new Consommable(),
          };
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: Film_purchases) => {
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
          instance.emitRow.subscribe((row: Film_purchases) => {
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
          instance.emitRow.subscribe((row: Film_purchases) => {
            this.replaceRow(row);
          });
        },
      },
      total_purchase: {
        title: 'Montant HT',
        type: 'number',
      },
      companie: {
        title: 'société',
        type: 'custom',
        renderComponent: UniSelectRenderComponent,
        valuePrepareFunction: (cell, row: Film_purchases) => {
          return row.companie;
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: Film_purchases) => {
            this.replaceRow(row);
          });
        },
      },
    },
  };
  constructor(MockService: StadipMockService) {
    super(MockService);
    this.title = 'Films ';
  }
}
