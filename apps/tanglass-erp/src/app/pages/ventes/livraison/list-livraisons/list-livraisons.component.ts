import { Component, OnInit } from '@angular/core';
import { DeliveryMockService } from '@TanglassCore/mock/ventes/delivery.mock.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ObjectRenderComponent } from '../../../shared/objects-render-component/object-render.component';
import { Delivery } from '@TanglassCore/models/ventes/delivery.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-list-livraisons',
  templateUrl: './list-livraisons.component.html',
  styleUrls: ['./list-livraisons.component.scss'],
})
export class ListLivraisonsComponent implements OnInit {
  selectedRows = [];
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private deliveryService: DeliveryMockService,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getDeliveries();
  }
  getDeliveries(): void {
    this.deliveryService
      .getAll()
      .subscribe((deliveries) => this.source.load(deliveries));
  }

  settings = {
    selectMode: 'multi',
    hideHeader: false,
    actions: false,
    columns: {
      id: {
        title: 'Com N°',
        type: 'custom',
        valuePrepareFunction: (cell, row: Delivery) => {
          let data = { link: 'commandes/fiche/', linkText: 'BL 000' + row.id };
          return data;
        },
        renderComponent: ObjectRenderComponent,
        sortDirection: 'desc',
      },
      nature: {
        title: 'Nature',
        type: 'html',
        valuePrepareFunction: (cell, row: Delivery) => {
          return row.formDelivery.nature;
        },
      },
      client: {
        title: 'Client',
        type: 'html',
        valuePrepareFunction: (cell, row: Delivery) => {
          return row.formDelivery.client.nom;
        },
      },
      dateDelivery: {
        title: 'Date ',
        type: 'html',
        valuePrepareFunction: (cell, row: Delivery) => {
          let date = this.datepipe.transform(
            row.formDelivery.date,
            'dd/MM/yyyy'
          );
          return date;
        },
      },

      companie: {
        title: 'Société',
        type: 'html',
        valuePrepareFunction: (cell, row: Delivery) => {
          return row.formDelivery.companie;
        },
      },
      total_HT: {
        title: 'Total HT',
        type: 'number',
      },
      tva: {
        title: 'Total TVA',
        type: 'number',
      },
      total_TTC: {
        title: 'Total TTC',
        type: 'number',
      },

      isInvoiced: {
        title: 'Facturation',
        type: 'html',
        valuePrepareFunction: (cell, row: Delivery) => {
          return row.formDelivery.isInvoiced;
        },
      },
    },
  };

  onUserRowSelect(event) {
    this.selectedRows = event.selected;
  }
}
