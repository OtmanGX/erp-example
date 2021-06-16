import { Component, ViewChild } from '@angular/core';
import {
  DynamicFormComponent,
  FieldConfig,
  PageForm,
} from '@tanglass-erp/material';
import { ActivatedRoute } from '@angular/router';
import { regConfigInvoice } from '@TanglassUi/sales/utils/forms';
import * as ShortCompanieActions from '@TanglassStore/shared/lib/+state/short-company.actions';
import * as CustomerActions from '@TanglassStore/contact/lib/actions/customer.actions';
import * as ContactActions from '@TanglassStore/contact/lib/actions/contact.actions';
import {
  DeliveryFacade,
  DeliveryForm, DeliveryStatus,
  InvoiceFacade
} from '@tanglass-erp/store/sales';
import { Store } from '@ngrx/store';
import * as ShortCompanieSelectors from '@TanglassStore/shared/lib/+state/short-company.selectors';
import * as CustomerSelectors from '@TanglassStore/contact/lib/selectors/customer.selectors';
import * as ContactSelectors from '@TanglassStore/contact/lib/selectors/contact.selectors';
import { filter, map, take } from 'rxjs/operators';
import { of, combineLatest } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.scss'],
})
export class InvoiceAddComponent extends PageForm {
  data = null; // Data to pass to the form
  regConfig: FieldConfig[];
  _form: DynamicFormComponent;
  @ViewChild('form', { read: DynamicFormComponent, static: false })
  set form(value: DynamicFormComponent) {
    // Form Setter
    this._form = value;
    if (this._form)
      this._form.getField('deliveries').valueChanges.subscribe((fieldValue) => {
        if (fieldValue) {
          this.selectedDeliveries = this.deliveries.filter((e) =>
            fieldValue.includes(e.id)
          );
        }
      });
  }
  get form() {
    // Form getter
    return this._form;
  }

  // Selectors
  companies$ = this.store.select(ShortCompanieSelectors.getAllShortCompany);
  customers$ = this.store.select(CustomerSelectors.getAllCustomers);
  contacts$ = this.store.select(ContactSelectors.getAllContacts);
  deliveries$ = this.deliveryFacade.allDelivery$.pipe(
    map(
      e => e.filter(item => item.status === DeliveryStatus.NOT_INVOICED)
    )
  );
  deliveries: DeliveryForm[];
  selectedDeliveries: DeliveryForm[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    private deliveryFacade: DeliveryFacade,
    private invoiceFacade: InvoiceFacade,
    private store: Store,
    private location: Location
  ) {
    super(activatedRoute);
  }

  ngOnInit() {
    super.ngOnInit();
    !this.id && this.getState();
    this.buildForm();
  }

  getState() {
    const deliveries = (<any>this.location.getState())?.deliveries;
    this.data = { deliveries };
  }

  dispatchActions(): void {
    this.deliveryFacade.loaded$.pipe(take(1)).subscribe((value) => {
      if (!value) this.deliveryFacade.loadAllDelivery();
    });
    if (this.id) this.invoiceFacade.loadById(this.id);
    this.store.dispatch(ShortCompanieActions.loadShortCompany());
    this.store.dispatch(CustomerActions.loadCustomers());
    this.store.dispatch(ContactActions.loadContacts());
  }

  buildForm(): void {
    combineLatest(
      this.deliveries$,
      this.id ? this.invoiceFacade.selectedInvoice$ : of(this.data)
    ).subscribe((value) => {
      this.deliveries = value[0];
      this.regConfig = regConfigInvoice(
        value[1],
        this.deliveries,
        this.customers$,
        this.companies$.pipe(
          map((e) =>
            e.map((company) => ({ key: company.id, value: company.name }))
          )
        ),
        this.contacts$
      );
    });
  }

  submit(formValue) {
    if (!this.id)
      this.invoiceFacade.addOne({
        ...formValue,
        deliveries: formValue.deliveries.map((e) => ({ delivery_id: e })),
      });
    else
      this.invoiceFacade.update({
        id: this.id,
        ...formValue,
      });
  }
}
