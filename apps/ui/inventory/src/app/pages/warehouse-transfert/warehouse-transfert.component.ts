import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { PopWarehouseTransfertComponent } from '@TanglassUi/inventory/pages/warehouse-transfert/pop-warehouse-transfert/pop-warehouse-transfert.component';
import * as TranserOrderSelectors from '@TanglassStore/inventory/lib/selectors/trasnferOrder.selectors';
import * as transferOrderActions from '@TanglassStore/inventory/lib/actions/transferOrder.actions';
import { Store } from '@ngrx/store';
import { warehouseTransferHeaders ,ordersDetailsHeaders} from '../../utils/grid-headers';

@Component({
  selector: 'tanglass-erp-warehouses',
  templateUrl: './warehouse-transfert.component.html',
  styleUrls: ['./warehouse-transfert.component.scss'],
})
export class WarehouseTransfertComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';
  data$ = this.store.select(TranserOrderSelectors.getAllTransferOrders);

  constructor(public dialog: MatDialog, private store: Store) {
    this.setColumnDefs();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  ngOnInit(): void {
    this.store.dispatch(transferOrderActions.loadTransferOrders());

  }

  openDialog(action, data = {}) {
    const dialogRef = this.dialog.open(PopWarehouseTransfertComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Store action dispatching
        if (action === Operations.add) {
        } else { }
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
      case Operations.loadDetails:
        this.columnDefs = ordersDetailsHeaders ;
       // this.store.dispatch(transferOrderActions.....;

        break;
      // ...
    }
  }

  setColumnDefs(): void {
    this.columnDefs = [
      ...warehouseTransferHeaders,
      { field: 'id', headerName: 'Action', type: "editColumn" }
    ];
  }

}
