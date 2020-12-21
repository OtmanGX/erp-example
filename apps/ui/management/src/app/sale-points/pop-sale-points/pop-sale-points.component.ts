import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { companieMockService } from '@TanglassCore/mock/management/companie.mock.service';
import { UserMockService } from '@TanglassCore/mock/management/user.mock.service';
import { Companie } from '@TanglassCore/models/management/companie';
import { User } from '@TanglassCore/models/management/users';

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
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    allowSearchFilter: true,
    idField: 'id',
    textField: 'name',
    maxHeight: 100,
  };
  dataCompanies: Companie[] = [];
  dataUser: User[] = [];

  listCompanies = ['Tanglass', 'Trimar'];
  listUsers = ['Tanja Balia', 'Mabrouk', 'Souani', 'Dar Tounssi', 'Sidi Driss'];

  constructor(
    protected ref: NbDialogRef<PopSalePointsComponent>,
    private fb: FormBuilder,
    private companieService: companieMockService,
    private userService: UserMockService
  ) {}
  ngOnInit(): void {
    this.buildUserForm();
  }
  buildUserForm(): void {
    this.SalePointForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: [''],
      Fax: [''],
      companie: [],
      users: [[]],
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
    var obj = this.dataCompanies.filter(function (e) {
      return e.id == event.id;
    });
    if (obj) {
      this.SalePointForm.get('companies').setValue(obj);
    }
  }
  onSelectUsers(event): void {
    var obj = this.dataUser.filter(function (e) {
      return e.id == event.id;
    });
    if (obj) {
      this.SalePointForm.get('users').setValue(obj);
    }
  }

  onSave(): void {
    this.submitted = true;
    this.user = this.SalePointForm.value;
    this.SalePointForm.reset();
    this.ref.close(this.user);
  }
  closePopup(): void {
    this.ref.close();
  }
}
