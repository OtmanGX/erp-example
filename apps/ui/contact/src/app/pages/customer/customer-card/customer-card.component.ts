import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { PopCustomerComponent } from '../pop-customer/pop-customer.component';
import * as CustomerActions from '@TanglassStore/contact/lib/actions/customer.actions';
import { getSelectedCustomer } from '@TanglassStore/contact/lib/selectors/customer.selectors';
import { Subscription } from 'rxjs';
import { PopShortContactComponent } from '../../contact/pop-short-contact/pop-short-contact.component';
import { PopAddressComponent } from '../../components/pop-address/pop-address.component';


const componentMapper = {
  address: PopAddressComponent,
  contact: PopShortContactComponent,
  customer: PopCustomerComponent
};

@Component({
  selector: 'ngx-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit, OnDestroy {
  title = "Client";
  gap = "50px";
  id: string;
  stepContact = null;
  stepAddress = null;
  data$ = this.store.select(getSelectedCustomer);
  data: any;
  dataSubscription: Subscription;
  passedData: any;


  contactPassedData = (contact) => [
    {label: 'Code', value: contact?.code},
    {label: 'Nom', value: contact?.name},
    {label: 'E-mail', value: contact?.mail},
    {label: 'Téléphone', value: contact?.phone},
    {label: 'Note', value: contact?.note},
  ];
  addressPassedData = (address) => [
    {label: 'Adresse', value: address?.address},
    {label: 'Ville', value: address?.city},
    {label: 'Code Postal', value: address?.zip},
  ];
  otherData = [
    [{label: 'Contacts', value: null}],
    [{label: 'Adresses', value: null}],
  ];

  constructor(
    private store: Store<AppState>,
    private location: Location,
    public dialog: MatDialog,
  ) {
    this.id = (<any>location.getState()).id;
  }

  ngOnInit(): void {
    this.store.dispatch(CustomerActions.loadCustomerById({id: this.id}));
    this.dataSubscription = this.data$.subscribe(value => {
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

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

}
