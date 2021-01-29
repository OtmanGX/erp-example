import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { DetailedAccessory } from "@tanglass-erp/core/product";
import * as AccessoryActions from '@TanglassStore/product/lib/actions/accessory.actions';
import { getSelectedAccessory } from '@TanglassStore/product/lib/selectors/accessory.selectors';
@Component({
  selector: 'ngx-accessory-card',
  templateUrl: './accessory-card.component.html',
  styleUrls: ['./accessory-card.component.scss']
})
export class AccessoryCardComponent implements OnInit {
  title = "Accessoire/Système Apparent";
  id: string;
  //data$: any = of(null);
  data$ = this.store.select(getSelectedAccessory);

  passedData: any;

  constructor(private store: Store<AppState>,
              private location: Location) {
    this.id = (<any>this.location.getState()).id;
  }

  ngOnInit(): void {
    // this.store.dispatch();
    this.store.dispatch(AccessoryActions.loadAccessoryById({id: this.id}));

    this.data$.subscribe(value => {
      this.passedData = [
        {label: 'Code', value: value?.product.code},
        {label: 'Désignation', value: value?.product.label},
        {label: 'Unité', value: value?.product.unit},
        {label: 'Type', value: value?.category},
        {label: 'Quota', value: value?.quota},
        {label: 'Prix', value: value?.product?.price},
        {label: 'Prix min', value: value?.product?.priceMin},
        {label: 'Prix max', value: value?.product?.priceMax},
        {label: 'Sociétés', value: value?.product?.companies, type: 'chips'},
      ];
    });
  }

}
