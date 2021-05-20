import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromQuotation from './quotation.reducer';
import * as QuotationSelectors from './quotation.selectors';
import * as QuotationsActions from './quotation.actions';
@Injectable()
export class QuotationFacade {
  loaded$ = this.store.pipe(select(QuotationSelectors.getQuotationLoaded));
  allQuotation$ = this.store.pipe(select(QuotationSelectors.getAllQuotation));
  selectedQuotation$ = this.store.pipe(select(QuotationSelectors.getSelectedQuotation));

  constructor(private store: Store<fromQuotation.QuotationPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadAllQuotations() {
    this.dispatch(QuotationsActions.loadQuotations());
  }
}
