import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Consumable } from '../../../../../../../../../libs/core/product/src/lib/models/consommable.model';
import { BaseMockService } from '@TanglassCore/mock/shared/base.mock.service';
import { Consommable_purchases } from '@TanglassCore/models/ventes/customerPurchases/consommable_purchases.model';

@Component({
  selector: 'ngx-base-consommable',
  templateUrl: './base-consommable.component.html',
  styleUrls: ['./base-consommable.component.scss'],
})
export class BaseConsommableComponent<T extends Consumable> implements OnInit {
  @Output() sendItems = new EventEmitter<any>();
  data: T[] = [];
  items;
  title: string;
  companie: string;
  settings: {};
  filtrageArgs: string[];
  source = new LocalDataSource();
  disabled: boolean = false;

  constructor(private BaseService: BaseMockService<T>) {}

  ngOnInit(): void {
    if (!this.disabled) {
      this.getAll();
    }
  }
  getAll(): void {
    this.BaseService.getAll().subscribe({
      next: (data) => {
        this.data = data;
      },
    });
  }
  replaceRow(row: Consommable_purchases) {
    this.assignTotalPurchase(row);
    this.items[row.count - 1] = row;
    this.refreshComponent();
  }
  assignKnownValues(consommable: Consommable_purchases, element) {
    consommable.Mat_Premiere_Code = element.item.code;
    consommable.Mat_Premiere_Count = element.count;
  }
  refreshComponent() {
    this.sendItems.emit(this.items);
    this.source.load(this.items);
  }
  assignTotalPurchase(row: Consommable_purchases) {
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
    this.sendItems.emit(this.items);
  }
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
        valuePrepareFunction: (cell, row: Consommable_purchases) => {
          return row.item.code;
        },
      },
      libelle: {
        title: 'Libellé',
        type: 'html',
        valuePrepareFunction: (cell, row: Consommable_purchases) => {
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

      quantity: {
        title: 'Quantité',
        type: 'number',
      },
      prix_default: {
        title: 'P.U',
        type: 'html',
        valuePrepareFunction: (cell, row: Consommable_purchases) => {
          return row.item.prix_default;
        },
      },
      total_purchase: {
        title: 'Montant HT',
        type: 'number',
      },
      companie: {
        title: 'société',
        type: 'number',
      },
    },
  };
}
