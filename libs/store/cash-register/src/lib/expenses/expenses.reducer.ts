import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ExpensesActions from './expenses.actions';
import { ExpensesEntity } from './expenses.models';

export const EXPENSES_FEATURE_KEY = 'expenses';

export interface State extends EntityState<ExpensesEntity> {
  selectedId?: string | number; // which Expenses record has been selected
  loaded: boolean; // has the Expenses list been loaded
  error?: string | null; // last known error (if any)
}

export interface ExpensesPartialState {
  readonly [EXPENSES_FEATURE_KEY]: State;
}

export const expensesAdapter: EntityAdapter<ExpensesEntity> = createEntityAdapter<
  ExpensesEntity
>();

export const initialState: State = expensesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const expensesReducer = createReducer(
  initialState,
  on(ExpensesActions.loadExpenses, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ExpensesActions.loadExpensesSuccess, (state, { expenses }) =>
    expensesAdapter.setAll(expenses, { ...state, loaded: true })
  ),
  on(ExpensesActions.loadExpensesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return expensesReducer(state, action);
}
