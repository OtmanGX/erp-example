import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import  { PurchaseHeaders } from '../../utils/grid-header'

import { of } from "rxjs";

@Component({
  selector: 'tanglass-erp-warehouses',
  templateUrl: './substance.component.html',
  styleUrls: [],
})
export class SubstanceComponent implements GridView {
  @ViewChild(MainGridComponent) mainGrid;
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';
  data$=of([{ref:"RC/0001",date:"12/02/2021",status:"réalisé",localisation:"USINE",company:"Tanglass"},
  {ref:"RC/0002",date:"12/03/2021",status:"En attente",localisation:"USINE",company:"Trimar"}])

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

}