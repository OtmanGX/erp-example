import { Component, Input, OnInit } from '@angular/core';
import { DeliveryLine } from '@tanglass-erp/core/sales';
import { Column, ColumnType } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-delivery-line',
  templateUrl: './delivery-line.component.html',
  styleUrls: ['./delivery-line.component.scss']
})
export class DeliveryLineComponent implements OnInit {

  @Input()
  public data: Array<DeliveryLine> = [ // For testing purpose
    { product: 'article1', total: 6, delivered: 4, company: 'Tanglass', toDeliver: 0, isReturned: true },
    { product: 'article2', total: 5, delivered: 5, company: 'Glassinox', toDeliver: 0 },
  ];
  displayedColumns: Array<Column> = [
    {title: 'Article', key: 'product', type: ColumnType.normal},
    {title: 'Demande', key: 'qte', type: ColumnType.template, withRow: true},
    {title: 'Reste', key: 'rest', type: ColumnType.template, withRow: true},
    {title: 'Livré', key: 'delivered', type: ColumnType.template},
    {title: 'Société', key: 'company', type: ColumnType.normal},
    {title: 'Montant', key: 'amount', type: ColumnType.template, withRow: true },
    {title: 'Retourné ?', key: 'isReturned', type: ColumnType.template, withRow: true},
    {title: 'Etat de stock', key: 'stock_state', type: ColumnType.template},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  switchReturned(obj, newValue: boolean) {
    obj.isReturned = newValue;
  }
}
