import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
import { ObjectRenderComponent } from '../../../shared/objects-render-component/object-render.component';
import { InvoiceMockService } from '@TanglassCore/mock/ventes/invoice.mock.service';
import { Invoice } from '@TanglassCore/models/ventes/invoice.model';

@Component({
  selector: 'ngx-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss'],
})
export class InvoicesListComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();

  selectedRows = [];

  constructor(
    private invoiceService: InvoiceMockService,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getInvoices();
  }
  settings = {
    selectMode: 'multi',
    hideHeader: false,
    actions: false,
    columns: {
      id: {
        title: 'Com N°',
        type: 'custom',
        valuePrepareFunction: (cell, row: Invoice) => {
          let data = { link: 'invoices/fiche/', linkText: 'Fac000' + row.id };
          return data;
        },
        renderComponent: ObjectRenderComponent,
        sortDirection: 'desc',
      },
      client: {
        title: 'Client',
        type: 'html',
        valuePrepareFunction: (cell, row: Invoice) => {
          return row.formInvoice.client.nom;
        },
      },
      date: {
        title: 'Date ',
        type: 'html',
        valuePrepareFunction: (cell, row: Invoice) => {
          let date = this.datepipe.transform(
            row.formInvoice.date,
            'dd/MM/yyyy'
          );
          return date;
        },
      },

      companie: {
        title: 'Société',
        type: 'html',
        valuePrepareFunction: (cell, row: Invoice) => {
          return row.formInvoice.companie;
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
      remise: {
        title: 'Remise',
        type: 'number',
      },
    },
  };
  getInvoices(): void {
    this.invoiceService
      .getAll()
      .subscribe((invoices) => this.source.load(invoices));
  }
  onUserRowSelect(event) {
    this.selectedRows = event.selected;
  }
}
