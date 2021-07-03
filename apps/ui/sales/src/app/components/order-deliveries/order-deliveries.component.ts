import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {
  DeliveryFacade,
  OrderDelivery,
  DraftFacade,
} from '@tanglass-erp/store/sales';
import { ProductHeaders } from '@TanglassUi/sales//utils/grid-headers';
import { Column } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-order-deliveries',
  templateUrl: './order-deliveries.component.html',
  styleUrls: ['./order-deliveries.component.scss'],
})
export class OrderDeliveriesComponent implements OnInit {
  displayedColumns: Array<Column> = ProductHeaders;
  dataSource: OrderDelivery[] = [];
  draft_id;

  @ViewChild(MatTable, { static: true }) table: MatTable<OrderDelivery>;

  constructor(
    private facade: DeliveryFacade,
    private draft_facade: DraftFacade
  ) {}

  ngOnInit(): void {
    this.draft_facade.selectedDraft$.subscribe((id) =>
      this.facade.loadOrderDeliveries(id)
    );
    this.facade.orderDeliveries$.subscribe(
      (data) => (this.dataSource = data ?? [])
    );
  }
}
