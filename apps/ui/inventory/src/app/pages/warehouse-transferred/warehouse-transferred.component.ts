import { Component, ViewChild } from '@angular/core';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as transferOrderActions from '@TanglassStore/inventory/lib/actions/transferOrder.actions';
import { ordersDetailsHeaders, warehouseTransferHeaders } from '@TanglassUi/inventory/utils/grid-headers';
import { of } from 'rxjs';

@Component({
  selector: 'ngx-warehouse-transferred',
  templateUrl: './warehouse-transferred.component.html',
  styleUrls: ['./warehouse-transferred.component.scss']
})
export class WarehouseTransferredComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';
  data$ = of([]);

  constructor(public dialog: MatDialog, private store: Store) {
    this.setColumnDefs();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  ngOnInit(): void {
  }


  eventTriggering(event) {
    // Store Action Dispatching
    switch (event.action) {
      case Operations.add:
      case Operations.update:
      case Operations.delete:
        break;
      case Operations.loadDetails:

        this.columnDefs = ordersDetailsHeaders ;
        this.store.dispatch(transferOrderActions.loadOrdersDetails());
        break;
      // ...
    }
  }

  setColumnDefs(): void {
    this.columnDefs = [
      ...warehouseTransferHeaders,
      // { field: 'id', headerName: 'Action', type: "editColumn" }
    ];
  }

}
