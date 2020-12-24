import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Companie } from '@TanglassCore/models/management/companie';
import { LocalDataSource } from 'ng2-smart-table';
import { PopCompaniesComponent } from './pop-companies/pop-companies.component';
@Component({
  selector: 'ngx-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  selectedRows = [];
  dataCompanie: Companie[] = [];
  source: LocalDataSource = new LocalDataSource();

  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {}

  settings = {
    selectMode: 'multi',
    hideHeader: false,
    actions: false,
    noDataMessage: ' No Data',
    columns: {
      name: {
        title: 'Raison Sociale',
        sortDirection: 'desc',
        type: 'string',
      },
      ICE: {
        title: 'ICE',
        sortDirection: 'desc',
        type: 'string',
      },
      IF: {
        title: 'IF',
        sortDirection: 'desc',
        type: 'string',
      },
      RC: {
        title: 'RC',
        sortDirection: 'desc',
        type: 'string',
      },
      CNSS: {
        title: 'CNSS',
        sortDirection: 'desc',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      phone: {
        title: 'Tél N°',
        type: 'string',
      },
      Fax: {
        title: 'Fax',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      salePoints: {
        title: 'Points de ventes',
        type: 'string',
      },
      users: {
        title: 'Employées',
        type: 'string',
      },
      webSite: {
        title: 'Site Web',
        type: 'string',
      },
    },
  };

  onUserRowSelect(event) {
    this.selectedRows = event.selected;
  }

  openPopUpUser(): void {
    this.dialogService
      .open(PopCompaniesComponent, {
        context: {
          title: 'Ajouter des Sociétés',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe({
        next: (companie) => {
          if (companie) {
            this.dataCompanie.push(companie);
            this.source.load(this.dataCompanie);
          }
        },
      });
  }
}
