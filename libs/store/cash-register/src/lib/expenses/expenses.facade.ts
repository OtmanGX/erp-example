import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromExpenses from './expenses.reducer';
import * as ExpensesSelectors from './expenses.selectors';

@Injectable()
export class ExpensesFacade {
  loaded$ = this.store.pipe(select(ExpensesSelectors.getExpensesLoaded));
  allExpenses$ = this.store.pipe(select(ExpensesSelectors.getAllExpenses));
  selectedExpenses$ = this.store.pipe(select(ExpensesSelectors.getSelected));

  constructor(private store: Store<fromExpenses.ExpensesPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
