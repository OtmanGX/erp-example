import { Component } from '@angular/core';
import { ModelCardComponent } from '@tanglass-erp/material';
import { DetailedTransferOrder } from '@TanglassStore/inventory/index';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import * as transferOrderActions from '@TanglassStore/inventory/lib/actions/transferOrder.actions';
import * as TranserOrderSelectors from '@TanglassStore/inventory/lib/selectors/trasnferOrder.selectors';
import { ActivatedRoute } from '@angular/router';
import { GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { orderItemsHeaders } from '@TanglassUi/inventory/utils/grid-headers';
import { takeUntil } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PopOrderItemComponent } from '@TanglassUi/inventory/pages/warehouse-transfert/pop-order-item/pop-order-item.component';
import { PopOrderItemDeliverComponent } from '@TanglassUi/inventory/pages/warehouse-transfert/pop-order-item-deliver/pop-order-item-deliver.component';

@Component({
  selector: 'ngx-warehouse-glasse-card',
  templateUrl: './transfert-card.component.html',
  styleUrls: ['./transfert-card.scss']
})
export class TransfertCardComponent extends ModelCardComponent implements GridView {
  data$ = this.store.select(TranserOrderSelectors.getSelectedTransferOrder)
    .pipe(takeUntil(this._onDestroy));
  orderItems: Observable<any>;
  title = "Transfert";
  gap = "50px";
  deliverEvent = 'deliver';

  // Grid
  agGrid: AgGridAngular;
  columnDefs;
  columnId = "id";
  mainGrid: MainGridComponent;
  constructor(private store: Store<AppState>,
              public dialog: MatDialog,
              public route: ActivatedRoute) {
    super(route);
    this.setColumnDefs();
  }

  ngAfterViewInit(): void {
  }

  afterComplete() {
  }

  dispatch(): void {
    this.store.dispatch(transferOrderActions.loadTransferOrderById({id: this.id}));
  }

  passData(data?: DetailedTransferOrder) {
    this.orderItems = of(data?.order_items);
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

  openDialog(action, data = {}) {
    const component = action === Operations.update ? PopOrderItemComponent : PopOrderItemDeliverComponent;
    const dialogRef = this.dialog.open(component, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (action === Operations.update) {}
      }
    });
  }

  eventTriggering(event) {
    console.log(event);
   switch (event.action) {
     case Operations.update:
       this.openDialog(event.action, event.data);
       break;
     case this.deliverEvent:
       this.openDialog(event.action);
       break;
   }
  }

  setColumnDefs(): void {
    this.columnDefs = [
      ...orderItemsHeaders,
      {field: 'id', headerName: 'Action', type: "editColumn", cellRendererParams: (params) => (
          {
            extra: [{ icon: "delivery_dining", tooltip: "délivrer", event: "deliver" }],
          }
        )},
    ];
  }

}
