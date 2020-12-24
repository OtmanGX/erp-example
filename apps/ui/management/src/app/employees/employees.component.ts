import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AfterViewInit, Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EmployeesDataSource } from './employees-datasource';
import { UserMockService } from '@TanglassCore/mock/management/user.mock.service';
import { User } from '@TanglassCore/models/management/users';
import * as UserSelector from '@TanglassStore/management/selectors/user.selectors';
import * as UserActions from '@TanglassStore/management/actions/user.actions';
import { AppState} from '@tanglass-erp/store/app';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { DialogEmployeeComponent } from '@TanglassUi/management/employees/dialog-employee/dialog-employee.component';

const initialSelection = [];
const allowMultiSelect = true;


@Pipe({
  name: 'fullName'
})export class FullNamePipe implements PipeTransform {
  transform(person: any, args?: any): any {
    return person.FirstName + ' ' + person.LastName;
  }
}
@Component({
  selector: 'tanglass-erp-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<User>;
  dataSource: EmployeesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'id', 'name', 'phone', 'role',
    'departement', 'companies', 'salepoints', 'CIN', 'address', 'email', 'action'];
  columns;
  selectedRows = [];
  dataUsers$: Observable<UserSelector.UsersViewModel>;

  // Selection Logic
  selection;
  hide = false;
  constructor(private userService: UserMockService,
              private store: Store<AppState>,
              public dialog: MatDialog, ) {
    this.columns = [
      {key: 'id', title: 'Code', colPipe: null},
      {key: 'name', title: 'Nom', colPipe: new FullNamePipe()},
      {key: 'phone', title: 'tél N°', colPipe: null},
      {key: 'role', title: 'Role', colPipe: null},
      {key: 'departement', title: 'Département(s)', colPipe: null},
      {key: 'companies', title: 'Société(s)', colPipe: null},
      {key: 'salepoints', title: 'Points de ventes', colPipe: null},
      {key: 'CIN', title: 'C.I.N', colPipe: null},
      {key: 'address', title: 'Address', colPipe: null},
      {key: 'email', title: 'Email', colPipe: null},
    ];
  }

  ngOnInit() {
    this.selection = new SelectionModel<User>(allowMultiSelect, initialSelection);
    this.dataSource = new EmployeesDataSource();
    this.dataUsers$ = this.store.pipe(select(UserSelector.selectUsersViewModel));
    this.store.dispatch(
      UserActions.loadUsers()
    );
    this.dataUsers$.subscribe( dataUser => this.dataSource.data = dataUser.users);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openDialog(data = {}) {
    const dialogRef = this.dialog.open(DialogEmployeeComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(
          UserActions.addUser({user: result})
        );
      }
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  search(value: string) {
  }
}
