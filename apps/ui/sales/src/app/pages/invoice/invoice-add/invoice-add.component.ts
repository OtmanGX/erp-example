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
  DeliveryForm, InvoiceFacade
} from '@tanglass-erp/store/sales';
import { Store } from '@ngrx/store';
import * as ShortCompanieSelectors from '@TanglassStore/shared/lib/+state/short-company.selectors';
import * as CustomerSelectors from '@TanglassStore/contact/lib/selectors/customer.selectors';
import * as ContactSelectors from '@TanglassStore/contact/lib/selectors/contact.selectors';
import { map, take } from 'rxjs/operators';
import { of, combineLatest } from 'rxjs';
import { UpdatedInvoice } from '@tanglass-erp/core/sales';

@Component({
  selector: 'ngx-invoice-add',
  templateUrl: './invoice-add.component.html',
  styleUrls: ['./invoice-add.component.scss'],
})
export class InvoiceAddComponent extends PageForm {
  data = null;
  regConfig: FieldConfig[];
  _form: DynamicFormComponent;
  @ViewChild('form', { read: DynamicFormComponent, static: false })
  set form(value: DynamicFormComponent) {
   this._form = value;
   if (this._form)
      this._form.getField('deliveries').valueChanges.subscribe((fieldValue) => {
        if (fieldValue) {
          this.selectedDeliveries = this.deliveries.filter((e) => fieldValue.includes(e.id));
        }
      });
  }
  get form() {
    return this._form;
  }

  // Selectors
  companies$ = this.store.select(ShortCompanieSelectors.getAllShortCompany);
  customers$ = this.store.select(CustomerSelectors.getAllCustomers);
  contacts$ = this.store.select(ContactSelectors.getAllContacts);
  deliveries$ = this.deliveryFacade.allDelivery$;
  deliveries: DeliveryForm[];
  selectedDeliveries: DeliveryForm[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    private deliveryFacade: DeliveryFacade,
    private invoiceFacade: InvoiceFacade,
    private store: Store
  ) {
    super(activatedRoute);
  }

  ngOnInit() {
    super.ngOnInit();
    this.buildForm();
  }

  dispatchActions(): void {
    this.deliveryFacade.loaded$.pipe(take(1)).subscribe((value) => {
      if (!value) this.deliveryFacade.loadAllDelivery();
    });
    if (this.id)
      this.invoiceFacade.loadById(this.id);
    this.store.dispatch(ShortCompanieActions.loadShortCompany());
    this.store.dispatch(CustomerActions.loadCustomers());
    this.store.dispatch(ContactActions.loadContacts());
  }

  buildForm(): void {
    combineLatest(
      this.deliveries$,
      this.id ? this.invoiceFacade.selectedInvoice$ : of(null)
    ).subscribe(
      value => {
        this.deliveries = value[0];
        this.regConfig = regConfigInvoice(
          <UpdatedInvoice> value[1],
          this.deliveries,
          this.customers$,
          this.companies$.pipe(
            map((e) =>
              e.map((company) => ({ key: company.id, value: company.name }))
            )
          ),
          this.contacts$
        );
      }
    )
  }

  submit(formValue) {
    if (!this.id)
      this.invoiceFacade.addOne({
        ...formValue,
        deliveries: formValue.deliveries.map(e => ({delivery_id: e}))
      });
    else
      this.invoiceFacade.update({
        id: this.id,
        ...formValue
      })
  }
}