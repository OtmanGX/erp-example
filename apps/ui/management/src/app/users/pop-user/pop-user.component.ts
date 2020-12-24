import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { User } from '@TanglassCore/data/users';
import { companieMockService } from '@TanglassCore/mock/management/companie.mock.service';
import { SalePointMockService } from '@TanglassCore/mock/management/salePoint.mock.service';

import { Companie } from '@TanglassCore/models/management/companie';
import { SalePoint } from '@TanglassCore/models/management/sales-points';

@Component({
  selector: 'ngx-pop-user',
  templateUrl: './pop-user.component.html',
  styleUrls: ['./pop-user.component.scss'],
})
export class PopUserComponent implements OnInit {
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
  dataCompanies: Companie[] = [];
  dataSalePoint: SalePoint[] = [];

  listCompanies = ['Tanglass', 'Trimar'];
  listSalesPoints = [
    'Tanja Balia',
    'Mabrouk',
    'Souani',
    'Dar Tounssi',
    'Sidi Driss',
  ];

  constructor(
    protected ref: NbDialogRef<PopUserComponent>,
    private fb: FormBuilder,
    private companieService: companieMockService,
    private salePointsService: SalePointMockService
  ) {}
  ngOnInit(): void {
    this.buildUserForm();
  }
  buildUserForm(): void {
    this.UserForm = this.fb.group({
      FirstName: [''],
      LastName: [''],
      civilité: [''],
      addresse: [''],
      phone: [''],
      CIN: [''],
      role: [''],
      email: [''],
      departement: [''],
      companies: [[]],
      salepoints: [[]],
    });
  }

  getCompanies(): void {
    this.companieService.getAll().subscribe({
      next: (companies) => (this.dataCompanies = companies),
    });
  }
  getSalesPoint(): void {
    this.salePointsService.getAll().subscribe({
      next: (salePoints) => (this.dataSalePoint = salePoints),
    });
  }
  onSelectCompanie(event): void {
    var obj = this.dataCompanies.filter(function (e) {
      return e.id == event.id;
    });
    this.UserForm.get('companies').setValue(obj);
  }
  onSelectSalePoint(event): void {
    var obj = this.dataSalePoint.filter(function (e) {
      return e.id == event.id;
    });
    this.UserForm.get('salepoints').setValue(obj);
  }

  onSave() {
    this.submitted = true;
    this.user = this.UserForm.value;
    this.UserForm.reset();
    this.ref.close(this.user);
  }
  closePopup() {
    this.ref.close();
  }
}
