import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';
import { GridView, MainGridComponent } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { PopWarehouseComponent } from '@TanglassUi/inventory/pages/warehouse/pop-warehouse/pop-warehouse.component';
import { PopWarehouseConsumableComponent } from '@TanglassUi/inventory/pages/warehouse-consumable/pop-warehouse-consumable/pop-warehouse-consumable.component';


@Component({
  selector: 'tanglass-erp-warehouse-consumable',
  templateUrl: './warehouse-consumable.component.html',
  styleUrls: ['./warehouse-consumable.component.scss'],
})
export class WarehouseConsumableComponent implements GridView {
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
    const dialogRef = this.dialog.open(PopWarehouseConsumableComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Store action dispatching
        if (action === 'add') {
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
  { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }

}
