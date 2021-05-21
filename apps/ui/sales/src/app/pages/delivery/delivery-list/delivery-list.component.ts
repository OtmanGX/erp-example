import { Component, OnInit } from '@angular/core';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { deliveryHeaders } from '@TanglassUi/sales/utils/grid-headers';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})
export class DeliveryListComponent implements GridView {
  agGrid: AgGridAngular;
  columnDefs;
  columnId = 'id';
  data$ = of([]);
  mainGrid: MainGridComponent;
  constructor(private router: Router,
              private store: Store<AppState>) {
    this.setColumnDefs();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  eventTriggering(event: any) {
    // Store Action Dispatching
    switch (event.action) {
      case Operations.add:
      case Operations.update:
        this.router.navigate(['sales/delivery/add']);
        break;
      case Operations.delete:
        break;
    }
  }

  setColumnDefs(): void {
    this.columnDefs = [
      ...deliveryHeaders,
      { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }

}
