import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';

import { ClientMockService } from '@TanglassCore/mock/ventes/client.mock.service';
import { Client } from '@TanglassCore/models/ventes/client.model';
import { ContactMockService } from '@TanglassCore/mock/ventes/contact.mock.service';
import { Contact } from '@TanglassCore/models/ventes/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';

import { PopContactFormComponent } from './pop-contact-form/pop-contact-form.component';
import { PopContactsTableComponent } from './pop-contacts-table/pop-contacts-table.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss'],
})
export class CreateClientComponent implements OnInit {
  id: number;
  submitted = false;
  ClientForm: FormGroup;
  client: Client;
  msg;
  disabled: boolean = false;
  sourceContacts: LocalDataSource = new LocalDataSource();
  createdContact: Contact[] = [];
  joinedContact: Contact[] = [];
  dataContact: Contact[] = [];
  constructor(
    private fb: FormBuilder,
    private clientService: ClientMockService,
    private contactService: ContactMockService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.buildClientFrom();
    // Read the client ID from ROUTE
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getClient(this.id);
      this.disabled = true;
    }
  }

  buildClientFrom() {
    this.ClientForm = this.fb.group({
      type: ['', Validators.required],
      nom: ['', Validators.required],
      ICE: [''],
      IF: [''],
      addresses: this.fb.array([this.fb.control('')]),
      phone: ['', Validators.required],
      Fax: [''],
      email: [''],
      webSite: [''],
      vendeur: [''],
      département: [''],
      note: [''],
      contacts: [],
    });
  }

  enableForm() {
    this.ClientForm.enable();
    this.disabled = false;
  }

  getClient(id: number): void {
    this.clientService.getOneById(id).subscribe({
      next: (client: Client) => this.displayClient(client),
    });
  }

  displayClient(client: Client) {
    if (this.ClientForm) {
      this.ClientForm.reset();
    }
    this.client = client;
    //Insert data to form inputs
    this.ClientForm.patchValue({
      type: this.client.type,
      nom: this.client.nom,
      ICE: this.client.ICE,
      IF: this.client.IF,
      addresses: this.client.addresses,
      phone: this.client.phone,
      Fax: this.client.Fax,
      email: this.client.email,
      webSite: this.client.webSite,
      note: this.client.note,
      vendeur: this.client.vendeur,
      département: this.client.département,
    });
    this.ClientForm.setControl(
      'addresses',
      this.fb.array(this.client.addresses || [])
    );
    if (this.client.contacts) {
      this.dataContact = this.client.contacts;
      this.sourceContacts.load(this.client.contacts);
    }

    this.ClientForm.disable();
  }

  get type(): FormControl {
    return <FormControl>this.ClientForm.get('type');
  }
  get addresses(): FormArray {
    return <FormArray>this.ClientForm.get('addresses');
  }
  addAddress(): void {
    if (!this.disabled) {
      this.addresses.push(this.fb.control(''));
    }
  }
  removeAdress(i) {
    this.addresses.removeAt(i);
  }
  openPopUpForm() {
    this.dialogService
      .open(PopContactFormComponent, {
        context: {
          title: 'Contact',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe({
        next: (Contact) => {
          if (Contact) {
            this.createdContact.push(Contact);
            this.dataContact.push(Contact);
            this.sourceContacts.load(this.dataContact);
          }
        },
      });
  }
  openPopUpTable() {
    this.dialogService
      .open(PopContactsTableComponent, {
        context: {
          title: 'Contacts',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe({
        next: (Contacts) => {
          if (Contacts) {
            Contacts.forEach((element) => {
              this.joinedContact.push(element);
              this.dataContact.push(element);
              this.sourceContacts.load(this.dataContact);
            });
          }
        },
      });
  }
  // Settings for adding contacts in the Table//
  settingsContacts = {
    hideHeader: false,
    hideSubHeader: true,
    actions: false,
    columns: {
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
  onSubmit(): void {
    if (this.createdContact) {
      this.createdContact.forEach((element) => {
        element.clients.push(this.ClientForm.value);
        this.contactService.addNewOne(element).subscribe({
          next: () => this.showToast('Contact AJOUTEE', 'top-right', 'success'),
        });
      });
    }
    if (this.joinedContact) {
      console.log(this.joinedContact);
      this.joinedContact.forEach((element) => {
        element.clients.push(this.ClientForm.value);
        this.contactService.updateOne(element).subscribe({
          next: () => this.showToast('Contact updated', 'top-right', 'success'),
        });
      });
    }
    if (this.dataContact) {
      this.ClientForm.controls.contacts.setValue(this.dataContact);
    }
    if (!this.id) {
      this.client = this.ClientForm.value;
      this.clientService.addNewOne(this.client).subscribe({
        next: () => this.onSave(),
      });
    } else {
      this.saveUpdateClient();
    }
    this.submitted = true;
  }

  saveUpdateClient(): void {
    if (this.ClientForm.valid) {
      if (this.ClientForm.dirty) {
        const c = { ...this.client, ...this.ClientForm.value };
        this.clientService.updateOne(c).subscribe({
          next: () => this.onSave(),
        });
      } else {
        this.onSave();
      }
    } else {
      this.alerteValidation();
    }
  }

  onSave() {
    this.ClientForm.reset();
    this.showToast('CLIENT AJOUTEE', 'top-right', 'success');
    //this.router.navigate(["../", "list"], { relativeTo: this.route });
    this.router.navigateByUrl('clients/list');
  }

  creatNewClient() {
    this.id = 0;
    this.ClientForm.reset();
    this.disabled = false;
    this.createdContact = [];
    this.joinedContact = [];
    this.dataContact = [];
    this.sourceContacts.load(this.dataContact);
    this.enableForm();
    this.router.navigate(['../', 'create'], { relativeTo: this.route });
  }

  alerteValidation() {}
  resetForm() {
    this.ClientForm.reset();
  }

  showToast(msg, position, status) {
    this.toastrService.show(status || 'Success', `${msg}`, {
      position,
      status,
    });
  }
}
