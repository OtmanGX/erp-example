import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromCashBox from './cash-box.reducer';
import * as CashBoxSelectors from './cash-box.selectors';

@Injectable()
export class CashBoxFacade {
  loaded$ = this.store.pipe(select(CashBoxSelectors.getCashBoxLoaded));
  allCashBox$ = this.store.pipe(select(CashBoxSelectors.getAllCashBox));
  selectedCashBox$ = this.store.pipe(select(CashBoxSelectors.getSelected));

  constructor(private store: Store<fromCashBox.CashBoxPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
