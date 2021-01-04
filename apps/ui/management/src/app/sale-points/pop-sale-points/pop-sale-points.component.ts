import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SalePoint } from '@tanglass-erp/core/management';
import * as UserActions from '@TanglassStore/management/actions/user.actions';
import { AppState } from '@tanglass-erp/store/app';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-pop-sale-points',
  templateUrl: './pop-sale-points.component.html',
  styleUrls: ['./pop-sale-points.component.scss'],
})
export class PopSalePointsComponent extends FormDialog{
  // dataCompanies$: Observable<CompanieSelector.CompaniesViewModel>;
  // dataUser$: Observable<UserSelector.UsersViewModel>;

  listCompanies = ['Tanglass', 'Trimar'];
  listUsers = ['Tanja Balia', 'Mabrouk', 'Souani', 'Dar Tounssi', 'Sidi Driss'];
  regConfig: FieldConfig[];

  constructor(
    public dialogRef: MatDialogRef<PopSalePointsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SalePoint,
    private store: Store<AppState>
  ) {
    super(dialogRef, data);
  }
  ngOnInit(): void {
    // this.dataCompanies$ = this.store.pipe(select(CompanieSelector.selectCompaniesViewModel));
    // this.dataUser$ = this.store.pipe(select(UserSelector.selectUsersViewModel));
    this.buildUserForm();
  }

  buildUserForm(): void {
    this.regConfig = [
      {type: "input", label: "Nom", inputType: "text", name: "name", value: this.data.name,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Adresse", inputType: "text", name: "addresse", value: this.data.address,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Téléphone", inputType: "text", name: "phone", value: this.data.phone,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "E-mail", inputType: "text", name: "email", value: this.data.email,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Fax", inputType: "text", name: "fax", value: this.data.fax,
        validations: [
          FormDialog.REQUIRED
        ]
      },
    ];
  }

  getUsers(): void {
    this.store.dispatch(
      UserActions.loadUsersBySalePoint()
    );
  }
}
