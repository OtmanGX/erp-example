import { Observable } from 'rxjs';
import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { User_role, UsersProfile } from '@tanglass-erp/core/management';
import * as SalePointActions from '@TanglassStore/management/actions/salePoint.actions';
import * as CompaniesActions from '@TanglassStore/management/actions/companies.actions';
import { AppState } from '@tanglass-erp/store/app';
import { Store, select } from '@ngrx/store';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-dialog-employee',
  templateUrl: './dialog-employee.component.html',
  styleUrls: ['./dialog-employee.component.scss']
})
export class DialogEmployeeComponent extends FormDialog {

  // dataCompanies$: Observable<CompanieSelector.CompaniesViewModel>;
  // dataSalePoint$: Observable<SalePointSelector.SalePointsViewModel>;
  regConfig: FieldConfig[];
  listCompanies = ['Tanglass', 'Trimar'];
  listSalesPoints = [
    'Tanja Balia',
    'Mabrouk',
    'Souani',
    'Dar Tounssi',
    'Sidi Driss',
  ];

  constructor(public dialogRef: MatDialogRef<DialogEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UsersProfile,
              private store: Store<AppState>) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    // this.dataCompanies$ = this.store.pipe(select(CompanieSelector.selectCompaniesViewModel));
    // this.dataSalePoint$ = this.store.pipe(select(SalePointSelector.selectSalePointsViewModel));
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

  getCompanies(): void {
    this.store.dispatch(
      CompaniesActions.loadCompaniesByUser()
    );
  }
  getSalesPoint(): void {
    this.store.dispatch(
      SalePointActions.loadSalePointsByUser()
    );
  }

}
