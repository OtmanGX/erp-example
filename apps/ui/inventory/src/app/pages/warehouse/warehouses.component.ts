import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { PopWarehouseComponent } from '@TanglassUi/inventory/pages/warehouse/pop-warehouse/pop-warehouse.component';
import { WarehouseHeaders } from '@TanglassUi/inventory/utils/grid-headers';


@Component({
  selector: 'tanglass-erp-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.scss'],
})
export class WarehousesComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';
  data$: any;

  constructor(public dialog: MatDialog, private store: Store<AppState>) {
    this.setColumnDefs();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  ngOnInit(): void {
  }

  openDialog(action, data = {}) {
    const dialogRef = this.dialog.open(PopWarehouseComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Store action dispatching
        if (action === Operations.add) {
        } else {}
      }
    });
  }

  eventTriggering(event) {
    // Store Action Dispatching
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
      ...WarehouseHeaders,
      { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }

}
