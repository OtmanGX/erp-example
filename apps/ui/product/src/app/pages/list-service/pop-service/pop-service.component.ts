import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog } from '@tanglass-erp/material';
import { regConfService } from '../../../utils/forms';
import { FormGroup } from '@angular/forms';
import * as CompanieSelectors from '@TanglassStore/management/lib/selectors/companies.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import * as CompanieActions from '@TanglassStore/management/lib/actions/companies.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-pop-service-config',
  templateUrl: './pop-service.component.html',
  styleUrls: ['./pop-service.component.scss'],
})
export class PopServiceComponent extends FormDialog implements OnDestroy{
  title = "Ajouter une service";
  regConfig: any;
  companiesSubscription: Subscription;
  companies$ = this.store.select(CompanieSelectors.getAllCompanies);
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
    this.regConfig = regConfService(this.data, []);
    // this.companiesSubscription = this.companies$.subscribe(value => {
    //   this.regConfig = regConfService(this.data, []);
    // });
  }

  submit(value: any) {
    this.dialogRef.close(value);
    }

  /**
   * Marks all controls in a form group as touched
   * @param formGroup - The form group to touch
   */
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched({ onlySelf: true });

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  ngOnDestroy(): void {
    // this.companiesSubscription.unsubscribe();
  }
}
