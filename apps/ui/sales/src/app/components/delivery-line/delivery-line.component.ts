import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeliveryLine, Product_draft } from '@tanglass-erp/core/sales';
import { Column, ColumnType, TableComponent } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-delivery-line',
  templateUrl: './delivery-line.component.html',
  styleUrls: ['./delivery-line.component.scss'],
})
export class DeliveryLineComponent implements OnInit {
  @ViewChild('table', {read: TableComponent}) table: TableComponent<Product_draft>;
  _data: Product_draft[] = [];
  @Input() update: boolean = false;
  @Input()
  public set data(data) {
    this._data = data;
    if (!this.update)
      this.deliveryLines = data.map((elem) => ({
        product: elem.id,
        quantity: elem.quantity - (elem?.delivered || 0),
        delivered: 0,
        unit_price: elem.price,
        amount: 0,
        toDeliver: 0,
        product_label: elem.label,
      }));
    else this.deliveryLines = [
      ...this.deliveryLines.map(e => ({...e, toDeliver: 0}))
    ]
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
    { title: 'Article', key: 'product_label', type: ColumnType.normal },
    { title: 'Livrer', key: 'qte', type: ColumnType.template, withRow: true },
    { title: 'Reste', key: 'rest', type: ColumnType.template, withRow: true },
    { title: 'Déja Livré', key: 'delivered', type: ColumnType.template },
    {
      title: 'Montant',
      key: 'amount',
      type: ColumnType.normal
    },
    { title: 'Etat de stock', key: 'stock_state', type: ColumnType.template },
  ];
  constructor() {}

  ngOnInit(): void {

  }


  switchReturned(obj, newValue: boolean) {
    obj.isReturned = newValue;
  }

  public submitValue(): DeliveryLine[] {
    const returnedValue = this.deliveryLines.map((e) => {
      const { toDeliver, ...wanted } = {
        ...e,
        delivered: e.delivered + e.toDeliver ?? 0,
      };
      return wanted;
    });
    return returnedValue;
  }

  setMax(input: HTMLInputElement, row) {
    row.toDeliver = row.toDeliver !== parseFloat(input.max) ? parseFloat(input.max): 0;
    this.calculateAmount(row);
  }

  calculateAmount(item: DeliveryLine) {
    item.amount = (item.delivered+item.toDeliver)*item.unit_price
  }
}
