import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { AccessoryWarehouseHeaders } from '@TanglassUi/inventory/utils/grid-headers';
import * as AccessoryWarehousActions from '@TanglassStore/inventory/lib/actions/wareHouseAccessory.actions';
import * as AccessoryWarehousSelectors from '@TanglassStore/inventory/lib/selectors/warehouseAccessory.selectors';


@Component({
  selector: 'tanglass-erp-warehouse-accessory',
  templateUrl: './warehouse-accessory.component.html',
  styleUrls: ['./warehouse-accessory.component.scss'],
})
export class WarehouseAccessoryComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';
  data$ = this.store.select(AccessoryWarehousSelectors.getAllAccessoryWarehouses);

  constructor(public dialog: MatDialog, private store: Store<AppState>) {
    this.setColumnDefs();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  ngOnInit(): void {
    this.store.dispatch(AccessoryWarehousActions.loadWareHouseAccessories());
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
    this.columnDefs =  AccessoryWarehouseHeaders;
  }

}
