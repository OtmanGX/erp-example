import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  QUOTATION_FEATURE_KEY,
  State,
  QuotationPartialState,
  quotationAdapter,
} from './quotation.reducer';

// Lookup the 'Quotation' feature state managed by NgRx
export const getQuotationState = createFeatureSelector<
  QuotationPartialState,
  State
>(QUOTATION_FEATURE_KEY);

const { selectAll, selectEntities } = quotationAdapter.getSelectors();

export const getQuotationLoaded = createSelector(
  getQuotationState,
  (state: State) => state.loaded
);

export const getQuotationError = createSelector(
  getQuotationState,
  (state: State) => state.error
);

export const getAllQuotation = createSelector(
  getQuotationState,
  (state: State) => selectAll(state)
);

export const getQuotationEntities = createSelector(
  getQuotationState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getQuotationState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getQuotationEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
