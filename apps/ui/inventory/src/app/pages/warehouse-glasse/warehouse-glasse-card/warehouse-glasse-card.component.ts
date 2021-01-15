import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';

@Component({
  selector: 'ngx-warehouse-glasse-card',
  templateUrl: './warehouse-glasse-card.component.html',
  styleUrls: ['./warehouse-glasse-card.component.scss']
})
export class WarehouseGlasseCardComponent implements OnInit {
  title = "Entrepôt de verre";
  gap = "50px";
  id: string;
  step = null;
  data: any;
  passedData: any;
  warehouseData: any;
  glassData: any;
  constructor(private location: Location,
             private store: Store<AppState>) {

    this.id = (<any>location.getState()).id;
    this.data.subscribe( data => {
      this.passedData = [
        {label: 'Quantité', value: data?.quantity},
      ];

      this.glassData = [
        {label: 'Type', value: data?.glass?.type},
        {label: 'Color', value: data?.glass?.color},
        {label: 'Epaisseur', value: data?.glass?.thickness},
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
