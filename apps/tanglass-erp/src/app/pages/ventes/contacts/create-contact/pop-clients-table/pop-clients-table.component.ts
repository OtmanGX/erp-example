import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { ClientMockService } from '@TanglassCore/mock/ventes/client.mock.service';
import { Client } from '@TanglassCore/models/ventes/client.model';

@Component({
  selector: 'ngx-pop-clients-table',
  templateUrl: './pop-clients-table.component.html',
  styleUrls: ['./pop-clients-table.component.scss'],
})
export class PopClientsTableComponent implements OnInit {
  @Input() title: string;
  dataClients: Client[];
  selectedRows: Client[] = [];
  sourceClients: LocalDataSource = new LocalDataSource();
  constructor(
    protected ref: NbDialogRef<PopClientsTableComponent>,
    private clientService: ClientMockService
  ) {}

  settings = {
    selectMode: 'multi',
    hideHeader: false,
    actions: false,
    columns: {
      nom: {
        title: 'Nom',
        type: 'string',
      },
      id: {
        title: 'Code',
        type: 'number',
        sortDirection: 'desc',
        placeholder: 'search',
      },
      phone: {
        title: 'Numero',
        type: 'list',
      },

      addresses: {
        title: 'Address',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
    },
  };
  ngOnInit(): void {
    this.getClients();
  }
  getClients() {
    this.clientService
      .getAll()
      .subscribe((clients) => this.sourceClients.load(clients));
  }
  OnConfirm() {
    this.ref.close(this.selectedRows);
  }
  closePopup() {
    this.ref.close();
  }
  onUserRowSelect(event) {
    this.selectedRows = event.selected;
  }
}
