import { Store } from '@ngrx/store';
import { Component, ViewChild } from '@angular/core';
import * as UserActions from '@TanglassStore/management/actions/user.actions';
import * as UserSelectors from '@TanglassStore/management/selectors/user.selectors';
import { AppState} from '@tanglass-erp/store/app';
import { MatDialog } from '@angular/material/dialog';
import { DialogEmployeeComponent } from '@TanglassUi/management/employees/dialog-employee/dialog-employee.component';
import { GridView, MainGridComponent } from '@tanglass-erp/ag-grid';

import { AgGridAngular } from 'ag-grid-angular';
import { UserHeaders } from '@TanglassUi/management/utils/grid-headers';


@Component({
  selector: 'tanglass-erp-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements GridView {

  agGrid: AgGridAngular;
  columnDefs;
  columnId = 'id';
  data$ =  this.store.select(UserSelectors.getAllUsers);
  @ViewChild(MainGridComponent) mainGrid;
  constructor(private store: Store<AppState>,
              public dialog: MatDialog) {
    this.setColumnDefs();
  }

  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
  }

  ngAfterViewInit() {
    this.agGrid = this.mainGrid.agGrid;
  }

  openDialog(action, data = {}) {
    const dialogRef = this.dialog.open(DialogEmployeeComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (action === 'add')
          this.store.dispatch(
            UserActions.addUser({user: result})
          );
        else {} // Update
      }
    });
  }

  eventTriggering(event) {
    // Store Action Dispatching
    console.log(event);
    switch (event.action) {
      case 'add':
      case 'edit':
        this.openDialog(event.action, event.data);
        break;
      case 'delete':
        break;
      // ...
    }
  }

  setColumnDefs(): void {
    this.columnDefs = [
      ...UserHeaders,
      { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }
}
