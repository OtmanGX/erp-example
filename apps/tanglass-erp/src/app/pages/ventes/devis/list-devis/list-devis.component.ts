import { Component, OnInit } from '@angular/core';
import { ExcelService } from '@TanglassCore/mock/shared/excel.service';
import { DevisMockService } from '@TanglassCore/mock/ventes/devis.mock.service';
import { LocalDataSource } from 'ng2-smart-table';
import { IDevis } from '@TanglassCore/models/ventes/devis.model';
import { DatePipe } from '@angular/common';
import { ObjectRenderComponent } from '../../../shared/objects-render-component/object-render.component';

@Component({
  selector: 'ngx-list-devis',
  templateUrl: './list-devis.component.html',
  styleUrls: ['./list-devis.component.scss'],
})
export class ListDevisComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();

  selectedRows = [];

  constructor(
    private excelService: ExcelService,
    private readonly devisService: DevisMockService,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getAllDevis();
  }

  getAllDevis(): void {
    this.devisService
      .getAll()
      .subscribe((allDevis) => this.source.load(allDevis));
  }
  settings = {
    selectMode: 'multi',
    hideHeader: false,
    actions: false,
    columns: {
      id: {
        title: 'Devis N°',
        type: 'custom',
        valuePrepareFunction: (cell, row: IDevis) => {
          let data = { link: 'devis/fiche/', linkText: 'DEV000' + row.id };
          return data;
        },
        renderComponent: ObjectRenderComponent,
        sortDirection: 'desc',
      },
      client: {
        title: 'Raison Sociale',
        type: 'html',
        valuePrepareFunction: (cell, row: IDevis) => {
          return row.formDevis.client.nom;
        },
      },
      idClient: {
        title: 'Code Client',
        type: 'html',
        valuePrepareFunction: (cell, row: IDevis) => {
          return 'CLI00' + row.formDevis.client.id;
        },
      },
      dateDevis: {
        title: 'Date ',
        type: 'string',
        valuePrepareFunction: (cell, row: IDevis) => {
          let date = this.datepipe.transform(
            row.formDevis.dateDevis,
            'dd/MM/yyyy'
          );
          return date;
        },
      },
      expirationDevis: {
        title: 'Expiration',
        type: 'string',
        valuePrepareFunction: (cell, row: IDevis) => {
          let date = this.datepipe.transform(
            row.formDevis.expirationDevis,
            'dd/MM/yyyy'
          );
          return date;
        },
      },
      companie: {
        title: 'Société',
        type: 'html',
        valuePrepareFunction: (cell, row: IDevis) => {
          return row.formDevis.companie;
        },
      },
      total_HT: {
        title: 'Montant HT',
        type: 'string',
      },
      tva: {
        title: 'TVA',
        type: 'string',
        width: '130px',
      },
      total_TTC: {
        title: 'Montant TTC',
        type: 'string',
        width: '130px',
      },
      status: {
        title: 'Status',
        type: 'html',
        valuePrepareFunction: (cell, row: IDevis) => {
          return row.formDevis.status;
        },
      },
    },
  };

  onUserRowSelect(event) {
    this.selectedRows = event.selected;
    console.log(this.selectedRows);
  }
}
