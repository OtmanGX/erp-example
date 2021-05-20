
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { QuotationHeaders } from '../../utils/grid-headers';
import { Router } from '@angular/router';
import { QuotationFacade } from "@tanglass-erp/store/sales";
import { groupeByCode } from "../adapters";
@Component({
  selector: 'ngx-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss']
})
export class QuotationComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';
  data$ = this.facade.allQuotation$;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private facade: QuotationFacade,
  ) {
    this.setColumnDefs();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;

  
  }

  ngOnInit(): void {
    this.facade.loadAllQuotations();
  }

  eventTriggering(event) {
    // Store Action Dispatching
    switch (event.action) {
      case Operations.add:
        this.router.navigateByUrl('sales/quotation/createQuotation');
      case Operations.update:
        break;
      case Operations.delete:
        break;
      // ...
    }
  }

  setColumnDefs(): void {
    this.columnDefs = [
      ...QuotationHeaders,
      { field: 'id', headerName: 'Action', type: "editColumn" }
    ];
  }


}
