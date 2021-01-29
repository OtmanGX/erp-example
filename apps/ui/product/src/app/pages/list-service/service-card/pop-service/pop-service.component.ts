import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, Groupfield } from '@tanglass-erp/material';
import { regConfService } from '../../../../utils/forms';
import * as CompanieActions from '@TanglassStore/management/lib/actions/companies.actions';
import * as CompanieSelectors from '@TanglassStore/management/lib/selectors/companies.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-pop-service-config',
  templateUrl: './pop-service.component.html',
  styleUrls: ['./pop-service.component.scss'],
})
export class PopServiceComponent extends FormDialog {
  title = "Ajouter une service";
  regConfig: Groupfield[] | any;
  companies$ = this.store.select(CompanieSelectors.getAllCompanies)
    .pipe(map(item => item.map(company => ({key: company.id, value: company.name})))
    );
  params = [];

  constructor(
    public dialogRef: MatDialogRef<PopServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppState>
  ) {
    super(dialogRef, data);
  }

  buildForm() {
    this.store.dispatch(CompanieActions.loadCompanies());
    this.regConfig = regConfService(this.data.service, this.companies$);
    // const dataParams = JSON.parse(this.data.params);
    //   this.regConfig = regConfService(this.data.service, this.companies$, dataParams);
  }

  submit(value: any) {
    this.dialogRef.close(value);
    }
}
