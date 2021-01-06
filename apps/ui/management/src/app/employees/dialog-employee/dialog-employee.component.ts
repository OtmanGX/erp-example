import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { FieldConfig, FormDialog } from '@tanglass-erp/material';

import * as SalePointActions from '@TanglassStore/management/actions/salePoint.actions';
import * as SalePointSelectors from '@TanglassStore/management/selectors/sale-point.selectors';

@Component({
  selector: 'ngx-dialog-employee',
  templateUrl: './dialog-employee.component.html',
  styleUrls: ['./dialog-employee.component.scss']
})
export class DialogEmployeeComponent extends FormDialog {

  regConfig: FieldConfig[];

  salePoints$ = this.store.select(SalePointSelectors.getAllSalePoints);

  constructor(public dialogRef: MatDialogRef<DialogEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private store: Store) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    this.store.dispatch(SalePointActions.loadSalePoints());
    this.buildUserForm();
  }

  buildUserForm(): void {
    this.regConfig = [
      {type: "input", label: "Prénom", inputType: "text", name: "firstname", value: this.data.firstname,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Nom", inputType: "text", name: "lastname", value: this.data.lastname,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Nom d'utilisateur", inputType: "text", name: "username", value: this.data.username,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Téléphone", inputType: "text", name: "phone", value: this.data.phone,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "checkbox", label: "Active", inputType: "text", name: "active",
        value: this.data.active ?? true,
      },
    ];
  }

}
