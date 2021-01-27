import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@tanglass-erp/store/app';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { PopProviderComponent } from '../pop-provider/pop-provider.component';
import { getSelectedProvider } from '@TanglassStore/contact/lib/selectors/provider.selectors';
import { loadProviderById } from '@TanglassStore/contact/lib/actions/provider.actions';
import { Subscription } from 'rxjs';
import { PopAddressComponent } from '../../components/pop-address/pop-address.component';
import { PopShortContactComponent } from '../../contact/pop-short-contact/pop-short-contact.component';

const componentMapper = {
  address: PopAddressComponent,
  contact: PopShortContactComponent,
  provider: PopProviderComponent
};

@Component({
  selector: 'ngx-provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProviderCardComponent implements OnInit, OnDestroy {
  title = "Fournisseur";
  gap = "50px";
  showMessage = 'afficher';
  hideMessage = 'cacher';
  id: string;
  stepContact = null;
  stepAddress = null;
  data$ = this.store.select(getSelectedProvider);
  data: any;
  dataSubscription: Subscription;
  passedData: any;

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
    public dialog: MatDialog,
    private location: Location,
    private cdRef: ChangeDetectorRef,
  ) {
    this.id = (<any>location.getState()).id;
  }

  ngOnInit(): void {
    this.store.dispatch(loadProviderById({id: this.id}));
    this.dataSubscription = this.data$.subscribe(value => {
      this.data = value;
      this.passedData = [
        {label: 'Nom', value: this.data?.name},
        {label: 'Note', value: this.data?.note},
        {label: 'Téléphone', value: this.data?.phone, type: 'phone'},
        {label: 'E-mail', value: this.data?.mail, type: 'mail'},
      ];
      this.cdRef.detectChanges();
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
          case 'provider': // Update
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
