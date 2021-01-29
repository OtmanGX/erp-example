import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { DetailedGlass } from "@tanglass-erp/core/product";
import * as GlassActions from '@TanglassStore/product/lib/actions/glass.actions';
import { getSelectedGlass } from '@TanglassStore/product/lib/selectors/glass.selectors';

@Component({
  selector: 'ngx-glass-card',
  templateUrl: './glass-card.component.html',
  styleUrls: ['./glass-card.component.scss']
})
export class GlassCardComponent implements OnInit {
  title = "Verre";
  id: string;
  //data$: any = of(null);
  data$ = this.store.select(getSelectedGlass);

  passedData: any;

  constructor(private store: Store<AppState>,
    private location: Location) {
    this.id = (<any>this.location.getState()).id;
  }

  ngOnInit(): void {
    // this.store.dispatch();
    this.store.dispatch(GlassActions.loadGlassById({ id: this.id }));

    this.data$.subscribe(value => {
      this.passedData = [
        { label: 'Code', value: value?.product.code },
        { label: 'Type', value: value?.type },
        { label: 'Couleur', value: value?.color },
        { label: 'Epaisseur', value: value?.thickness },
        { label: 'Désignation', value: value?.product.label },
        { label: 'Unité', value: value?.product.unit },
        { label: 'Prix', value: value?.product?.price },
        { label: 'Prix min', value: value?.product?.priceMin },
        { label: 'Prix max', value: value?.product?.priceMax },
        { label: 'Sociétés', value: value?.product?.companies, type: 'chips' },
      ];
    });
  }
}
