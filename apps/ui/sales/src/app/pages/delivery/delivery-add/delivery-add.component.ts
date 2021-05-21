import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '@tanglass-erp/material';
import { regConfigDelivery } from '@TanglassUi/sales/utils/forms';
import { ColumnType, Column } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-delivery-add',
  templateUrl: './delivery-add.component.html',
  styleUrls: ['./delivery-add.component.scss']
})
export class DeliveryAddComponent implements OnInit {

  regConfig: FieldConfig[];
  data: Array<any> = [
    { name: 'article1', rest: 2, delivered: 4, stock_state: false },
    { name: 'article2', rest: 0, delivered: 5, stock_state: true },
  ];
  displayedColumns: Array<Column> = [
    {title: 'Article', key: 'name', type: ColumnType.normal},
    {title: 'Demande', key: 'qte', type: ColumnType.template, withRow: true},
    {title: 'Reste', key: 'rest', type: ColumnType.template},
    {title: 'Livré', key: 'delivered', type: ColumnType.template},
    {title: 'Etat de stock', key: 'stock_state', type: ColumnType.template},
  ];

  commandData = [
    {
      label: "Infos",
      isToolbar: false,
      cols: 2,
      icons: [],
      data : [
        { label: 'N° Commande', value: null },
        { label: 'Client', value: null },
        { label: 'Date de la commande', value: null },
        { label: 'Total', value: null },
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.regConfig = regConfigDelivery();
  }

  submit(value: any) {
    console.log(value);
  }
}
