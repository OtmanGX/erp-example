import { Component, OnInit, Input, Inject } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { companieMockService } from '@TanglassCore/mock/management/companie.mock.service';
import { UserMockService } from '@TanglassCore/mock/management/user.mock.service';
import { Companie } from '@TanglassCore/models/management/companie';
import { User } from '@TanglassCore/models/management/users';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SalePoint } from '@TanglassCore/models/management/sales-points';

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
  dataCompanies: Companie[] = [];
  dataUser: User[] = [];

  listCompanies = ['Tanglass', 'Trimar'];
  listUsers = ['Tanja Balia', 'Mabrouk', 'Souani', 'Dar Tounssi', 'Sidi Driss'];

  constructor(
    public dialogRef: MatDialogRef<PopSalePointsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SalePoint,
    private fb: FormBuilder,
    private companieService: companieMockService,
    private userService: UserMockService
  ) {}
  ngOnInit(): void {
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
    this.companieService.getAll().subscribe({
      next: (companies) => (this.dataCompanies = companies),
    });
  }
  getUsers(): void {
    this.userService.getAll().subscribe({
      next: (users) => (this.dataUser = users),
    });
  }
  onSelectCompanie(event): void {
    const obj = this.dataCompanies.filter(function (e) {
      return e.id === event.id;
    });
    if (obj) {
      this.SalePointForm.get('companies').setValue(obj);
    }
  }
  onSelectUsers(event): void {
    const obj = this.dataUser.filter(function (e) {
      return e.id === event.id;
    });
    if (obj) {
      this.SalePointForm.get('users').setValue(obj);
    }
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
