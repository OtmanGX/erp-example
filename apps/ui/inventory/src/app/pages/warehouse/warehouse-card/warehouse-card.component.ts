import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Observable } from 'rxjs';
import { Warehouse } from '@TanglassStore/inventory/index';

@Component({
  selector: 'ngx-sale-point-card',
  templateUrl: './warehouse-card.component.html',
  styleUrls: ['./warehouse-card.component.scss']
})
export class WarehouseCardComponent implements OnInit {
  title = "Entrepôt";
  gap = "50px";
  id: string;
  step = null;
  data: Observable<Warehouse>;
  passedData: any;
  constructor(private location: Location,
              private store: Store<AppState>) {

    this.id = (<any>location.getState()).id;
    this.data.subscribe( data => {
      this.passedData = [
        // {label: 'Type', value: data?.type},
        {label: 'Nom de la société', value: data?.company?.name},
        {label: 'Nom du point de vente', value: data?.salesPoint?.name},
      ];
    });
  }

  ngOnInit(): void {
  }

}
