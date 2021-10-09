import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { OrderHeaders } from '@TanglassUi/sales/utils/grid-headers';
import { Router } from '@angular/router';
import { OrdersFacade } from "@tanglass-erp/store/sales";
import {  DraftFacade,  } from '@tanglass-erp/store/sales';
import { fr } from 'date-fns/locale';
import startOfMonth from 'date-fns/fp/startOfMonth';

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
  dateText: string;
  deliverEvent = 'deliver';


  constructor(
    public dialog: MatDialog,
    private router: Router,
    private facade: OrdersFacade,
    private draftFacade: DraftFacade,
  ) {
    this.setColumnDefs();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  ngOnInit(): void {
    const date = new Date();
    this.dateText = date.getFullYear() + ' ' + fr.localize.month(date.getMonth(), { width: 'abbreviated' });
    this.facade.loadAllOrders({
      dateStart: startOfMonth(date), dateEnd: new Date()
    });
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
      case Operations.dateChange:
        this.facade.loadAllOrders(event.data);
        case this.deliverEvent:
        break;
    }
  }



  setColumnDefs(): void {
    this.columnDefs = [
      ...OrderHeaders,
      {field: 'id', headerName: 'Action', type: "editColumn", cellRendererParams: (params) => (
          {
            extra: [{ icon: "delivery_dining", tooltip: "délivrer", event: "deliver" }],
          }
        )},
    ];
  }

}
