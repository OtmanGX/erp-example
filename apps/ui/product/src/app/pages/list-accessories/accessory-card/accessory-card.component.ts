import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'ngx-accessory-card',
  templateUrl: './accessory-card.component.html',
  styleUrls: ['./accessory-card.component.scss']
})
export class AccessoryCardComponent implements OnInit {
  title = "Accessoire";
  id: string;
  data$: any = of(null);
  passedData: any;

  constructor(private store: Store<AppState>,
              private location: Location) {
    this.id = (<any>this.location.getState()).id;
  }

  ngOnInit(): void {
    // this.store.dispatch();
    this.data$.subscribe(value => {
      this.passedData = [
        {label: 'Nom', value: value?.name},
        {label: 'Type', value: value?.type},
        {label: 'Quota', value: value?.quota},
        {label: 'Prix', value: value?.product?.price},
        {label: 'Prix min', value: value?.product?.price_min},
        {label: 'Prix max', value: value?.product?.price_max},
        {label: 'Sociétés', value: value?.product?.companies, type: 'chips'},
      ];
    });
  }

}
