import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { PopWarehouseComponent } from '@TanglassUi/inventory/pages/warehouse/pop-warehouse/pop-warehouse.component';
import { warehouseHeaders } from '@TanglassUi/inventory/utils/grid-headers';
import { WarehousesFacade } from '@tanglass-erp/store/inventory';
import { Store } from '@ngrx/store';

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
  data$ = this.facade.allWarehouses$;

  constructor(
    public dialog: MatDialog,
    private facade: WarehousesFacade,
    private store: Store
  ) {
    this.setColumnDefs();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  ngOnInit(): void {
    this.facade.loadAllWarehouses();
  }

  openDialog(action, data = {}) {
    const dialogRef = this.dialog.open(PopWarehouseComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Store action dispatching
        if (action === Operations.add) {
          this.facade.addWarehouse({
            companyid: result.company,
            name: result.name,
            salesPointid: result.salesPoint,
          });
        } else {
          this.facade.updateWarehouse({
            id: data['id'],
            companyid: result.company,
            name: result.name,
            salesPointid: result.salesPoint,
          });
        }
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
        this.facade.removeWarehouses(event.data.map((e) => e.id));
        break;
      // ...
    }
  }

  setColumnDefs(): void {
    this.columnDefs = [
      ...warehouseHeaders,
      { field: 'id', headerName: 'Action', type: 'editColumn' },
    ];
  }
}
