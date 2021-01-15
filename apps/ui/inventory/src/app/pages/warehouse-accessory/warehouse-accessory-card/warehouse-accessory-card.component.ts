import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';

@Component({
  selector: 'ngx-warehouse-accessory-card',
  templateUrl: './warehouse-accessory-card.component.html',
  styleUrls: ['./warehouse-accessory-card.component.scss']
})
export class WarehouseAccessoryCardComponent implements OnInit {
  title = "Entrepôt d'accessoires";
  gap = "50px";
  id: string;
  step = null;
  data: any;
  passedData: any;
  accessoryData: any;
  warehouseData: any;
  constructor(private location: Location,
              private store: Store<AppState>) {

    this.id = (<any>location.getState()).id;
    this.data.subscribe( data => {
      this.passedData = [
        {label: 'Quantité', value: data?.quantity},
      ];

      this.accessoryData = [
        {label: 'Nom', value: data?.accessory?.name},
        {label: 'Type', value: data?.accessory?.type},
        {label: 'Quota', value: data?.accessory?.quota},
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
