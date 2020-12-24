import { Observable } from 'rxjs';
import { Component, OnInit, Inject, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '@TanglassCore/models/management/users';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as CompanieSelector from '@TanglassStore/management/selectors/companies.selectors';
import * as SalePointSelector from '@TanglassStore/management/selectors/sale-point.selectors';
import * as SalePointActions from '@TanglassStore/management/actions/salePoint.actions';
import * as CompaniesActions from '@TanglassStore/management/actions/companies.actions';
import { AppState } from '@tanglass-erp/store/app';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'ngx-dialog-employee',
  templateUrl: './dialog-employee.component.html',
  styleUrls: ['./dialog-employee.component.scss']
})
export class DialogEmployeeComponent implements OnInit {
  @Input() title: string;
  UserForm: FormGroup;
  user: User;
  submitted: boolean;
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    allowSearchFilter: true,
    idField: 'id',
    textField: 'name',
    maxHeight: 100,
  };
  dataCompanies$: Observable<CompanieSelector.CompaniesViewModel>;
  dataSalePoint$: Observable<SalePointSelector.SalePointsViewModel>;

  listCompanies = ['Tanglass', 'Trimar'];
  listSalesPoints = [
    'Tanja Balia',
    'Mabrouk',
    'Souani',
    'Dar Tounssi',
    'Sidi Driss',
  ];

  constructor(public dialogRef: MatDialogRef<DialogEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User,
              private fb: FormBuilder,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.dataCompanies$ = this.store.pipe(select(CompanieSelector.selectCompaniesViewModel));
    this.dataSalePoint$ = this.store.pipe(select(SalePointSelector.selectSalePointsViewModel));
    this.buildUserForm();
  }
  buildUserForm(): void {
    this.UserForm = this.fb.group({
      FirstName: [this.data.FirstName],
      LastName: [this.data.LastName],
      civilité: [this.data.civilité],
      address: [this.data.address],
      phone: [this.data.phone],
      CIN: [this.data.CIN],
      role: [this.data.role],
      email: [this.data.email],
      departement: [this.data.departement],
      companies: [this.data.companies],
      salepoints: [this.data.salepoints],
    });
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

  onSelectCompanie( event ): void {
    const subscription = this.dataCompanies$.subscribe( dataCompanies => {
      var obj = dataCompanies.companies.filter(function (e) {
        return e.id == event.id;
      });
      if (obj) {
        this.UserForm.get('companies').setValue(obj);
      }
    });
    subscription.unsubscribe();
  }

  onSelectSalePoint( event ): void {
    const subscription = this.dataSalePoint$.subscribe( dataSalePoint => {
      var obj = dataSalePoint.salePoints.filter(function (e) {
        return e.id == event.id;
      });
      this.UserForm.get('salepoints').setValue(obj);
    });
    subscription.unsubscribe();
  }

  onSave() {
    this.submitted = true;
    this.user = this.UserForm.value;
    this.UserForm.reset();
    this.submit(this.user);
  }
  closePopup() {
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(value: any) {
    this.dialogRef.close(value);
  }

}
