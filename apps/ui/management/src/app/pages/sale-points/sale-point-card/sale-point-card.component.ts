import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import * as SalePointActions from '@TanglassStore/management/lib/actions/salePoint.actions';
import * as SalePointSelectors from '@TanglassStore/management/lib/selectors/sale-point.selectors';
@Component({
  selector: 'ngx-sale-point-card',
  templateUrl: './sale-point-card.component.html',
  styleUrls: ['./sale-point-card.component.scss']
})
export class SalePointCardComponent implements OnInit {
  title = "Point de vente";
  gap = "50px";
  id: string;
  step = null;
  data = this.store.select(SalePointSelectors.getSelectedSalePoint);
  passedData: any;

  constructor(
    private store: Store<AppState>,
    private location: Location) {
      this.id = (<any>this.location.getState()).id;

  }

  ngOnInit(): void {
    this.store.dispatch(SalePointActions.loadSalePointById({id: this.id}));
    this.data.subscribe( data => {
      this.passedData = [
        {label: 'Nom', value: data?.name},
        {label: 'Adresse', value: data?.address},
        {label: 'E-mail', value: data?.email},
        {label: 'Téléphone', value: data?.phone},
        {label: 'Les profiles d\'utilisateurs', value: ''},
      ];
    })
  }

  // Steps

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
