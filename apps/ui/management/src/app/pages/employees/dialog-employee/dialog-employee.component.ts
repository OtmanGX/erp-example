import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';
import * as SalePointActions from '@TanglassStore/management/lib/actions/salePoint.actions';
import * as SalePointSelectors from '@TanglassStore/management/lib/selectors/sale-point.selectors';
import { map } from 'rxjs/operators';
import { rolesDirection } from '@TanglassStore/management/index';

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
  }

  buildForm(): void {
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
      {type: "select", label: "Point de vente", inputType: "text", name: "phone", value: this.data.SalesPoint,
        options: this.salePoints$.pipe(map(item => item.map(obj => ({key: obj.id, value: obj.name}))))
      },
      {type: "select", label: "Role", inputType: "text", name: "phone", value: this.data.user_role,
        options: Object.values(rolesDirection).map(item => ({key : item, value: item})),
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
