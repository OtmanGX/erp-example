import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { DetailedAccessory } from "@TanglassStore/product/index";
import * as AccessoryActions from '@TanglassStore/product/lib/actions/accessory.actions';
import { getSelectedAccessory } from '@TanglassStore/product/lib/selectors/accessory.selectors';
import { ModelCardComponent } from '@tanglass-erp/material';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ngx-accessory-card',
  templateUrl: './accessory-card.component.html',
  styleUrls: ['./accessory-card.component.scss']
})
export class AccessoryCardComponent extends ModelCardComponent {
  title = "Accessoire/Système Apparent";
  data$ = this.store.select(getSelectedAccessory)
    .pipe(takeUntil(this._onDestroy));

  constructor(private store: Store<AppState>,
              public route: ActivatedRoute) {
    super(route);
  }

  dispatch(): void {
    this.store.dispatch(AccessoryActions.loadAccessoryById({id: this.id}));
  }
  passData(data: DetailedAccessory) {
    return [
      {label: 'Code', value: data?.product.code},
      {label: 'Désignation', value: data?.product.label},
      {label: 'Unité', value: data?.product.unit},
      {label: 'Type', value: data?.category},
      {label: 'Quota', value: data?.quota},
      {label: 'Prix', value: data?.product?.price},
      {label: 'Prix min', value: data?.product?.priceMin},
      {label: 'Prix max', value: data?.product?.priceMax},
      {label: 'Sociétés', value: data?.product?.companies.map(item => item.name), type: 'chips'},
    ];
  }

  afterComplete() {}


}
