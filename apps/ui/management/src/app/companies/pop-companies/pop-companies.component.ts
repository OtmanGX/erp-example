import { Observable } from 'rxjs';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserMockService } from '@TanglassCore/mock/management/user.mock.service';
import { User } from '@TanglassCore/models/management/users';
import * as UserSelector from '@TanglassStore/management/selectors/user.selectors';
import * as SalePointSelector from '@TanglassStore/management/selectors/sale-point.selectors';
import * as UserActions from '@TanglassStore/management/actions/user.actions';
import * as SalePointActions from '@TanglassStore/management/actions/salePoint.actions';
import { AppState} from '@tanglass-erp/store/app';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Companie } from '@TanglassCore/models/management/companie';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'ngx-pop-companies',
  templateUrl: './pop-companies.component.html',
  styleUrls: ['./pop-companies.component.scss'],
})
export class PopCompaniesComponent implements OnInit {
  @Input() title: string;
  companieForm: FormGroup;
  user: User;
  submitted: boolean;
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    allowSearchFilter: true,
    idField: 'id',
    textField: 'name',
    maxHeight: 100,
  };
  dataSalePoints$: Observable<SalePointSelector.SalePointsViewModel>;
  dataUser$: Observable<UserSelector.UsersViewModel>;

  listUsers = ['Meriem', 'Houda', 'Fatima Zohra', 'Asmae', 'Khadija'];
  listSalesPoints = [
    'Tanja Balia',
    'Mabrouk',
    'Souani',
    'Dar Tounssi',
    'Sidi Driss',
  ];

  constructor(
    public dialogRef: MatDialogRef<PopCompaniesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Companie,
    private fb: FormBuilder,
    private userService: UserMockService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.dataSalePoints$ = this.store.pipe(select(SalePointSelector.selectSalePointsViewModel));
    this.dataUser$ = this.store.pipe(select(UserSelector.selectUsersViewModel));
    this.buildUserForm();
  }

  buildUserForm(): void {
    this.companieForm = this.fb.group({
      name: [this.data.name, Validators.required],
      ICE: [this.data.ICE, Validators.required],
      IF: [this.data.IF, Validators.required],
      RC: [this.data.RC, Validators.required],
      CNSS: [this.data.CNSS, Validators.required],
      address: [this.data.address, Validators.required],
      phone: [this.data.phone, Validators.required],
      Fax: [this.data.Fax],
      email: [this.data.email],
      webSite: [this.data.webSite],
      users: [this.data.users],
      salePoints: [this.data.salePoints],
    });
  }

  getSalePoints(): void {
    this.store.dispatch(
      SalePointActions.loadSalePointsByCompanies()
    );
  }
  getUsers(): void {
    this.store.dispatch(
      UserActions.loadUsersByCompanies()
    );
  }
  onSelectSalePoint(event): void {
    const subscription = this.dataSalePoints$.subscribe( (dataSalePoints) => {
      var obj = dataSalePoints.salePoints.filter(function (e) {
        return e.id == event.id;
      });
      this.companieForm.get('salePoints').setValue(obj);
    });
    subscription.unsubscribe();
  }
  onSelectUsers(event): void {
    const subscription = this.dataUser$.subscribe( dataUser => {
      var obj = dataUser.users.filter(function (e) {
        return e.id == event.id;
      });
      this.companieForm.get('users').setValue(obj);
    });
    subscription.unsubscribe();
  }

  onSave(): void {
    this.submitted = true;
    this.user = this.companieForm.value;
    this.companieForm.reset();
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
