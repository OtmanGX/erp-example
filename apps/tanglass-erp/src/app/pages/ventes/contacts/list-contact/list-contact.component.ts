import { Component, OnInit } from '@angular/core';
import { ExcelService } from '@TanglassCore/mock/shared/excel.service';

import { LocalDataSource } from 'ng2-smart-table';
import { ObjectRenderComponent } from '../../../shared/objects-render-component/object-render.component';
import { ContactMockService } from '@TanglassCore/mock/ventes/contact.mock.service';
import { Contact } from '@TanglassCore/models/ventes/contact.model';
@Component({
  selector: 'ngx-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss'],
})
export class ListContactComponent implements OnInit {
  dataContacts: Contact[];
  selectedRows = [];
  source: LocalDataSource = new LocalDataSource();

  constructor(
    private excelService: ExcelService,
    private contactService: ContactMockService
  ) {}

  ngOnInit(): void {
    this.getContats();
  }
  getContats(): void {
    this.contactService
      .getAll()
      .subscribe((contacts) => this.source.load(contacts));
  }
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
          let data = {
            link: 'contacts/fiche/',
            linkText: row.nom + ' ' + row.prénom,
          };
          return data;
        },
        renderComponent: ObjectRenderComponent,
      },
      id: {
        title: 'Réf',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return 'CON000' + row.id;
        },
        sortDirection: 'desc',
      },
      fonction: {
        title: 'Fonction',
        type: 'string',
      },

      phone: {
        title: 'Tel',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      address: {
        title: 'Adresse',
        type: 'string',
      },
    },
  };
  onUserRowSelect(event) {
    this.selectedRows = event.selected;
    console.log(this.selectedRows);
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.dataContacts, 'Clients');
  }
}
