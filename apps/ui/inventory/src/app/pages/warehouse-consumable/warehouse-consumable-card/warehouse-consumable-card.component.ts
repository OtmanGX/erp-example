import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Observable } from 'rxjs';
import { ConsumableWarehouse } from '@tanglass-erp/core/inventory';

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
  data$: Observable<ConsumableWarehouse>;
  passedData: any;
  constructor(private location: Location,
              private store: Store<AppState>) {

    this.id = (<any>location.getState()).id;
    this.data$.subscribe( data => {
      this.passedData = [
        {label: 'Type', value: data?.warehouse?.type},
        {label: 'Nom de la société', value: data?.warehouse?.company?.name},
        {label: 'Nom du point de vente', value: data?.warehouse?.salesPoint?.name},
        {label: 'Catégorie du consommable', value: data?.substance.consomable?.category},
        {label: 'Quantité', value: data?.quantity},
      ];
    });
  }

  ngOnInit(): void {
  }

}
