import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ClientMockService } from '@TanglassCore/mock/ventes/client.mock.service';
import { ContactMockService } from '@TanglassCore/mock/ventes/contact.mock.service';
import { Client } from '@TanglassCore/models/ventes/client.model';
import { Contact } from '@TanglassCore/models/ventes/contact.model';
import { statusDevisDirection } from '@TanglassCore/enums/ventes.enum';
import { FormCommande } from '@TanglassCore/models/ventes/commande.model';

@Component({
  selector: 'ngx-form-commande',
  templateUrl: './form-commande.component.html',
  styleUrls: ['./form-commande.component.scss'],
})
export class FormCommandeComponent implements OnInit {
  commandeForm: FormGroup;
  listClients: Client[] = [];
  listContacts: Contact[] = [];
  formValues: FormCommande = new FormCommande();

  @Output() sendData = new EventEmitter<any>();
  @Input() disabled: boolean;

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
    this.buildCommandeForm();
    if (!this.disabled) {
      this.getAllClients();
      this.getAllContacts();
    } else this.displayForm();
  }

  buildCommandeForm() {
    this.commandeForm = this.fb.group({
      client: ['', Validators.required],
      contact: [''],
      companie: ['', Validators.required],
      dateCommande: [new Date()],
      delay: [new Date()],
      status: [statusDevisDirection.Initial],
    });
  }
  displayForm(): void {
    if (this.commandeForm) {
      this.commandeForm.reset();
    }
    //Insert data to form inputs
    this.commandeForm.patchValue({
      client: this.formValues.client,
      contact: this.formValues.contact,
      companie: this.formValues.companie,
      dateCommande: this.formValues.dateCommande,
      delay: this.formValues.delay,
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
  onItemSelect(item: any) {
    var obj = this.listClients.filter(function (e) {
      return e.id == item.id;
    });
    this.commandeForm.get('client').setValue(obj[0]);
    this.listContacts = this.commandeForm.controls.client.value.contacts;
  }
}
