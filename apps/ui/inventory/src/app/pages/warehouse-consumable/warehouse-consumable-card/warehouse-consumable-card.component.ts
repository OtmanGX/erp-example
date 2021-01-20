import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';

@Component({
  selector: 'ngx-warehouse-consumable-card',
  templateUrl: './warehouse-consumable-card.component.html',
  styleUrls: ['./warehouse-consumable-card.component.scss']
})
export class WarehouseConsumableCardComponent implements OnInit {
  title = "Entrepôt consommable";
  gap = "50px";
  id: string;
  step = null;
  data: any;
  passedData: any;
  warehouseData: any;
  consumableData: any;
  constructor(private location: Location,
              private store: Store<AppState>) {

    this.id = (<any>location.getState()).id;
    this.data.subscribe( data => {
      this.passedData = [
        {label: 'Quantité', value: data?.quantity},
      ];

      this.consumableData = [
        {label: 'Libellé', value: data?.consumable?.name},
        {label: 'Code', value: data?.consumable?.code},
        {label: 'Type', value: data?.consumable?.type},
      ];

      this.warehouseData = [
        {label: 'Type', value: data?.type},
        {label: 'Société', value: data?.company?.name},
        {label: 'Point de vente', value: data?.salePoint?.name},
      ];
    });
  }

  ngOnInit(): void {
  }

}
