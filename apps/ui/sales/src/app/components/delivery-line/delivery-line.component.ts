import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeliveryLine, Product_draft } from '@tanglass-erp/core/sales';
import { Column, ColumnType, TableComponent } from '@tanglass-erp/material';
import { DeliveryFacade } from '@tanglass-erp/store/sales';

@Component({
  selector: 'ngx-delivery-line',
  templateUrl: './delivery-line.component.html',
  styleUrls: ['./delivery-line.component.scss'],
})
export class DeliveryLineComponent implements OnInit {
  @ViewChild('table', { read: TableComponent }) table: TableComponent<
    Product_draft
  >;
  _data: Product_draft[] = [];
  @Input() update: boolean = false;

  @Input()
  public set data(data) {
    this._data = data;
    if (!this.update)
    {
      this.deliveryLines = data.map((elem) => ({
        product_draft_id: elem.id,
        product: {
          label: elem.label,
          type: elem.type,
          product_code: elem.product_code,
          price: elem.price,
          quantity: elem.count ?? elem.quantity,
          delivered: elem?.delivered,
        },
        delivered: 0,
        amount: 0,
        toDeliver: 0,
      }));
      console.log('fresh');
    }  else
      this.deliveryLines = [
        ...this.deliveryLines.map((e) => ({ ...e, toDeliver: 0 })),
      ];
    this.table;
  }

  // input
  clear: boolean = false;
  public get data() {
    return this._data;
  }

  @Input()
  public deliveryLines: Array<DeliveryLine> = [];
  displayedColumns: Array<Column> = [
    { title: 'Article', key: 'product.label', type: ColumnType.normal },
    {
      title: 'Quantité',
      key: 'delivered',
      type: ColumnType.template,
      withRow: true,
    },
    {
      title: 'Quantité commandé',
      key: 'product.quantity',
      type: ColumnType.normal,
    },
    {
      title: 'Total livrée',
      key: 'product.delivered',
      type: ColumnType.template,
    },
    { title: 'Reste', key: 'rest', type: ColumnType.template, withRow: true },
    { title: 'Prix unitaire', key: 'product.price', type: ColumnType.normal },
    {
      title: 'Montant',
      key: 'amount',
      type: ColumnType.normal,
    },
  ];

  deliveryAmount$ = this.facade.deliveryAmount$;

  constructor(private facade: DeliveryFacade) {}

  ngOnInit(): void {
    this.facade.calculateAmounts(this.deliveryLines);
  }

  switchReturned(obj, newValue: boolean) {
    obj.isReturned = newValue;
  }

  setMax(input: HTMLInputElement, row) {
    row.toDeliver =
      row.toDeliver !== parseFloat(input.max) ? parseFloat(input.max) : 0;
    this.calculateAmount(row);
  }

  calculateAmount(item: DeliveryLine) {
    const delivery_line = this.deliveryLines.find(e=> e.product_draft_id === item.product_draft_id);
    delivery_line.amount = (item.delivered + item.toDeliver) * item.product.price;
    this.facade.calculateAmounts(this.deliveryLines);
  }

  public adaptValue(): DeliveryLine[] {
    const returnedValue = this.deliveryLines.map((e) => {
      const { toDeliver, product, ...wanted } = {
        ...e,
        delivered: e.toDeliver ?? 0,
      };
      return wanted;
    });
    return returnedValue;
  }
}
