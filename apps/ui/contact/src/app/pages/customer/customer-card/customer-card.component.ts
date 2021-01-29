import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { MatDialog } from '@angular/material/dialog';
import { PopCustomerComponent } from '../pop-customer/pop-customer.component';
import * as CustomerActions from '@TanglassStore/contact/lib/actions/customer.actions';
import { getSelectedCustomer } from '@TanglassStore/contact/lib/selectors/customer.selectors';
import { PopShortContactComponent } from '../../contact/pop-short-contact/pop-short-contact.component';
import { PopAddressComponent } from '../../components/pop-address/pop-address.component';
import { ModelCardComponent } from '@tanglass-erp/material';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { DetailedCustomer } from '@TanglassStore/contact/index';


const componentMapper = {
  address: PopAddressComponent,
  contact: PopShortContactComponent,
  customer: PopCustomerComponent
};

@Component({
  selector: 'ngx-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerCardComponent extends ModelCardComponent {
  title = "Client";
  gap = "50px";
  showMessage = 'afficher';
  hideMessage = 'cacher';
  stepContact = null;
  stepAddress = null;
  data$ = this.store.select(getSelectedCustomer)
    .pipe(takeUntil(this._onDestroy));

  contactPassedData = (contact) => [
    {label: 'Code', value: contact?.code},
    {label: 'Nom', value: contact?.name},
    {label: 'E-mail', value: contact?.mail, type: 'mail'},
    {label: 'Téléphone', value: contact?.phone, type: 'phone'},
    {label: 'Note', value: contact?.note},
  ]
  addressPassedData = (address) => [
    {label: 'Adresse', value: address?.address},
    {label: 'Ville', value: address?.city},
    {label: 'Code Postal', value: address?.zip},
  ]

  constructor(
    private store: Store<AppState>,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
  ) {
    super(route);
  }

  dispatch(): void {
    this.store.dispatch(CustomerActions.loadCustomerById({id: this.id}));
  }

  afterComplete() {
    this.cdRef.detectChanges();
  }

  passData(data: DetailedCustomer) {
    return [
      {label: 'Nom', value: data?.name},
      {label: 'Code', value: data?.code},
      {label: 'ICE', value: data?.ICE},
      {label: 'IF', value: data?.IF},
      {label: 'E-mail', value: data?.mail, type: 'mail'},
      {label: 'Téléphone', value: data?.phone, type: 'phone'},
      {label: 'Note', value: data?.note},
      {label: 'FAX', value: data?.FAX},
      {label: 'Site web', value: data?.website, type: 'link'},
    ];
  }

  async openDialog(model, data = {}) {
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

  trackByFn(index, item) {
    return index; // or item.id
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
