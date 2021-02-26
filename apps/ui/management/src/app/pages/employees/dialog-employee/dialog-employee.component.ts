import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { FieldConfig, FormDialog, MustMatch } from '@tanglass-erp/material';
import * as SalePointActions from '@TanglassStore/management/lib/actions/salePoint.actions';
import * as SalePointSelectors from '@TanglassStore/management/lib/selectors/sale-point.selectors';
import { regConfigEmployee } from '@TanglassUi/management/utils/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-dialog-employee',
  templateUrl: './dialog-employee.component.html',
  styleUrls: ['./dialog-employee.component.scss']
})
export class DialogEmployeeComponent extends FormDialog implements OnDestroy {

  regConfig: FieldConfig[];
  reConfigValidator = MustMatch('password', 'confirmPassword');
  salePoints$ = this.store.select(SalePointSelectors.getAllSalePoints);
  salePointsSubscription: Subscription;

  constructor(public dialogRef: MatDialogRef<DialogEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private store: Store) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.store.dispatch(SalePointActions.loadSalePoints());
  }

  buildForm(): void {
    this.salePoints$.subscribe(value => {
      this.regConfig = regConfigEmployee(this.data, value);
    }
    );
  }

  ngOnDestroy(): void {
    this.salePointsSubscription.unsubscribe();
  }

}
