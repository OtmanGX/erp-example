import { Component, OnInit } from '@angular/core';
import { Delivery } from '@TanglassCore/models/ventes/delivery.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DeliveryMockService } from '@TanglassCore/mock/ventes/delivery.mock.service';
import { ClientMockService } from '@TanglassCore/mock/ventes/client.mock.service';
import { ContactMockService } from '@TanglassCore/mock/ventes/contact.mock.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Client } from '@TanglassCore/models/ventes/client.model';
import { Contact } from '@TanglassCore/models/ventes/contact.model';
import {
  companiesDirection,
  statusDevisDirection,
  PaiementModeDirection,
  LivraisonModesDirection,
  companiesForDeliveryDirection,
} from '@TanglassCore/enums/ventes.enum';
import { nextTick } from 'process';

@Component({
  selector: 'ngx-invoice-fiche',
  templateUrl: './invoice-fiche.component.html',
  styleUrls: ['./invoice-fiche.component.scss'],
})
export class InvoiceFicheComponent implements OnInit {
  deliveries: Delivery[];
  done: Delivery[];
  invoiceForm: FormGroup;
  listClients: Client[] = [];
  listContacts: Contact[] = [];
  listDeliveries: Delivery[] = [];
  selectedDeliveries: Delivery[] = [];
  listFilteredDeliveries: Delivery[] = [];
  companiesOptions: string[];
  paiementModes: string[];

  dropSettingsForCommande: IDropdownSettings = {
    idField: 'id',
    textField: 'id',
    allowSearchFilter: true,
    maxHeight: 100,
    closeDropDownOnSelection: true,
  };
  dropdownSettings: IDropdownSettings = {
    singleSelection: true,
    idField: 'id',
    textField: 'nom',
    allowSearchFilter: true,
    maxHeight: 100,
    closeDropDownOnSelection: true,
  };
  constructor(
    private readonly clientService: ClientMockService,
    private readonly contactService: ContactMockService,
    private deliveryService: DeliveryMockService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildInvoiceForm();
    this.companiesOptions = Object.values(companiesDirection);
    this.paiementModes = Object.values(PaiementModeDirection);
    this.getAllClients();
    this.getAllContacts();
    this.getAllDeliveries();
  }
  confirm() {}
  getAllDeliveries() {
    this.deliveryService.getAll().subscribe((deliveries) => {
      this.deliveries = deliveries;
    });
  }
  buildInvoiceForm(): void {
    this.invoiceForm = this.fb.group({
      client: [, Validators.required],
      contact: [],
      companie: ['', Validators.required],
      date: [new Date()],
      nature: ['', Validators.required],
      paiementMode: ['', Validators.required],
      deliveries: [[], Validators.required],
    });
  }
  onDrop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getAllClients(): void {
    this.clientService.getAll().subscribe({
      next: (clients) => {
        if (clients) {
          this.listClients = clients;
        }
      },
    });
  }
  getAllContacts(): void {
    this.contactService.getAll().subscribe({
      next: (contacts) => {
        if (contacts) {
          this.listContacts = contacts;
        }
      },
    });
  }
  onSelectClient(item: Client): void {
    var obj = this.listClients.filter(function (e) {
      return e.id == item.id;
    });
    this.invoiceForm.get('client').setValue(obj[0]);
    this.listContacts = this.invoiceForm.controls.client.value.contacts;
    this.deliveryService
      .getDeliveryByClient(item.id)
      .subscribe((deliveries) => {
        if (this.invoiceForm.get('companie').value) {
          this.listFilteredDeliveries = deliveries;
        }
      });
  }

  onChoosingCompanie(companie): void {
    console.log(companie);
    this.listFilteredDeliveries = this.listFilteredDeliveries.filter(function (
      e: Delivery
    ) {
      return e.formDelivery.companie == companie;
    });
  }
}
