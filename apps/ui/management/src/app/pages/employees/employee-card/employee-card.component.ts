import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';
import * as UserActions from '@TanglassStore/management/lib/actions/user.actions';
import * as UserSelectors from '@TanglassStore/management/lib/selectors/user.selectors';

@Component({
  selector: 'ngx-sale-point-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employeecard.component.scss']
})
export class EmployeeCardComponent implements OnInit {
  title = "Profile d'utilisateur";
  id: string;
  step = null;
  data = this.store.select(UserSelectors.getSelectedUser);
  passedData: any;
  constructor(private store: Store<AppState>,
              private location: Location) {
    this.id = (<any>this.location.getState()).id;
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUserById({id: this.id}));
    this.data.subscribe(data => {
      this.passedData = [
        {label: 'Nom d\'utilisateur', value: data?.username},
        {label: 'Nom', value: data?.lastname},
        {label: 'Prénom', value: data?.firstname},
        {label: 'E-mail', value: data?.email},
        {label: 'Téléphone', value: data?.phone},
        {label: 'CIN', value: data?.CIN},
        {label: 'Rejoignez à', value: data?.joinUs, type: 'date'},
        {label: 'Role', value: data?.user_role.name},
        {label: 'Active', value: data?.active ? 'oui' : 'non'},
        {label: 'Point de vente', value: ''},
      ];
    })
  }

}
