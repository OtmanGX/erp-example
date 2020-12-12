import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { PopClientFormComponent } from './pop-client-form/pop-client-form.component';
import { PopClientsTableComponent } from './pop-clients-table/pop-clients-table.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { ClientMockService } from '@TanglassCore/mock/ventes/client.mock.service';
import { Client } from '@TanglassCore/models/ventes/client.model';
import { ContactMockService } from '@TanglassCore/mock/ventes/contact.mock.service';
import { Contact } from '@TanglassCore/models/ventes/contact.model';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss'],
})
export class CreateContactComponent implements OnInit {
  disabled = false;
  id: number;
  submitted = false;
  ContactForm: FormGroup;
  contact: Contact;
  sourceClients: LocalDataSource = new LocalDataSource();
  createdClient: Client[] = [];
  joinedClient: Client[] = [];
  dataClient: Client[] = [];
  constructor(
    private fb: FormBuilder,
    private dialogService: NbDialogService,
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactMockService,
    private clientService: ClientMockService,
    private toastrService: NbToastrService
  ) {}
  settings = {
    selectMode: 'multi',
    hideHeader: false,
    actions: false,
    columns: {
      nom: {
        title: 'Nom',
        type: 'string',
        width: '150px',
      },
      id: {
        title: 'Code',
        type: 'number',
        width: '60px',
        sortDirection: 'desc',
        placeholder: 'search',
      },
      phone: {
        title: 'Numero',
        type: 'string',
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
  ngOnInit(): void {
    this.buildContactForm();

    // Read the client ID from ROUTE
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getContact(this.id);
      this.disabled = true;
    }
  }

  buildContactForm() {
    this.ContactForm = this.fb.group({
      nom: ['', Validators.required],
      prénom: [''],
      civilité: [''],
      fonction: [''],
      address: [''],
      phone: [''],
      Fax: [''],
      email: [''],
      note: [''],
      clients: [],
    });
  }
  enableForm() {
    this.ContactForm.enable();
    this.disabled = false;
  }
  getContact(id: number): void {
    this.contactService.getOneById(id).subscribe({
      next: (contact: Contact) => this.displayContact(contact),
    });
  }
  displayContact(contact: Contact) {
    if (this.ContactForm) {
      this.ContactForm.reset();
    }
    this.contact = contact;
    //Insert data to form inputs
    this.ContactForm.patchValue({
      nom: this.contact.nom,
      prénom: this.contact.prénom,
      civilité: this.contact.civilité,
      fonction: this.contact.fonction,
      address: this.contact.address,
      phone: this.contact.phone,
      Fax: this.contact.Fax,
      email: this.contact.email,
      note: this.contact.note,
    });
    if (this.contact.clients) {
      this.dataClient = this.contact.clients;
      this.sourceClients.load(this.contact.clients);
    }

    this.ContactForm.disable();
  }

  openPopUpForm() {
    this.dialogService
      .open(PopClientFormComponent, {
        context: {
          title: 'Client',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe({
        next: (Client) => {
          if (Client) {
            this.createdClient.push(Client);
            this.dataClient.push(Client);
            this.sourceClients.load(this.dataClient);
          }
        },
      });
  }

  openPopUpTable() {
    this.dialogService
      .open(PopClientsTableComponent, {
        context: {
          title: 'Clients',
        },
        closeOnBackdropClick: false,
      })
      .onClose.subscribe({
        next: (Clients) => {
          if (Clients) {
            Clients.forEach((element) => {
              this.joinedClient.push(element);
              this.dataClient.push(element);
              this.sourceClients.load(this.dataClient);
            });
          }
        },
      });
  }

  onSubmit(): void {
    if (this.createdClient) {
      this.createdClient.forEach((element) => {
        element.contacts.push(this.ContactForm.value);
        this.clientService.addNewOne(element).subscribe({
          next: () => this.showToast('Client AJOUTEE', 'top-right', 'success'),
        });
      });
    }
    if (this.joinedClient) {
      this.joinedClient.forEach((element) => {
        element.contacts.push(this.ContactForm.value);
        this.clientService.updateOne(element).subscribe({
          next: () => this.showToast('Client updated', 'top-right', 'success'),
        });
      });
    }
    if (this.dataClient) {
      this.ContactForm.controls.clients.setValue(this.dataClient);
    }
    if (!this.id) {
      this.submitted = true;
      this.contact = this.ContactForm.value;
      this.contactService.addNewOne(this.contact).subscribe({
        next: () => this.onSave(),
      });
    } else {
      this.saveUpdateContact();
    }
  }
  saveUpdateContact(): void {
    if (this.ContactForm.valid) {
      if (this.ContactForm.dirty) {
        const c = { ...this.contact, ...this.ContactForm.value };
        this.contactService.updateOne(c).subscribe({
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
    this.ContactForm.reset();
    this.showToast('Contact AJOUTEE', 'top-right', 'success');
    this.router.navigate(['../', 'list'], { relativeTo: this.route });
  }
  creatNewContact() {
    this.ContactForm.reset();
    this.disabled = false;
    this.enableForm();
    this.router.navigate(['../', 'create'], { relativeTo: this.route });
  }
  alerteValidation() {}
  resetForm() {
    this.ContactForm.reset();
  }
  showToast(msg, position, status) {
    this.toastrService.show(status || 'Success', `${msg}`, {
      position,
      status,
    });
  }
}
