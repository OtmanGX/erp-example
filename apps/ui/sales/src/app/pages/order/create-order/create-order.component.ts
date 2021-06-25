import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersFacade } from "@tanglass-erp/store/sales";
import { DraftFacade } from "@tanglass-erp/store/sales";
import { DynamicFormComponent, FieldConfig } from '@tanglass-erp/material';
import * as ShortCompanieSelectors from '@TanglassStore/shared/lib/+state/short-company.selectors';
import * as ShortCompanieActions from '@TanglassStore/shared/lib/+state/short-company.actions';
import { regConfigDraftInfos } from '@TanglassUi/sales/utils/forms';

import * as CustomerActions from '@TanglassStore/contact/lib/actions/customer.actions';
import * as CustomerSelectors from '@TanglassStore/contact/lib/selectors/customer.selectors';
import * as ContactActions from '@TanglassStore/contact/lib/actions/contact.actions';
import * as ContactSelectors from '@TanglassStore/contact/lib/selectors/contact.selectors';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ProductDraftFacade, Amount, PaymentsFacade } from "@tanglass-erp/store/sales";

@Component({
  selector: 'ngx-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  orderPayments$ = this.paymentFacade.orderPayments$;

  regConfig: FieldConfig[];
  companies$ = this.store.select(ShortCompanieSelectors.getAllShortCompany);
  customer$ = this.store.select(CustomerSelectors.getAllCustomers);
  contacts$ = this.store.select(ContactSelectors.getAllContacts);
  dataSub: Subscription;
  draft_id;
  @ViewChild('order_form', { read: DynamicFormComponent }) orderFormComponent: DynamicFormComponent;
  get orderForm() {
    return this.orderFormComponent?.form;
  }
  constructor(
    private ordersFacade: OrdersFacade,
    private draftFacade: DraftFacade,
    private store: Store,
    private paymentFacade: PaymentsFacade,
    private productDraftFacade: ProductDraftFacade,
  ) { }
  buildForm(): void {
    let data
    this.regConfig = regConfigDraftInfos(
      data,
      this.customer$,
      this.contacts$,
      this.companies$.pipe(map(item => item.map(company =>
        ({ key: company.id, value: company.name })))),
    );
    this.store.dispatch(CustomerActions.loadCustomers());
    this.store.dispatch(ContactActions.loadContacts());
  }
  ngOnInit(): void {
    this.store.dispatch(ShortCompanieActions.loadShortCompany());
    this.buildForm();
    this.dataSub = this.draftFacade.selectedDraft$.subscribe(id => this.draft_id = id)
  }

  ngOnChanges() {
  }

  save() {
    this.productDraftFacade.amounts$.subscribe(
      value => this.ordersFacade.addOrder({
        ...this.orderForm.value,
        draft_id: this.draft_id,
        total_ttc: value[value.length - 1].total_TTC,
        total_tax: value[value.length - 1].total_TVA,
        total_ht: value[value.length - 1].total_HT,
      })
    )
  }

  cancel() {
    this.dataSub.unsubscribe()
  }

}
