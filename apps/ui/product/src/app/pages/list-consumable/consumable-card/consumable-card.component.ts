import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'ngx-consumable-card',
  templateUrl: './consumable-card.component.html',
  styleUrls: ['./consumable-card.component.scss']
})
export class ConsumableCardComponent implements OnInit {
  title = "Consommable";
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
        {label: 'Code', value: value?.code},
        {label: 'Type', value: value?.type},
        {label: 'Désignation', value: value?.label},
        {label: 'Prix', value: value?.product?.price},
        {label: 'Prix min', value: value?.product?.price_min},
        {label: 'Prix max', value: value?.product?.price_max},
        {label: 'Sociétés', value: value?.product?.companies, type: 'chips'},
      ];
    });
  }
}
