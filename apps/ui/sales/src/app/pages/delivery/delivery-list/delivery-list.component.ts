import { Component } from '@angular/core';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { of } from 'rxjs';
import { deliveryHeaders } from '@TanglassUi/sales/utils/grid-headers';
import { Router } from '@angular/router';
import { DeliveryFacade } from '@tanglass-erp/store/sales';

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
              private deliveryFacade: DeliveryFacade) {
    this.setColumnDefs();
  }

  ngOnInit(): void {
    this.deliveryFacade.loadAllDelivery();
  }

  ngAfterViewInit(): void {
  }

  eventTriggering(event: any) {
    // Store Action Dispatching
    switch (event.action) {
      case Operations.add:
        this.router.navigate(['sales/delivery/add']);
        break;
      case Operations.update:
        this.router.navigate(['sales/delivery/update', {id: event.data?.id}]);
        break;
      case Operations.delete:
        this.deliveryFacade.removeDelivery(event.data.map(e => e.id));
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
