import { Component } from '@angular/core';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { InvoiceFacade } from '@tanglass-erp/store/sales';
import { invoiceHeaders } from '@TanglassUi/sales/utils/grid-headers';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss'],
})
export class InvoiceListComponent implements GridView {
  agGrid: AgGridAngular;
  columnDefs;
  columnId = 'id';
  data$ = this.invoiceFacade.allInvoices$;
  mainGrid: MainGridComponent;
  constructor(private router: Router, private invoiceFacade: InvoiceFacade) {
    this.setColumnDefs();
  }

  ngOnInit(): void {
    this.invoiceFacade.loadAll();
  }

  eventTriggering(event) {
    switch (event.action) {
      case Operations.add:
        this.router.navigate(['sales/invoice/add']);
        break;
      case Operations.update:
        this.router.navigate(['sales/invoice/update', {id: event.data.id}]);
        break;
      case Operations.delete:
        this.invoiceFacade.deleteMany(event.data.map((e) => e.id));
    }
  }

  ngAfterViewInit(): void {}

  setColumnDefs(): void {
    this.columnDefs = [
      ...invoiceHeaders,
      {
        field: 'id',
        headerName: 'Action',
        type: 'editColumn',
      },
    ];
  }
}
