import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import * as ConsumableActions from '@TanglassStore/product/lib/actions/consumable.actions';
import { getSelectedConsumable } from '@TanglassStore/product/lib/selectors/consumable.selectors';

@Component({
  selector: 'ngx-consumable-card',
  templateUrl: './consumable-card.component.html',
  styleUrls: ['./consumable-card.component.scss']
})
export class ConsumableCardComponent implements OnInit {
  title = "Consommable";
  id: string;
 // data$: any = of(null);
  passedData: any;
  data$ = this.store.select(getSelectedConsumable);

  constructor(private store: Store<AppState>,
              private location: Location) {
    this.id = (<any>this.location.getState()).id;
  }

  ngOnInit(): void {
    // this.store.dispatch();
    this.store.dispatch(ConsumableActions.loadConsumableById({id: this.id}));

    this.data$.subscribe(value => {
      this.passedData = [
        {label: 'Code', value: value?.product.code},
        {label: 'Type', value: value?.category},
        {label: 'Désignation', value: value?.product.label},
        {label: 'Unité', value: value?.product.unit},
        {label: 'Prix', value: value?.product?.price},
        {label: 'Prix min', value: value?.product?.priceMin},
        {label: 'Prix max', value: value?.product?.priceMax},
        {label: 'Sociétés', value: value?.product?.companies, type: 'chips'},
      ];
    });
  }
}
