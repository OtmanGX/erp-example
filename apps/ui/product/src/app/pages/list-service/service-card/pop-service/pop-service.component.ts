import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, Groupfield } from '@tanglass-erp/material';
import { regConfService } from '../../../../utils/forms';
import * as CompanieActions from '@TanglassStore/management/lib/actions/companies.actions';
import * as CompanieSelectors from '@TanglassStore/management/lib/selectors/companies.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Subscription } from 'rxjs';
import { ShortCompanyFacade } from '@tanglass-erp/store/shared';

@Component({
  selector: 'ngx-pop-service-config',
  templateUrl: './pop-service.component.html',
  styleUrls: ['./pop-service.component.scss'],
})
export class PopServiceComponent extends FormDialog implements OnDestroy {
  title = "Ajouter collection de service";
  regConfig: Groupfield[] | any;
  companiesSubscription: Subscription;
//  companies$ = this.store.select(CompanieSelectors.getAllCompanies);
  params = [];
  companies$ = this.facade.allShortCompany$

  constructor(
    public dialogRef: MatDialogRef<PopServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private facade:ShortCompanyFacade,
    private store: Store<AppState>
  ) {
    super(dialogRef, data);
  }

  buildForm() {
    //this.store.dispatch(CompanieActions.loadCompanies());
    this.companies$.subscribe(companies => this.regConfig = regConfService(this.data, companies))

    // const dataParams = JSON.parse(this.data.params);
    //this.regConfig = regConfService(this.data.service, []);
    // this.companiesSubscription = this.companies$.subscribe(value => {
    //   this.regConfig = regConfService(this.data.service, value, dataParams);
    // });
  }

  submit(value: any) {
    this.dialogRef.close(value);
    }

  ngOnDestroy(): void {
    // this.companiesSubscription.unsubscribe();
  }
}
