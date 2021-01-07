import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';

import * as CompanieActions from '@TanglassStore/management/actions/companies.actions';
import * as CompanieSelectors from '@TanglassStore/management/selectors/companies.selectors';
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';

import { GridView, MainGridComponent } from '@tanglass-erp/ag-grid';
import { PopCompaniesComponent } from './pop-companies/pop-companies.component';
import { Companie } from '@tanglass-erp/core/management';
import { CompanieHeaders } from '@TanglassUi/management/utils/grid-headers';
@Component({
  selector: 'tanglass-erp-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements GridView {

  agGrid: AgGridAngular;
  columnDefs;
  columnId = 'id';
  data$ = this.store.select(CompanieSelectors.getAllCompanies);
  @ViewChild(MainGridComponent) mainGrid;

  constructor(public dialog: MatDialog, private store: Store<AppState> ) {
    this.setColumnDefs();
  }

  ngOnInit(): void {
    this.store.dispatch(CompanieActions.loadCompanies());
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
          console.log(result);
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
      ...CompanieHeaders,
      { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }

}
