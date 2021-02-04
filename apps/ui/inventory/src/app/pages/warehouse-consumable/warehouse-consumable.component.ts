import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { ConsumableWarehouseHeaders } from '@TanglassUi/inventory/utils/grid-headers';
import * as ConsumableWarehousActions from '@TanglassStore/inventory/lib/actions/warehouseConsumable.actions';
import * as ConsumableWarehousSelectors from '@TanglassStore/inventory/lib/selectors/warehouseConsumable.selectors';


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
  data$ = this.store.select(ConsumableWarehousSelectors.getAllConsumableWarehouses);

  constructor(public dialog: MatDialog, private store: Store<AppState>) {
    this.setColumnDefs();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  ngOnInit(): void {
    this.store.dispatch(ConsumableWarehousActions.loadConsumableWarehouses());
  }

  openDialog(action, data = {}) {
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
      ...ConsumableWarehouseHeaders,
      {field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }

}
