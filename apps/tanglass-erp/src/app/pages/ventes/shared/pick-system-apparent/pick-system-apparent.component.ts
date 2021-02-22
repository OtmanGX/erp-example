import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SystemApparentMockService } from '@TanglassCore/mock/produit/systemApparent.mock.service';
import { SystemApparent } from '@TanglassCore/models/produit/systemApparent.model';
import { SystemApparent_purchases } from '@TanglassCore/models/ventes/customerPurchases/systemApparent_purchases.model';
import { SelectRenderComponent } from '../for-select-render-component/select-render.component';
import { LocalDataSource } from 'ng2-smart-table';
import { InputRenderComponent } from '../input-render-component/input-render.component';
import { InputPriceRenderComponent } from '../input-render-component/input-price-render.component';
import { UniSelectRenderComponent } from '../select-render-component/uni-select-render.component';
import { InputDimensionsRenderComponent } from '../input-render-dimensions/input-render-dimensions.component';

@Component({
  selector: 'ngx-pick-system-apparent',
  templateUrl: './pick-system-apparent.component.html',
  styleUrls: ['./pick-system-apparent.component.scss'],
})
export class PickSystemApparentComponent implements OnInit {
  @Output() sendSystemApparent = new EventEmitter<any>();
  @Input() disabled: boolean;

  data: SystemApparent[];
  items: SystemApparent_purchases[] = [];
  filtrageArgs = ['code'];
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private readonly systemApparentService: SystemApparentMockService
  ) {}

  ngOnInit(): void {
    if (!this.disabled) {
      this.getAllSystemApparents();
    }
  }
  ngOnChanges(): void {
    if (!this.disabled) {
      this.getAllSystemApparents();
    }
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
      count: {
        title: 'N°',
        type: 'string',
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
            instance: new SystemApparent(),
          };
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: SystemApparent_purchases) => {
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
      unit: {
        title: 'Unité',
        type: 'custom',
        renderComponent: InputRenderComponent,
        valuePrepareFunction: (cell, row) => {
          return 'unit';
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: SystemApparent_purchases) => {
            row.setQuantity();
            this.replaceRow(row);
          });
        },
      },
      quantity: {
        title: 'Quantité',
        type: 'custom',
        renderComponent: InputDimensionsRenderComponent,
        valuePrepareFunction: (cell, row) => {
          return 'quantity';
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row) => {
            this.replaceRow(row);
          });
        },
      },
      prix_default: {
        title: 'P.U',
        type: 'custom',
        renderComponent: InputPriceRenderComponent,
        valuePrepareFunction: (cell, row) => {
          return 'prix_default';
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: SystemApparent_purchases) => {
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
        valuePrepareFunction: (cell, row: SystemApparent_purchases) => {
          return row.companie;
        },
        onComponentInitFunction: (instance) => {
          instance.emitRow.subscribe((row: SystemApparent_purchases) => {
            this.replaceRow(row);
          });
        },
      },
    },
  };
  settingsAsFiche = {
    hideHeader: false,
    hideSubHeader: true,
    actions: false,
    noDataMessage: ' Pas de données',
    columns: {
      count: {
        title: 'N°',
        type: 'string',
      },
      code: {
        title: 'Code',
        type: 'html',
        valuePrepareFunction: (cell, row: SystemApparent_purchases) => {
          return row.item.code;
        },
      },
      libelle: {
        title: 'Libellé',
        type: 'html',
        valuePrepareFunction: (cell, row: SystemApparent_purchases) => {
          return row.item.libelle;
        },
      },
      quantity: {
        title: 'Quantité',
        type: 'html',
        valuePrepareFunction: (cell, row: SystemApparent_purchases) => {
          return row.quantity;
        },
      },
      prix_default: {
        title: 'P.U',
        type: 'html',
        valuePrepareFunction: (cell, row: SystemApparent_purchases) => {
          return row.item.prix_default;
        },
      },

      total_purchase: {
        title: 'Montant HT',
        type: 'html',
        valuePrepareFunction: (cell, row: SystemApparent_purchases) => {
          return row.total_purchase;
        },
      },
      companie: {
        title: 'société',
        type: 'html',
        valuePrepareFunction: (cell, row: SystemApparent_purchases) => {
          return row.companie;
        },
      },
    },
  };

  replaceRow(row: SystemApparent_purchases) {
    this.assignTotalPurchase(row);
    this.items[row.count - 1] = row;
    this.source.load(this.items);
    this.sendSystemApparent.emit(this.items);
  }
  addSystemApparent() {
    let systemeApparent = new SystemApparent_purchases();
    systemeApparent.setQuantity();
    systemeApparent.count = this.items.length + 1;
    this.items = [...this.items, ...[systemeApparent]];
    this.source.load(this.items);
  }
  getAllSystemApparents(): void {
    this.systemApparentService.getAll().subscribe({
      next: (accessoires) => {
        this.data = accessoires;
      },
    });
  }

  assignTotalPurchase(row: SystemApparent_purchases) {
    row.total_purchase = row.quantity * row.item.prix_default;
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
    this.items.splice(event.data.count - 1, 1);
    let count = 0;
    for (let item of this.items) {
      item.count = count + 1;
      count++;
    }
    this.sendSystemApparent.emit(this.items);
  }
}