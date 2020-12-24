import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { companieMockService } from '@TanglassCore/mock/management/companie.mock.service';
import { UserMockService } from '@TanglassCore/mock/management/user.mock.service';
import { User } from '@TanglassCore/models/management/users';
import { SalePointMockService } from '@TanglassCore/mock/management/salePoint.mock.service';
import { salePoints } from '@TanglassCore/data/management/salePoints.data';
import { SalePoint } from '@TanglassCore/models/management/sales-points';

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
  dataSalePoints: SalePoint[] = [];
  dataUser: User[] = [];

  listUsers = ['Meriem', 'Houda', 'Fatima Zohra', 'Asmae', 'Khadija'];
  listSalesPoints = [
    'Tanja Balia',
    'Mabrouk',
    'Souani',
    'Dar Tounssi',
    'Sidi Driss',
  ];

  constructor(
    protected ref: NbDialogRef<PopCompaniesComponent>,
    private fb: FormBuilder,
    private salePointMockService: SalePointMockService,
    private userService: UserMockService
  ) {}
  ngOnInit(): void {
    this.buildUserForm();
  }
  buildUserForm(): void {
    this.companieForm = this.fb.group({
      name: ['', Validators.required],
      ICE: ['', Validators.required],
      IF: ['', Validators.required],
      RC: ['', Validators.required],
      CNSS: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      Fax: [''],
      email: [''],
      webSite: [''],
      users: [[]],
      salePoints: [[]],
    });
  }

  getSalePoints(): void {
    this.salePointMockService.getAll().subscribe({
      next: (salepoints) => (this.dataSalePoints = salepoints),
    });
  }
  getUsers(): void {
    this.userService.getAll().subscribe({
      next: (users) => (this.dataUser = users),
    });
  }
  onSelectSalePoint(event): void {
    var obj = this.dataSalePoints.filter(function (e) {
      return e.id == event.id;
    });
    this.companieForm.get('salePoints').setValue(obj);
  }
  onSelectUsers(event): void {
    var obj = this.dataUser.filter(function (e) {
      return e.id == event.id;
    });
    this.companieForm.get('users').setValue(obj);
  }

  onSave(): void {
    this.submitted = true;
    this.user = this.companieForm.value;
    this.companieForm.reset();
    this.ref.close(this.user);
  }
  closePopup(): void {
    this.ref.close();
  }
}
