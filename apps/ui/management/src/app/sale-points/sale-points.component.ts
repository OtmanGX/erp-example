import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SalePoint } from '@TanglassCore/models/management/sales-points';
import { LocalDataSource } from 'ng2-smart-table';
import { PopSalePointsComponent } from './pop-sale-points/pop-sale-points.component';
@Component({
  selector: 'ngx-sale-points',
  templateUrl: './sale-points.component.html',
  styleUrls: ['./sale-points.component.scss'],
})
export class SalePointsComponent implements OnInit {
  selectedRows = [];
  dataSalesPoints: SalePoint[] = [];
  source: LocalDataSource = new LocalDataSource();

  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {}

  settings = {
    selectMode: 'multi',
    hideHeader: false,
    actions: false,
    noDataMessage: ' No Data',
    columns: {
      id: {
        title: 'Code',
        sortDirection: 'desc',
        type: 'html',
        valuePrepareFunction: (cell, row: SalePoint) => {
          return 'USER' + row.id;
        },
      },
      name: {
        title: 'Nom',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      phone: {
        title: 'tél N°',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      Fax: {
        title: 'Fax',
        type: 'string',
      },
      companie: {
        title: 'Société',
        type: 'string',
      },
      users: {
        title: 'Employées',
        type: 'string',
      },
    },
  };

  onUserRowSelect(event) {
    this.selectedRows = event.selected;
  }
  openPopUpUser(): void {
    this.dialogService
      .open(PopSalePointsComponent, {
        context: {
          title: 'Ajouter des points de ventes',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe({
        next: (salePoint) => {
          if (salePoint) {
            this.dataSalesPoints.push(salePoint);
            this.source.load(this.dataSalesPoints);
          }
        },
      });
  }
}
