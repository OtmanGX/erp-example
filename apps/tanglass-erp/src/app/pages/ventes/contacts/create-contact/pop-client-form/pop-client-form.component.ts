import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Client } from '@TanglassCore/models/ventes/client.model';
@Component({
  selector: 'ngx-pop-client-form',
  templateUrl: './pop-client-form.component.html',
  styleUrls: ['./pop-client-form.component.scss'],
})
export class PopClientFormComponent implements OnInit {
  @Input() title: string;
  ClientForm: FormGroup;
  client: Client;
  categorieList = ['Client', 'Fournisseur', 'Employé'];
  selectedcategories = [];
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true,
    maxHeight: 100,
  };
  constructor(
    protected ref: NbDialogRef<PopClientFormComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildClientFrom();
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
      contacts: [[]],
    });
  }

  get addresses(): FormArray {
    return <FormArray>this.ClientForm.get('addresses');
  }
  addAddress(): void {
    this.addresses.push(this.fb.control(''));
  }
  removeAdress(i) {
    this.addresses.removeAt(i);
  }
  closePopup() {
    this.ClientForm.reset();
    this.ref.close();
  }

  OnConfirm(): void {
    this.client = this.ClientForm.value;
    this.ref.close(this.client);
  }
}
