import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PopUserComponent } from './pop-user/pop-user.component';
import { User } from '@TanglassCore/models/management/users';
import { LocalDataSource } from 'ng2-smart-table';
import { UserMockService } from '@TanglassCore/mock/management/user.mock.service';
@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  selectedRows = [];
  dataUsers: User[] = [];
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private dialogService: NbDialogService,
    private userService: UserMockService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getAll().subscribe({
      next: (users) =>
        (this.dataUsers = users) && this.source.load(this.dataUsers),
    });
  }

  settings = {
    selectMode: 'multi',
    hideHeader: false,
    actions: false,
    noDataMessage: ' No Data',
    columns: {
      id: {
        title: 'Code',
        sortDirection: 'desc',
        type: 'html',
        valuePrepareFunction: (cell, row: User) => {
          return 'USER' + row.id;
        },
      },
      name: {
        title: 'Nom',
        type: 'html',
        valuePrepareFunction: (cell, row: User) => {
          return row.FirstName + row.LastName;
        },
      },
      phone: {
        title: 'tél N°',
        type: 'string',
      },
      role: {
        title: 'Role',
        type: 'string',
      },
      departement: {
        title: 'Département(s)',
        type: 'string',
      },
      companies: {
        title: 'Société(s)',
        type: 'string',
      },
      salepoints: {
        title: 'Points de ventes',
        type: 'string',
      },
      CIN: {
        title: 'C.I.N',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
    },
  };

  onUserRowSelect(event): void {
    this.selectedRows = event.selected;
  }
  openPopUpUser(): void {
    this.dialogService
      .open(PopUserComponent, {
        context: {
          title: 'Ajouter des employées',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe({
        next: (user) => {
          if (user) {
            this.dataUsers.push(user);
            this.source.load(this.dataUsers);
          }
        },
      });
  }
}
