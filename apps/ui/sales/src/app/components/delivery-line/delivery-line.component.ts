import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeliveryLine, Product_draft } from '@tanglass-erp/core/sales';
import { Column, ColumnType, TableComponent } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-delivery-line',
  templateUrl: './delivery-line.component.html',
  styleUrls: ['./delivery-line.component.scss'],
})
export class DeliveryLineComponent {
  @ViewChild('table', {read: TableComponent}) table: TableComponent<Product_draft>;
  _data: Product_draft[] = [];
  @Input() update: boolean = false;
  @Input()
  public set data(data) {
    this._data = data;
    if (!this.update)
      this.deliveryLines = data.map((elem) => ({
        product_draft_id: elem.id,
        product: {
          label: elem.label,
          type: elem.type,
          product_code: elem.product_code,
          price: elem.price,
          quantity: elem.quantity - (elem?.delivered || 0)
        },
        // quantity: elem.quantity - (elem?.delivered || 0),
        delivered: 0,
        amount: 0,
        toDeliver: 0,
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
    { title: 'Article', key: 'product.label', type: ColumnType.normal },
    { title: 'Livrer', key: 'qte', type: ColumnType.template, withRow: true },
    { title: 'Reste', key: 'rest', type: ColumnType.template, withRow: true },
    { title: 'Déja Livré', key: 'delivered', type: ColumnType.template },
    { title: 'Quantité', key: 'product.quantity', type: ColumnType.normal },
    { title: 'Prix unitaire', key: 'product.price', type: ColumnType.normal },
    {
      title: 'Montant',
      key: 'amount',
      type: ColumnType.normal
    }];
  constructor() {}


  switchReturned(obj, newValue: boolean) {
    obj.isReturned = newValue;
  }

  setMax(input: HTMLInputElement, row) {
    row.toDeliver = row.toDeliver !== parseFloat(input.max) ? parseFloat(input.max): 0;
    this.calculateAmount(row);
  }

  calculateAmount(item: DeliveryLine) {
    item.amount = (item.delivered+item.toDeliver)*item.product.price
  }

  public adaptValue(): DeliveryLine[] {
    const returnedValue = this.deliveryLines.map((e) => {
      const { toDeliver, product, ...wanted } = {
        ...e,
        delivered: e.delivered + e.toDeliver ?? 0,
      };
      return wanted;
    });
    return returnedValue;
  }
}
