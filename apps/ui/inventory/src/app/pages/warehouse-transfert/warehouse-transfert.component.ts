import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { PopWarehouseComponent } from '@TanglassUi/inventory/pages/warehouse/pop-warehouse/pop-warehouse.component';
import { WarehousesFacade } from '@tanglass-erp/store/inventory';
import { Observable } from 'rxjs';
import { PopWarehouseTransfertComponent } from '@TanglassUi/inventory/pages/warehouse-transfert/pop-warehouse-transfert/pop-warehouse-transfert.component';


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
  data$: Observable<any>;

  constructor(public dialog: MatDialog, private facade: WarehousesFacade) {
    this.setColumnDefs();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  ngOnInit(): void {
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
      {field: 'id', headerName: 'Action', type: "editColumn"}
    ];
  }

}
