import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';
import { regConfigWarehouse } from '@TanglassUi/inventory/utils/forms';
import * as ShortCompanieSelectors from '@TanglassStore/shared/lib/+state/short-company.selectors';
import * as ShortCompanieActions from '@TanglassStore/shared/lib/+state/short-company.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'ngx-pop-sale-points',
  templateUrl: './pop-warehouse.component.html',
  styleUrls: ['./pop-warehouse.component.scss'],
})
export class PopWarehouseComponent extends FormDialog {

  regConfig: FieldConfig[];
  companies$ = this.store.select(ShortCompanieSelectors.getAllShortCompany)
  companies : any;

  constructor(
    public dialogRef: MatDialogRef<PopWarehouseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store
  ) {
    super(dialogRef, data);
  }
  ngOnInit(): void {
    this.store.dispatch(ShortCompanieActions.loadShortCompany())
    this.companies$.subscribe(companies => this.companies = companies)
    this.buildForm();
  }

  buildForm(): void {
    this.regConfig = regConfigWarehouse(this.data, this.companies);
  }
}
