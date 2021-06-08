import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as PaymentsActions from './payments.actions';
import { PaymentsEntity } from './payments.models';

export const PAYMENTS_FEATURE_KEY = 'payments';

export interface PaymentState extends EntityState<PaymentsEntity> {
  selectedId?: string | number; // which Payments record has been selected
  loaded: boolean; // has the Payments list been loaded
  error?: string | null; // last known error (if any)
}

export interface PaymentsPartialState {
  readonly [PAYMENTS_FEATURE_KEY]: PaymentState;
}

export const paymentsAdapter: EntityAdapter<PaymentsEntity> = createEntityAdapter<
  PaymentsEntity
>();

export const payment_initialState: PaymentState = paymentsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const paymentsReducer = createReducer(
  payment_initialState,
  on(PaymentsActions.loadPayments, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PaymentsActions.loadPaymentsSuccess, (state, { payments }) =>
    paymentsAdapter.setAll(payments, { ...state, loaded: true })
  ),
  on(PaymentsActions.loadPaymentsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducerPayment(state: PaymentState | undefined, action: Action) {
  return paymentsReducer(state, action);
}
