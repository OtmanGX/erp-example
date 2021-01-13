import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.scss']
})
export class ProviderCardComponent implements OnInit {
  title = "Fournisseur";
  gap = "50px";
  id: string;
  stepContact = null;
  stepAddress = null;
  data: any;
  passedData: any;
  contactPassedData: any;
  addressPassedData: any;
  otherData: any;

  constructor(
    private store: Store<AppState>,
    private location: Location
  ) {
    this.id = (<any>location.getState()).id;
    this.data = {};
    this.data.contacts = [{name: 'test'}, {name: 'test'}, {name: 'test'}, ];
    this.data.addresses = [{city: 'test'}, {city: 'test'}, {city: 'test'}, ];
    this.passedData = [
      {label: 'Nom', value: this.data?.name},
      {label: 'Note', value: this.data?.note},
      {label: 'Téléphone', value: this.data?.phone},
      {label: 'E-mail', value: this.data?.mail},
    ];
    this.contactPassedData = (contact) => [
      {label: 'Code', value: contact?.code},
      {label: 'Nom', value: contact?.name},
      {label: 'E-mail', value: contact?.mail},
      {label: 'Téléphone', value: contact?.phone},
      {label: 'Note', value: contact?.note},
    ];
    this.addressPassedData = (address) => [
      {label: 'Adresse', value: address?.address},
      {label: 'Ville', value: address?.city},
      {label: 'Code Postal', value: address?.zip},
    ];
    this.otherData = [
      [{label: 'Contacts', value: null}],
      [{label: 'Adresses', value: null}],
    ];
  }

  ngOnInit(): void {
  }

  // Contact Steps

  setStepContact(index: number) {
    this.stepContact = index;
  }

  nextStepContact() {
    this.stepContact++;
  }

  prevStepContact() {
    this.stepContact--;
  }

  // Address Steps

  setStepAddress(index: number) {
    this.stepAddress = index;
  }

  nextStepAddress() {
    this.stepAddress++;
  }

  prevStepAddress() {
    this.stepAddress--;
  }

  deleteContact(id) {
  }

  deleteAdresse(id) {
  }
}
