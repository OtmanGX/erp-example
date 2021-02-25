import { Component } from '@angular/core';
import { ModelCardComponent } from '@tanglass-erp/material';
import { DetailedTransferOrder } from '@TanglassStore/inventory/index';

import * as transferOrderActions from '@TanglassStore/inventory/lib/actions/transferOrder.actions';
import * as TranserOrderSelectors from '@TanglassStore/inventory/lib/selectors/trasnferOrder.selectors';
import { ActivatedRoute } from '@angular/router';
import { GridView, MainGridComponent } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { DeliveredItemsHeaders } from '@TanglassUi/purchase/utils/grid-header';
import { takeUntil } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ngx-delivery-card',
  templateUrl: './transfert-card.component.html',
  styleUrls: ['./transfert-card.scss']
})
export class DeliveryCardComponent extends ModelCardComponent implements GridView {
  data$:any
  orderItems: Observable<any>;
  title = "Transfert";
  gap = "50px";

  // Grid
  agGrid: AgGridAngular;
  columnDefs;
  columnId = "id";
  mainGrid: MainGridComponent;
  constructor(
              public route: ActivatedRoute) {
    super(route);
    this.setColumnDefs();
  }

  afterComplete() {
  }

  dispatch(): void {
  }

  passData(data?: DetailedTransferOrder) {

    this.orderItems = of(data?.order_items.map( (item) => {
      const itemClone: any = { ...item };
      itemClone.substance = item.substance?.productAccessory ?? item.substance?.productGlass;
      return itemClone;
    }));
    return [
      {
        label: "Infos Générales",
        isToolbar: "true",
        cols: 3,
        icons: [{ name: "edit", tooltip: "Modification", event: 'editMain' }],
        data: [
          { label: 'De', value: data?.fromwarehouse?.name },
          { label: 'A', value: data?.towarehouse?.name },
          { label: 'Date', value: data?.date, type: 'date' },
          { label: 'Date limite', value: data?.deadline, type: 'date' },
          { label: 'État', value: [data?.status], type: 'chips' },
        ]
      },
      {
        label: "Les Articles",
        isToolbar: "true",
        data: []
      }
    ];
  }

  eventTriggering(event) {
    // Store Action Dispatching update

  }

  ngAfterViewInit(): void {
  }

  setColumnDefs(): void {
    this.columnDefs = [
      ...DeliveredItemsHeaders
    ];
  }


}
