import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as CompanieActions from '@TanglassStore/management/actions/companies.actions';
import * as CompanieSelectors from '@TanglassStore/management/selectors/companies.selectors';

@Component({
  selector: 'ngx-sale-point-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyCardComponent implements OnInit {
  title = "Profile d'utilisateur";
  id: string;
  step = null;
  data =  this.store.select(CompanieSelectors.getSelectedCompanie);
  passedData: any;
  constructor(private route: ActivatedRoute, private store: Store) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(value => {
      console.log(value.id);
      this.store.dispatch(CompanieActions.loadCompanieById({id: value.id}));
    });
    this.data.subscribe( data => {
      this.passedData = [
        {label: 'Nom', value: data?.name},
        {label: 'CNSS', value: data?.CNSS},
        {label: 'ICE', value: data?.ICE},
        {label: 'IF', value: data?.IF},
        {label: 'RC', value: data?.RC},
        {label: 'E-mail', value: data?.email},
        {label: 'Téléphone', value: data?.phone},
        {label: 'Site web', value: data?.website},
      ];
    })
  }

}
