import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ClientMockService } from '@TanglassCore/mock/ventes/client.mock.service';
import { ContactMockService } from '@TanglassCore/mock/ventes/contact.mock.service';
import { Client } from '@TanglassCore/models/ventes/client.model';
import { Contact } from '@TanglassCore/models/ventes/contact.model';
import { statusDevisDirection } from '@TanglassCore/enums/ventes.enum';
import { FormDevis } from '@TanglassCore/models/ventes/devis.model';

@Component({
  selector: 'ngx-form-devis',
  templateUrl: './form-devis.component.html',
  styleUrls: ['./form-devis.component.scss'],
})
export class FormDevisComponent implements OnInit {
  devisForm: FormGroup;
  listClients: Client[] = [];
  listContacts: Contact[] = [];
  formValues: FormDevis = new FormDevis();
  @Input() disabled: boolean;
  @Output() sendData = new EventEmitter<any>();
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
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildDevisForm();
    if (!this.disabled) {
      this.getAllClients();
      this.getAllContacts();
    } else this.displayForm();
  }

  buildDevisForm(): void {
    this.devisForm = this.fb.group({
      client: ['', Validators.required],
      contact: [''],
      companie: ['', Validators.required],
      dateDevis: [new Date(), Validators.required],
      expirationDevis: [new Date()],
      status: [statusDevisDirection.Initial],
    });
  }
  displayForm(): void {
    if (this.devisForm) {
      this.devisForm.reset();
    }
    //Insert data to form inputs
    this.devisForm.patchValue({
      client: this.formValues.client,
      contact: this.formValues.contact,
      companie: this.formValues.companie,
      dateDevis: this.formValues.dateDevis,
      expirationDevis: this.formValues.expirationDevis,
      status: this.formValues.status,
    });
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
          return contacts;
        }
      },
    });
  }
  onItemSelect(item: any): void {
    var obj = this.listClients.filter(function (e) {
      return e.id == item.id;
    });
    this.devisForm.get('client').setValue(obj[0]);
    this.listContacts = this.devisForm.controls.client.value.contacts;
  }
}
