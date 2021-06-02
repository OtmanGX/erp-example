import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { QuotationHeaders } from '../../utils/grid-headers';
import { Router } from '@angular/router';
import { OrdersFacade } from "@tanglass-erp/store/sales";

@Component({
  selector: 'ngx-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';
  data$=this.facade.allOrders$;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private facade: OrdersFacade,
  ) {
    this.setColumnDefs();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  ngOnInit(): void {
    this.facade.loadAllOrders();
  }

  eventTriggering(event) {
    // Store Action Dispatching
    switch (event.action) {
      case Operations.add:
        this.router.navigateByUrl('sales/order/createOrder');
        break;
      case Operations.update:
        break;
      case Operations.delete:
        this.facade.removeMany(event.data.map((e) => e.id));
        break;
    }
  }

  setColumnDefs(): void {
    this.columnDefs = [
      ...QuotationHeaders,
      { field: 'id', headerName: 'Action', type: "editColumn" }
    ];
  }


}
