import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit {
  title = "Client";
  gap = "50px";
  id: string;
  step = null;
  data: any;
  passedData: any;

  constructor(
    private store: Store<AppState>,
    private location: Location
  ) {
    this.id = (<any>location.getState()).id;
    this.passedData = [
      {label: 'Nom', value: this.data?.name},
      {label: 'Code', value: this.data?.code},
      {label: 'ICE', value: this.data?.ICE},
      {label: 'IF', value: this.data?.IF},
      {label: 'E-mail', value: this.data?.mail},
      {label: 'Téléphone', value: this.data?.phone},
      {label: 'Note', value: this.data?.note},
      {label: 'FAX', value: this.data?.FAX},
      {label: 'Site web', value: this.data?.website},
    ];
  }

  ngOnInit(): void {
  }

}
