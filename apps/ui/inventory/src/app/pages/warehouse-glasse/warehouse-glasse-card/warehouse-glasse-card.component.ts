import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Observable } from 'rxjs';
import { GlassWarehouse } from '@tanglass-erp/core/inventory';

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
  data$: Observable<GlassWarehouse>;
  passedData: any;
  glassData: any;
  constructor(private location: Location,
             private store: Store<AppState>) {

    this.id = (<any>location.getState()).id;
    this.data$.subscribe( data => {
      this.passedData = [
        // {label: 'Type', value: data?.warehouse?.type},
        {label: 'Nom de la société', value: data?.warehouse?.company?.name},
        {label: 'Nom du point de vente', value: data?.warehouse?.salesPoint?.name},
        {label: 'Quantité', value: data?.quantity},
      ];

      this.glassData = [
        {label: 'Type', value: data?.substance?.glass?.type},
        {label: 'Color', value: data?.substance?.glass?.color},
        {label: 'Epaisseur', value: data?.substance?.glass?.thickness},
      ];
    });
  }

  ngOnInit(): void {
  }

}
