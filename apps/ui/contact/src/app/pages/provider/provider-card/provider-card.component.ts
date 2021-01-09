import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.scss']
})
export class ProviderCardComponent implements OnInit {
  title = "Fournisseur";
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
      {label: 'Note', value: this.data?.note},
      {label: 'Téléphone', value: this.data?.phone},
      {label: 'E-mail', value: this.data?.mail},
    ];
  }

  ngOnInit(): void {
  }

}
