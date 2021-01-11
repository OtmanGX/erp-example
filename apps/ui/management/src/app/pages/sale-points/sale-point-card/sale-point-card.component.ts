import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';

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
  data: any;
  passedData: any;

  constructor(
    private store: Store<AppState>,
    private location: Location) {
      this.id = (<any>location.getState()).id;
      this.passedData = [
        {label: 'Nom', value: this.data?.name},
        {label: 'Adresse', value: this.data?.address},
        {label: 'E-mail', value: this.data?.email},
        {label: 'Téléphone', value: this.data?.phone},
        {label: 'Les profiles d\'utilisateurs', value: ''},
      ];
  }

  ngOnInit(): void {
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
