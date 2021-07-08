import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CASHBOX_FEATURE_KEY,
  State,
  CashBoxPartialState,
  cashBoxAdapter,
} from './cash-box.reducer';

// Lookup the 'CashBox' feature state managed by NgRx
export const getCashBoxState = createFeatureSelector<
  CashBoxPartialState,
  State
>(CASHBOX_FEATURE_KEY);

const { selectAll, selectEntities } = cashBoxAdapter.getSelectors();

export const getCashBoxLoaded = createSelector(
  getCashBoxState,
  (state: State) => state.loaded
);

export const getCashBoxError = createSelector(
  getCashBoxState,
  (state: State) => state.error
);

export const getAllCashBox = createSelector(getCashBoxState, (state: State) =>
  selectAll(state)
);

export const getCashBoxEntities = createSelector(
  getCashBoxState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getCashBoxState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getCashBoxEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
