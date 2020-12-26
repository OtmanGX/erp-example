import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
import { OrderProductionMockService } from '@TanglassCore/mock/production/productionOrder.mock.service';
import { ProductionOrder } from '@TanglassCore/models/production/productionOrder.model';
import { ObjectRenderComponent } from '../../shared/objects-render-component/object-render.component';

@Component({
  selector: 'ngx-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss'],
})
export class ListOrdersComponent implements OnInit {
  constructor(
    private ordersService: OrderProductionMockService,
    public datepipe: DatePipe
  ) {}
  source: LocalDataSource = new LocalDataSource();
  orders: ProductionOrder[];
  ngOnInit(): void {
    this.getOrders();
  }
  getOrders() {
    this.ordersService.getAll().subscribe({
      next: (orders) => {
        (this.orders = orders), this.source.load(this.orders);
      },
    });
  }

  settings = {
    selectMode: 'multi',
    hideHeader: false,
    actions: false,
    columns: {
      code: {
        title: 'N° B.T',
        type: 'custom',
        valuePrepareFunction: (cell, row: ProductionOrder) => {
          let data = {
            link: 'detail/',
            linkText: 'B.T 00' + row.id + '/21',
          };
          return data;
        },
        renderComponent: ObjectRenderComponent,
        sortDirection: 'desc',
      },
      codeCommande: {
        title: 'N° B.C',
        type: 'html',
        valuePrepareFunction: (cell, row: ProductionOrder) => {
          return ' B.C 00' + row.attachements_id + '/21';
        },
      },

      orderDate: {
        title: 'Date ',
        type: 'html',
        valuePrepareFunction: (cell, row: ProductionOrder) => {
          let date = this.datepipe.transform(row.date, 'dd/MM/yyyy');
          return date;
        },
      },
      delay: {
        title: 'Délai',
        type: 'html',
        valuePrepareFunction: (cell, row: ProductionOrder) => {
          let date = this.datepipe.transform(row.delay, 'dd/MM/yyyy');
          return date;
        },
      },
      tags: {
        title: 'Tags',
        type: 'string',
      },
    },
  };
}
