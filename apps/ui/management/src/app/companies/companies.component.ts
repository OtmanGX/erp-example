import { Observable } from 'rxjs';
import { Component, ViewChild } from '@angular/core';
import { PopCompaniesComponent } from './pop-companies/pop-companies.component';
import { MatDialog } from '@angular/material/dialog';
import * as CompanieActions from '@TanglassStore/management/actions/companies.actions';
import { AppState } from '@tanglass-erp/store/app';
import { select, Store } from '@ngrx/store';
import { GridView, MainGridComponent } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { Companie } from '@tanglass-erp/core/management';


@Component({
  selector: 'ngx-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements GridView {

  agGrid: AgGridAngular;
  columnDefs;
  columnId = 'id';
  data$: Observable<any>;
  @ViewChild(MainGridComponent) mainGrid;

  constructor(public dialog: MatDialog, private store: Store<AppState> ) {
    this.setColumnDefs();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.agGrid = this.mainGrid.agGrid;

  }

  openDialog(action, data = {}) {
    const dialogRef = this.dialog.open(PopCompaniesComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (action === 'add') {
          this.store.dispatch(CompanieActions.addCompanie({ companie: result }));
        } else {}
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
      ...Companie.columnDefs(),
      { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }

}
