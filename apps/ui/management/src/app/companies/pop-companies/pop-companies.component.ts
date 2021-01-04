import { Observable } from 'rxjs';
import { Component, OnInit, Input, Inject } from '@angular/core';
import * as SalePointActions from '@TanglassStore/management/actions/salePoint.actions';
import { AppState} from '@tanglass-erp/store/app';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Companie } from '@tanglass-erp/core/management';
import { select, Store } from '@ngrx/store';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-pop-companies',
  templateUrl: './pop-companies.component.html',
  styleUrls: ['./pop-companies.component.scss'],
})
export class PopCompaniesComponent extends FormDialog {

  // dataSalePoints$: Observable<SalePointSelector.SalePointsViewModel>;
  // dataUser$: Observable<UserSelector.UsersViewModel>;

  listUsers = ['Meriem', 'Houda', 'Fatima Zohra', 'Asmae', 'Khadija'];
  listSalesPoints = [
    'Tanja Balia',
    'Mabrouk',
    'Souani',
    'Dar Tounssi',
    'Sidi Driss',
  ];
  regConfig: FieldConfig[];


  constructor(
    public dialogRef: MatDialogRef<PopCompaniesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Companie,
    private store: Store<AppState>
  ) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    // this.dataSalePoints$ = this.store.pipe(select(SalePointSelector.selectSalePointsViewModel));
    // this.dataUser$ = this.store.pipe(select(UserSelector.selectUsersViewModel));
    this.buildUserForm();
  }

  buildUserForm(): void {
    // this.companieForm = this.fb.group({
    //   name: [this.data.name, Validators.required],
    //   ICE: [this.data.ICE, Validators.required],
    //   IF: [this.data.IF, Validators.required],
    //   RC: [this.data.RC, Validators.required],
    //   CNSS: [this.data.CNSS, Validators.required],
    //   address: [this.data.address, Validators.required],
    //   phone: [this.data.phone, Validators.required],
    //   Fax: [this.data.Fax],
    //   email: [this.data.email],
    //   webSite: [this.data.webSite],
    //   users: [this.data.users],
    //   salePoints: [this.data.salePoints],
    // });
    this.regConfig = [
      {type: "input", label: "Nom", inputType: "text", name: "name", value: this.data.name,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "ICE", inputType: "text", name: "ICE", value: this.data.ICE,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "IF", inputType: "text", name: "IF", value: this.data.IF,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "RC", inputType: "text", name: "RC", value: this.data.RC,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "CNSS", inputType: "text", name: "CNSS", value: this.data.CNSS,
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
    ];
  }

  getSalePoints(): void {
    this.store.dispatch(
      SalePointActions.loadSalePointsByCompanies()
    );
  }
}
