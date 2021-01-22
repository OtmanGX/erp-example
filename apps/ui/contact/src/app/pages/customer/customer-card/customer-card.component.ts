import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { PopContactComponent } from '../../contact/pop-contact/pop-contact.component';
import { PopCustomerComponent } from '../pop-customer/pop-customer.component';
import * as CustomerActions from '@TanglassStore/contact/lib/actions/customer.actions';
import { getSelectedCustomer } from '@TanglassStore/contact/lib/selectors/customer.selectors';


const componentMapper = {
  address: PopContactComponent,
  contact: PopContactComponent,
  customer: PopCustomerComponent
};

@Component({
  selector: 'ngx-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit {
  title = "Client";
  gap = "50px";
  id: string;
  stepContact = null;
  stepAddress = null;
  data$ = this.store.select(getSelectedCustomer);
  data: any;
  passedData: any;
  contactPassedData: any;
  addressPassedData: any;
  otherData: any;

  constructor(
    private store: Store<AppState>,
    private location: Location,
    public dialog: MatDialog,
  ) {
    this.id = (<any>location.getState()).id;
  }

  ngOnInit(): void {
    console.log(this.id);
    this.data$.subscribe(value => {
      console.log(value);
      this.data = value;
      this.passedData = [
        {label: 'Nom', value: value?.name},
        {label: 'Code', value: value?.code},
        {label: 'ICE', value: value?.ICE},
        {label: 'IF', value: value?.IF},
        {label: 'E-mail', value: value?.mail},
        {label: 'Téléphone', value: value?.phone},
        {label: 'Note', value: value?.note},
        {label: 'FAX', value: value?.FAX},
        {label: 'Site web', value: value?.website},
      ];
    });
    this.store.dispatch(CustomerActions.loadCustomerById({id: this.id}));

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
    // this.data.contacts = [{name: 'test'}, {name: 'test'}, {name: 'test'}, ];
    // this.data.addresses = [{city: 'test'}, {city: 'test'}, {city: 'test'}, ];

  }

  openDialog(model, data = {}) {
    const component = componentMapper[model];
    const dialogRef = this.dialog.open(component, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Store Add/Update action dispatching
        switch (model) {
          case 'address': // Add
            break;
          case 'contact': // Add
            break;
          case 'customer': // Update
            break;
        }
      }
    });
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
