import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { PopCustomerComponent } from './pop-customer/pop-customer.component';
import { CustomerHeaders } from '../../utils/grid-headers';
import * as CustomerActions from '@TanglassStore/contact/lib/actions/customer.actions';
import * as CustomerSelectors from '@TanglassStore/contact/lib/selectors/customer.selectors';


@Component({
  selector: 'tanglass-erp-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';
  data$ = this.store.select(CustomerSelectors.getAllCustomers);

  constructor(public dialog: MatDialog, private store: Store<AppState>) {
    this.setColumnDefs();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  ngOnInit(): void {
    this.store.dispatch(CustomerActions.loadCustomers());
  }

  openDialog(action, data = {}) {
    const dialogRef = this.dialog.open(PopCustomerComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Store action dispatching
        console.log(result);
        if (action === Operations.add) {
          this.store.dispatch(CustomerActions.addCustomer({customer: result}));
        } else {}
      }
    });
  }

  eventTriggering(event) {
    // Store Action Dispatching
    console.log(event);
    switch (event.action) {
      case Operations.add:
      case Operations.update:
        this.openDialog(event.action, event.data);
        break;
      case Operations.delete:
        break;
      // ...
    }
  }

  setColumnDefs(): void {
    this.columnDefs = [
      ...CustomerHeaders,
      { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }

}
