import { Component, OnInit } from '@angular/core';
import * as CompanieActions from '@TanglassStore/management/lib/actions/companies.actions';
import * as CompanieSelectors from '@TanglassStore/management/lib/selectors/companies.selectors';
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-sale-point-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyCardComponent implements OnInit {
  title = "Profile d'une société";
  id: string;
  step = null;
  data$ =  this.store.select(CompanieSelectors.getSelectedCompanie);
  passedData: any;
  constructor(private store: Store<AppState>,
              private location: Location) {
      this.id = (<any>this.location.getState()).id;
  }

  ngOnInit(): void {
    this.store.dispatch(CompanieActions.loadCompanieById({id: this.id}));
    this.data$.pipe(takeWhile(value => !value?.id, true)).subscribe(data => {
      this.passedData = [
        {label: 'Nom', value: data?.name},
        {label: 'CNSS', value: data?.CNSS},
        {label: 'ICE', value: data?.ICE},
        {label: 'IF', value: data?.IF},
        {label: 'RC', value: data?.RC},
        {label: 'E-mail', value: data?.email, type: 'mail'},
        {label: 'Téléphone', value: data?.phone, type: 'phone'},
        {label: 'Site web', value: data?.website, type: 'link'},
      ];
    });
  }

}

