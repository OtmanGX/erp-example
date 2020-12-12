import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ClientMockService } from '@TanglassCore/mock/ventes/client.mock.service';
import { Client } from '@TanglassCore/models/ventes/client.model';
import { ExcelService } from '@TanglassCore/mock/shared/excel.service';
import { ObjectRenderComponent } from '../../../shared/objects-render-component/object-render.component';

@Component({
  selector: 'ngx-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss'],
})
export class ListClientComponent implements OnInit {
  selectedMode: boolean = true;
  dataClient: Client[];
  selectedType: string;
  selectedRows = [];
  data: Client[];
  settings = {
    selectMode: 'multi',
    hideHeader: false,
    actions: false,
    columns: {
      nom: {
        title: 'Nom',
        type: 'custom',
        width: '150px',
        valuePrepareFunction: (cell, row) => {
          let data = { link: 'clients/fiche/', linkText: row.nom };
          return data;
        },
        renderComponent: ObjectRenderComponent,
      },
      id: {
        title: 'Réf',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return 'CLI000' + row.id;
        },
        width: '60px',
        sortDirection: 'desc',
        placeholder: 'search',
      },
      phone: {
        title: 'Numero',
        type: 'list',
        width: '200px',
      },

      addresses: {
        title: 'Address',
        type: 'string',
        width: '320px',
      },
      courriel: {
        title: 'Email',
        type: 'string',
        width: '320px',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private clientService: ClientMockService,
    private excelService: ExcelService
  ) {}

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.clientService
      .getAll()
      .subscribe((clients) => this.source.load(clients));
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onUserRowSelect(event) {
    this.selectedRows = event.selected;
    console.log(this.selectedRows);
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.data, 'Clients');
  }
}
