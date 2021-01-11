import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as UserActions from '@TanglassStore/management/actions/user.actions';
import * as UserSelectors from '@TanglassStore/management/selectors/user.selectors';

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
  constructor(private route: ActivatedRoute, private store: Store) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(value => {
      this.store.dispatch(UserActions.loadUserById(value.id));
      this.data.subscribe( data => {
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
    })
  }

}
