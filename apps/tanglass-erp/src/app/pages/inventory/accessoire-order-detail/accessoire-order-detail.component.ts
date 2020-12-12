import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderProductionMockService } from '@TanglassCore/mock/production/productionOrder.mock.service';
import {
  ProductionOrder,
  AddedValue,
} from '@TanglassCore/models/production/productionOrder.model';
import { AccessoireOrder } from '@TanglassCore/models/inventory/accessoireOrders.model';
import { AccessoireOrdersMockService } from '@TanglassCore/mock/inventory/accessoiresOrder.mock';

@Component({
  selector: 'ngx-accessoire-order-detail',
  templateUrl: './accessoire-order-detail.component.html',
  styleUrls: ['./accessoire-order-detail.component.scss'],
})
export class AccessoireOrderDetailComponent implements OnInit {
  id: number;
  order: AccessoireOrder;
  content: string = '';
  constructor(
    private readonly route: ActivatedRoute,
    private readonly ordersService: AccessoireOrdersMockService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.ordersService.getOneById(this.id).subscribe({
        next: (order) => (this.order = order),
      });
    }
  }
}
