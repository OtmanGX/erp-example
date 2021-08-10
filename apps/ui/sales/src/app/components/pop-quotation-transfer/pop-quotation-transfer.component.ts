import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, FieldConfig } from '@tanglass-erp/material';
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';
import { SharedFacade } from '@tanglass-erp/store/shared';
import { map } from 'rxjs/operators';
import { DynamicFormComponent } from '@tanglass-erp/material';
import * as CustomerSelectors from '@TanglassStore/contact/lib/selectors/customer.selectors';
import * as ContactSelectors from '@TanglassStore/contact/lib/selectors/contact.selectors';
import * as ContactActions from '@TanglassStore/contact/lib/actions/contact.actions';
import * as CustomerActions from '@TanglassStore/contact/lib/actions/customer.actions';
import { regConfigDraftInfos } from '@TanglassUi/sales/utils/forms';
@Component({
  selector: 'ngx-pop-quotation-transfer',
  templateUrl: './pop-quotation-transfer.component.html',
  styleUrls: ['./pop-quotation-transfer.component.scss'],
})
export class PopQuotationTransferComponent extends FormDialog {
  title = 'Données pour le tranfert';
  @ViewChild('transfer_form', { read: DynamicFormComponent })
  transferFormComponent: DynamicFormComponent;
  get transferForm() {
    return this.transferFormComponent?.form;
  }
  regConfig: FieldConfig[];
  customer$ = this.store.select(CustomerSelectors.getAllCustomers);
  contacts$ = this.store.select(ContactSelectors.getAllContacts);
  listCompanies$ = this.facade.allShortCompany$.pipe(
    map((item) =>
      item.map((company) => ({ key: company.id, value: company.name }))
    )
  );
  listSalesPoints$ = this.facade.allShortSalePoint$.pipe(
    map((item) => item.map((SP) => ({ key: SP.id, value: SP.name })))
  );

  constructor(
    public dialogRef: MatDialogRef<PopQuotationTransferComponent>,
    private facade: SharedFacade,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppState>
  ) {
    super(dialogRef, data);
  }
  submitForm() {
    this.submit(this.transferForm.value);
  }
  buildForm() {
    this.store.dispatch(CustomerActions.loadCustomers());
    this.store.dispatch(ContactActions.loadContacts());
    if (this.data?.id) {
      this.title = 'Éditer accessoire';
    }
    this.facade.loadAllShortCompanies();
    this.regConfig = regConfigDraftInfos(
      [],
      this.customer$,
      this.contacts$,
      this.listCompanies$,
      this.listSalesPoints$
    );
  }
}
