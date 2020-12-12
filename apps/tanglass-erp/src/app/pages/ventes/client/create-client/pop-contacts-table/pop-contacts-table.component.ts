import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ContactMockService } from '@TanglassCore/mock/ventes/contact.mock.service';
import { Contact } from '@TanglassCore/models/ventes/contact.model';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-pop-contacts-table',
  templateUrl: './pop-contacts-table.component.html',
  styleUrls: ['./pop-contacts-table.component.scss'],
})
export class PopContactsTableComponent implements OnInit {
  @Input() title: string;
  selectedRows: Contact[] = [];
  allContacts: Contact[];
  source: LocalDataSource = new LocalDataSource();
  constructor(
    protected ref: NbDialogRef<PopContactsTableComponent>,
    private contactService: ContactMockService
  ) {}

  ngOnInit(): void {
    this.getContacts();
  }
  getContacts(): void {
    this.contactService
      .getAll()
      .subscribe((contacts) => this.source.load(contacts));
  }
  settings = {
    selectMode: 'multi',
    hideHeader: false,
    actions: false,
    columns: {
      id: {
        title: 'Réf',
        type: 'number',
        sortDirection: 'desc',
        width: '60px',
      },
      fonction: {
        title: 'Fonction',
        type: 'string',
      },
      nom: {
        title: 'Nom',
        type: 'string',
      },
      tel: {
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
  closePopup() {
    this.ref.close();
  }
  confirm() {
    this.ref.close(this.selectedRows);
  }
}
