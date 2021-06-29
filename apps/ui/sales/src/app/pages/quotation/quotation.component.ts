
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { QuotationHeaders } from '@TanglassUi/sales/utils/grid-headers';
import { Router } from '@angular/router';
import { QuotationFacade } from "@tanglass-erp/store/sales";
import startOfMonth from 'date-fns/fp/startOfMonth';
import { fr } from 'date-fns/locale';


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
  dateText: string;

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
    const date = new Date();
    this.dateText = date.getFullYear() + ' ' + fr.localize.month(date.getMonth(), { width: 'abbreviated' });
    this.facade.loadAllQuotations({
      dateStart: startOfMonth(date)
    });
  }

  eventTriggering(event) {
    // Store Action Dispatching
    switch (event.action) {
      case Operations.add:
        this.router.navigateByUrl('sales/quotation/createQuotation');
      case Operations.update:
        break;
      case Operations.delete:
        this.facade.removeMany(event.data.map(e => e.id));
        break;
      case Operations.dateChange:
        this.facade.loadAllQuotations(event.data);
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
