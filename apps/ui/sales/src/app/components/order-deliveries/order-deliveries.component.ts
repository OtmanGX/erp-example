import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { DeliveryFacade, DraftFacade, OrderDelivery } from '@tanglass-erp/store/sales';
import { ProductDeliveriesHeaders } from '@TanglassUi/sales//utils/grid-headers';
import { Column } from '@tanglass-erp/material';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ngx-order-deliveries',
  templateUrl: './order-deliveries.component.html',
  styleUrls: ['./order-deliveries.component.scss'],
})
export class OrderDeliveriesComponent implements OnInit {
  displayedColumns: Array<Column> = ProductDeliveriesHeaders;
  dataSource: OrderDelivery[] = [];
  draft_id;

  @ViewChild(MatTable, { static: true }) table: MatTable<OrderDelivery>;

  constructor(
    private facade: DeliveryFacade,
    private draft_facade: DraftFacade
  ) {}

  ngOnInit(): void {
    this.draft_facade.selectedDraftId$.pipe(debounceTime(500)).subscribe((id) =>
      this.facade.loadOrderDeliveries(id)
    );
    this.facade.orderDeliveries$.subscribe(
      (data) => (this.dataSource = data ?? [])
    );
  }
}
