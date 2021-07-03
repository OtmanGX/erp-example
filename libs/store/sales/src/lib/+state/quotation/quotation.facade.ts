import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromQuotation from './quotation.reducer';
import * as QuotationSelectors from './quotation.selectors';
import * as QuotationsActions from './quotation.actions';
import { InsertedQuotation, invoiceFilter, Quotation } from '@tanglass-erp/core/sales';
@Injectable()
export class QuotationFacade {
  loaded$ = this.store.pipe(select(QuotationSelectors.getQuotationLoaded));
  allQuotation$ = this.store.pipe(select(QuotationSelectors.getAllQuotation));
  selectedQuotation$ = this.store.pipe(select(QuotationSelectors.getSelectedQuotation));
  loadedQuotation$=this.store.pipe(select(QuotationSelectors.getLoadedQuotation))
  constructor(private store: Store<fromQuotation.QuotationPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadAllQuotations(params: invoiceFilter) {
    this.dispatch(QuotationsActions.loadQuotations(params));
  }
  addQuotation(quotation:InsertedQuotation) {
    this.dispatch(QuotationsActions.addQuotation({quotation}));
  }

  removeMany(ids: number[]) {
    this.dispatch(QuotationsActions.deleteQuotations({ids}));
  }
  loadQuotationById(id) {
    this.dispatch(QuotationsActions.loadQuotationById({ id }))
  }
  TransformToOrder(){
    
  }
  
}
