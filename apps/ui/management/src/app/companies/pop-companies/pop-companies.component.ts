import { Component, OnInit, Input, Inject } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserMockService } from '@TanglassCore/mock/management/user.mock.service';
import { User } from '@TanglassCore/models/management/users';
import { SalePointMockService } from '@TanglassCore/mock/management/salePoint.mock.service';
import { salePoints } from '@TanglassCore/data/management/salePoints.data';
import { SalePoint } from '@TanglassCore/models/management/sales-points';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Companie } from '@TanglassCore/models/management/companie';

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
    public dialogRef: MatDialogRef<PopCompaniesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Companie,
    private fb: FormBuilder,
    private salePointMockService: SalePointMockService,
    private userService: UserMockService
  ) {
  }

  ngOnInit(): void {
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
    const obj = this.dataSalePoints.filter(function(e) {
      return e.id === event.id;
    });
    this.companieForm.get('salePoints').setValue(obj);
  }

  onSelectUsers(event): void {
    const obj = this.dataUser.filter(function(e) {
      return e.id === event.id;
    });
    this.companieForm.get('users').setValue(obj);
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
