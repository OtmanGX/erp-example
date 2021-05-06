import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as QuotationActions from './quotation.actions';
import { QuotationEntity } from './quotation.models';

export const QUOTATION_FEATURE_KEY = 'quotation';

export interface State extends EntityState<QuotationEntity> {
  selectedId?: string | number; // which Quotation record has been selected
  loaded: boolean; // has the Quotation list been loaded
  error?: string | null; // last known error (if any)
}

export interface QuotationPartialState {
  readonly [QUOTATION_FEATURE_KEY]: State;
}

export const quotationAdapter: EntityAdapter<QuotationEntity> = createEntityAdapter<
  QuotationEntity
>();

export const initialState: State = quotationAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const quotationReducer = createReducer(
  initialState,
  on(QuotationActions.loadQuotation, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(QuotationActions.loadQuotationSuccess, (state, { quotation }) =>
    quotationAdapter.setAll(quotation, { ...state, loaded: true })
  ),
  on(QuotationActions.loadQuotationFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return quotationReducer(state, action);
}
