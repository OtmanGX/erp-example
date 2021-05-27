import { Component, OnInit, ViewChild } from '@angular/core';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PurchaseHeaders } from '@TanglassUi/purchase/utils/grid-header';
import { PopDeliveryComponent } from '@TanglassUi/purchase/pages/purchase/pop-delivery/pop-delivery.component';

@Component({
  selector: 'ngx-purchase-returned',
  templateUrl: './purchase-returned.component.html',
  styleUrls: ['./purchase-returned.component.scss']
})
export class PurchaseReturnedComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';
  data$ = of([]);
  constructor(public dialog: MatDialog) {
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
        this.openDialog(event.action, event.data);
        break;
      case Operations.update:
        break;
      case Operations.delete:
        break;
      // ...
    }
  }

  setColumnDefs(): void {
    this.columnDefs = [
      ...PurchaseHeaders,
      {field: 'id', headerName: 'Action', type: "editColumn"}
    ];
  }

  openDialog(action, data = {}) {
    const dialogRef = this.dialog.open(PopDeliveryComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Store action dispatching
        if (action === Operations.add) {

          // this.store.dispatch(....);
        } else { } // Update
      }
    });
  }
}
