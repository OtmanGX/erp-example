import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Observable } from 'rxjs';
import { AccessoryWarehouse } from '@tanglass-erp/store/inventory';


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
  data$: Observable<AccessoryWarehouse>;
  passedData: any;
  accessoryData: any;
  constructor(private location: Location,
              private store: Store<AppState>) {

    this.id = (<any>location.getState()).id;
    this.data$.subscribe( data => {
      this.passedData = [
        {label: 'Nom de la société', value: data?.warehouse?.company?.name},
        {label: 'Nom du point de vente', value: data?.warehouse?.salesPoint?.name},
        {label: 'Quantité', value: data?.quantity},
      ];

      this.accessoryData = [
        {label: 'Catégorie', value: data?.substance?.accessory.category},
        {label: 'Code', value: data?.substance?.productAccessory.code},
        {label: 'Désignation', value: data?.substance?.productAccessory.label},
        {label: 'Prix', value: data?.substance?.productAccessory.price},
        {label: 'Unité', value: data?.substance?.productAccessory.unit},
      ];
    });
  }

  ngOnInit(): void {
  }

}
