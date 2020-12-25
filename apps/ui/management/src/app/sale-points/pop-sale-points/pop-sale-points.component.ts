import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@TanglassCore/models/management/users';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SalePoint } from '@TanglassCore/models/management/sales-points';
import * as CompanieSelector from '@TanglassStore/management/selectors/companies.selectors';
import * as UserSelector from '@TanglassStore/management/selectors/user.selectors';
import * as UserActions from '@TanglassStore/management/actions/user.actions';
import * as CompaniesActions from '@TanglassStore/management/actions/companies.actions';
import { AppState } from '@tanglass-erp/store/app';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-pop-sale-points',
  templateUrl: './pop-sale-points.component.html',
  styleUrls: ['./pop-sale-points.component.scss'],
})
export class PopSalePointsComponent implements OnInit {
  @Input() title: string;
  SalePointForm: FormGroup;
  user: User;
  submitted: boolean;
  dataCompanies$: Observable<CompanieSelector.CompaniesViewModel>
  dataUser$: Observable<UserSelector.UsersViewModel>

  listCompanies = ['Tanglass', 'Trimar'];
  listUsers = ['Tanja Balia', 'Mabrouk', 'Souani', 'Dar Tounssi', 'Sidi Driss'];

  constructor(
    public dialogRef: MatDialogRef<PopSalePointsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SalePoint,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}
  ngOnInit(): void {
    this.dataCompanies$ = this.store.pipe(select(CompanieSelector.selectCompaniesViewModel));
    this.dataUser$ = this.store.pipe(select(UserSelector.selectUsersViewModel));
    this.buildUserForm();
  }
  buildUserForm(): void {
    this.SalePointForm = this.fb.group({
      name: [this.data.name, Validators.required],
      address: [this.data.address, Validators.required],
      phone: [this.data.phone, Validators.required],
      email: [this.data.email],
      Fax: [this.data.Fax],
      companie: [this.data.companie],
      users: [this.data.users],
    });
  }

  getCompanies(): void {
    this.store.dispatch(
      CompaniesActions.loadCompaniesBySalePoint()
    );
  }
  getUsers(): void {
    this.store.dispatch(
      UserActions.loadUsersBySalePoint()
    );
  }
  onSelectCompanie( event ): void {
    const subscription = this.dataCompanies$.subscribe( dataCompanies => {
      var obj = dataCompanies.companies.filter(function (e) {
        return e.id == event.id;
      });
      if (obj) {
        this.SalePointForm.get('companies').setValue(obj);
      }
    });
    subscription.unsubscribe();
  }

  onSelectUsers( event ): void {
    const subscription = this.dataUser$.subscribe( dataUser => {
      var obj = dataUser.users.filter(function (e) {
        return e.id == event.id;
      });
      if (obj) {
        this.SalePointForm.get('users').setValue(obj);
      }
    });
    subscription.unsubscribe();
  }

  onSave(): void {
    this.submitted = true;
    this.user = this.SalePointForm.value;
    this.SalePointForm.reset();
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
