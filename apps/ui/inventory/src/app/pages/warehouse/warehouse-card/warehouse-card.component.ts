import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Observable } from 'rxjs';

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
  data: Observable<any>;
  passedData: any;
  companyData: any;
  salePointData: any;
  constructor(private location: Location,
              private store: Store<AppState>) {

    this.id = (<any>location.getState()).id;
    this.data.subscribe( data => {
      this.passedData = [
        {label: 'Type', value: data?.type},
      ];

      this.companyData = [
        {label: 'Nom', value: data?.company?.name},
        {label: 'CNSS', value: data?.company?.CNSS},
        {label: 'ICE', value: data?.company?.ICE},
        {label: 'IF', value: data?.company?.IF},
        {label: 'RC', value: data?.company?.RC},
        {label: 'E-mail', value: data?.company?.email},
        {label: 'Téléphone', value: data?.company?.phone},
        {label: 'Site web', value: data?.company?.website},
      ];

      this.salePointData = [
        {label: 'Nom', value: data?.salePoint?.name},
        {label: 'Adresse', value: data?.salePoint?.address},
        {label: 'E-mail', value: data?.salePoint?.email},
        {label: 'Téléphone', value: data?.salePoint?.phone},
      ];
    });
  }

  ngOnInit(): void {
  }

}
