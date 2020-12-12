import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
import { ObjectRenderComponent } from '../../shared/objects-render-component/object-render.component';
import { CommandeMockService } from '@TanglassCore/mock/ventes/commande.mock.service';
import { Accessoire_purchases } from '@TanglassCore/models/ventes/customerPurchases/accessoire_purchases.model';
import { ICommande } from '@TanglassCore/models/ventes/commande.model';
import { AccessoireOrdersMockService } from '@TanglassCore/mock/inventory/accessoiresOrder.mock';
import { AccessoireOrder } from '@TanglassCore/models/inventory/accessoireOrders.model';
@Component({
  selector: 'ngx-accessoire-orders',
  templateUrl: './accessoire-orders.component.html',
  styleUrls: ['./accessoire-orders.component.scss'],
})
export class AccessoireOrdersComponent implements OnInit {
  constructor(
    private ordersService: AccessoireOrdersMockService,
    public datepipe: DatePipe
  ) {}
  source: LocalDataSource = new LocalDataSource();
  orders;
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
        title: 'N° B.Accessoire',
        type: 'custom',
        valuePrepareFunction: (cell, row: AccessoireOrder) => {
          let data = {
            link: 'accessoires/accessoireOrders/detail/',
            linkText: 'B.A 00' + row.id + '/21',
          };
          return data;
        },
        renderComponent: ObjectRenderComponent,
        sortDirection: 'desc',
      },
      codeCommande: {
        title: 'N° B.C',
        type: 'html',
        valuePrepareFunction: (cell, row: AccessoireOrder) => {
          return ' B.C 00' + row.attachment_id + '/21';
        },
      },

      orderDate: {
        title: 'Date ',
        type: 'html',
        valuePrepareFunction: (cell, row: AccessoireOrder) => {
          let date = this.datepipe.transform(row.date, 'dd/MM/yyyy');
          return date;
        },
      },
      fromWhere: {
        title: 'Source ',
        type: 'string',
      },
      delay: {
        title: 'Délai ',
        type: 'html',
        valuePrepareFunction: (cell, row: AccessoireOrder) => {
          let date = this.datepipe.transform(row.delay, 'dd/MM/yyyy');
          return date;
        },
      },
      isAvailable: {
        title: 'Disponibilité',
        type: 'boolean',
      },

      isDelivered: {
        title: 'délivrée',
        type: 'boolean',
      },
      isReady: {
        title: 'prête',
        type: 'boolean',
      },
      tags: {
        title: 'Tags',
        type: 'string',
      },
    },
  };
}
