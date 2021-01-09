import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-sale-point-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employeecard.component.scss']
})
export class EmployeeCardComponent implements OnInit {
  title = "Profile d'utilisateur";
  id: string;
  step = null;
  data: any;
  passedData: any;
  constructor(private store: Store<AppState>,
              private location: Location) {
    this.id = (<any>location.getState()).id;
    this.passedData = [
      {label: 'Nom d\'utilisateur', value: this.data?.username},
      {label: 'Nom', value: this.data?.lastname},
      {label: 'Prénom', value: this.data?.firstname},
      {label: 'E-mail', value: this.data?.email},
      {label: 'Téléphone', value: this.data?.phone},
      {label: 'CIN', value: this.data?.CIN},
      {label: 'Rejoignez à', value: this.data?.joinUs, type: 'date'},
      {label: 'Role', value: this.data?.user_role.name},
      {label: 'Active', value: this.data?.active ? 'oui' : 'non'},
      {label: 'Point de vente', value: ''},
    ];
  }

  ngOnInit(): void {
  }

}
