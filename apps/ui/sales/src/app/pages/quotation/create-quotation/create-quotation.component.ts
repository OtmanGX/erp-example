import { Component, OnInit,ViewChild } from '@angular/core';
import { QuotationFacade } from "@tanglass-erp/store/sales";
import { DraftFacade } from "@tanglass-erp/store/sales";
import { DynamicFormComponent, FieldConfig } from '@tanglass-erp/material';
import * as ShortCompanieSelectors from '@TanglassStore/shared/lib/+state/short-company.selectors';
import * as ShortCompanieActions from '@TanglassStore/shared/lib/+state/short-company.actions';
import { regConfigDraftInfos } from '@TanglassUi/sales/utils/forms';
import { ProductDraftFacade } from "@tanglass-erp/store/sales";
import * as CustomerActions from '@TanglassStore/contact/lib/actions/customer.actions';
import * as CustomerSelectors from '@TanglassStore/contact/lib/selectors/customer.selectors';
import * as ContactActions from '@TanglassStore/contact/lib/actions/contact.actions';
import * as ContactSelectors from '@TanglassStore/contact/lib/selectors/contact.selectors';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as SalePointSelectors from '@TanglassStore/shared/lib/+state/short-salePoint.selectors';
import * as SalePointActions from '@TanglassStore/shared/lib/+state/short-salePoint.actions';
@Component({
  selector: 'ngx-create-quotation',
  templateUrl: './create-quotation.component.html',
  styleUrls: ['./create-quotation.component.scss']
})
export class CreateQuotationComponent implements OnInit {
  regConfig: FieldConfig[];
  dataSub: Subscription;
  companies$ = this.store.select(ShortCompanieSelectors.getAllShortCompany);
  customer$ = this.store.select(CustomerSelectors.getAllCustomers);
  salepoints$ = this.store.select(SalePointSelectors.getAllShortSalePoint);
  contacts$ = this.store.select(ContactSelectors.getAllContacts);
  draft_id
  @ViewChild('quotation_form', { read: DynamicFormComponent }) quotationFormComponent: DynamicFormComponent;
  get quotationForm() {
    return this.quotationFormComponent?.form;
  }
  constructor(
    private quotationFacade: QuotationFacade,
    private draftFacade: DraftFacade,
    private store: Store,
    private productDraftFacade: ProductDraftFacade,
  ) { }

  buildForm(): void {
    let data
    this.regConfig = regConfigDraftInfos(
      data,
      this.customer$,
      this.contacts$,
      this.companies$.pipe(map(item => item.map(company => ({ key: company.id, value: company.name })))),
      this.salepoints$.pipe(map(item => item.map(sp => ({key: sp.id, value: sp.name}))))
    );
    this.store.dispatch(CustomerActions.loadCustomers());
    this.store.dispatch(ContactActions.loadContacts());
    this.store.dispatch(SalePointActions.loadShortSalePoint());

  }

  ngOnInit(): void {
    this.store.dispatch(ShortCompanieActions.loadShortCompany());
    this.buildForm();
    this.dataSub = this.draftFacade.selectedDraft$.subscribe(id => this.draft_id = id)

  }
  save() {
    this.productDraftFacade.amounts$.subscribe(
      value => this.quotationFacade.addQuotation({
        ...this.quotationForm.value,
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
