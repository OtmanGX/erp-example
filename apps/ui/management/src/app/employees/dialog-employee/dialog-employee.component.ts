import { Component, OnInit, Inject, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '@TanglassCore/data/users';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Companie } from '@TanglassCore/models/management/companie';
import { SalePoint } from '@TanglassCore/models/management/sales-points';
import { companieMockService } from '@TanglassCore/mock/management/companie.mock.service';
import { SalePointMockService } from '@TanglassCore/mock/management/salePoint.mock.service';

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

  constructor(public dialogRef: MatDialogRef<DialogEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private companieService: companieMockService,
              private salePointsService: SalePointMockService) { }

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
    const obj = this.dataCompanies.filter(function (e) {
      return e.id === event.id;
    });
    this.UserForm.get('companies').setValue(obj);
  }
  onSelectSalePoint(event): void {
    const obj = this.dataSalePoint.filter(function (e) {
      return e.id === event.id;
    });
    this.UserForm.get('salepoints').setValue(obj);
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
    this.dialogRef.close(this.data);
  }

}
