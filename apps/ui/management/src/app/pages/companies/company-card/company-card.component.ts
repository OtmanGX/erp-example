import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-sale-point-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyCardComponent implements OnInit {
  title = "Profile d'utilisateur";
  id: string;
  step = null;
  data: any;
  passedData: any;
  constructor(private store: Store<AppState>,
              private location: Location) {
      this.id = (<any>location.getState()).id;
      this.passedData = [
        {label: 'Nom', value: this.data?.name},
        {label: 'CNSS', value: this.data?.CNSS},
        {label: 'ICE', value: this.data?.ICE},
        {label: 'IF', value: this.data?.IF},
        {label: 'RC', value: this.data?.RC},
        {label: 'E-mail', value: this.data?.email},
        {label: 'Téléphone', value: this.data?.phone},
        {label: 'Site web', value: this.data?.website},
      ];
  }

  ngOnInit(): void {
  }

}
