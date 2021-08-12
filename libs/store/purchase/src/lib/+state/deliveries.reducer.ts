import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as DeliveriesActions from './deliveries.actions';
import { PurchaseDelivery } from '@tanglass-erp/core/purchase';

export const DELIVERIES_FEATURE_KEY = 'deliveries';

export interface State extends EntityState<PurchaseDelivery> {
  selectedId?: string | number; // which deliveries record has been selected
  loaded: boolean; // has the deliveries list been loaded
  error?: string | null; // last known error (if any)
}

export interface DeliveriesPartialState {
  readonly [DELIVERIES_FEATURE_KEY]: State;
}

export const DeliveriesAdapter: EntityAdapter<PurchaseDelivery> = createEntityAdapter<
PurchaseDelivery
>();

export const initialState: State = DeliveriesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const deliveriesReducer = createReducer(
  initialState,
  on(DeliveriesActions.loadDeliveries, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DeliveriesActions.loadDeliveriesSuccess, (state, { deliveries }) =>
  DeliveriesAdapter.setAll(deliveries, { ...state, loaded: true })
  ),
  on(DeliveriesActions.loadDeliveriesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return deliveriesReducer(state, action);
}
