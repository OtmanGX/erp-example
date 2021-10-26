import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromCashBox from './cash-box.reducer';
import * as CashBoxSelectors from './cash-box.selectors';
import * as CashBoxActions from './cash-box.actions';
import { InsertedCashBox, InsertedPayment } from '@tanglass-erp/core/cash-register';
import { filter, switchMap } from 'rxjs/operators';
import { AuthFacadeService } from '@tanglass-erp/store/app';

@Injectable()
export class CashBoxFacade {
  loaded$ = this.store.pipe(select(CashBoxSelectors.getSalePointsLoaded));
  allAllSalePoints$ = this.loaded$.pipe(
    filter((e) => !!e),
    switchMap(() => this.store.pipe(select(CashBoxSelectors.getAllSalePoints)))
  );
  selectedCashBox$ = this.store.pipe(
    select(CashBoxSelectors.getSelectedCashBox),
    filter((value) => !!value)
  );

  constructor(
    private store: Store<fromCashBox.CashBoxPartialState>,
    private authFacadeService: AuthFacadeService
    ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadAllSalePoints() {
    this.dispatch(CashBoxActions.loadCashBoxSalePoints());
  }

  loadCashBoxById(id: number, salepoint_id: string) {
    this.dispatch(CashBoxActions.loadCashBox({ id, salepoint_id }));
  }

  addCashBox(cashBox: InsertedCashBox) {
    this.dispatch(CashBoxActions.addCashBox({ cashBox }));
  }

  addPayment(payment: InsertedPayment) {
    this.dispatch(CashBoxActions.addPayment({ payment }));
  }
}
