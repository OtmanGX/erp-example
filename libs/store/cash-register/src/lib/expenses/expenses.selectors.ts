import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  EXPENSES_FEATURE_KEY,
  State,
  ExpensesPartialState,
  expensesAdapter,
} from './expenses.reducer';

// Lookup the 'Expenses' feature state managed by NgRx
export const getExpensesState = createFeatureSelector<
  ExpensesPartialState,
  State
>(EXPENSES_FEATURE_KEY);

const { selectAll, selectEntities } = expensesAdapter.getSelectors();

export const getExpensesLoaded = createSelector(
  getExpensesState,
  (state: State) => state.loaded
);

export const getExpensesError = createSelector(
  getExpensesState,
  (state: State) => state.error
);

export const getAllExpenses = createSelector(getExpensesState, (state: State) =>
  selectAll(state)
);

export const getExpensesEntities = createSelector(
  getExpensesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getExpensesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getExpensesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
