import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as TransferOrderActions from '../actions/transferOrder.actions';
import { TransferOrder, DetailedTransferOrder } from '@tanglass-erp/core/inventory';

export const TRANSFERORDER_FEATURE_KEY = 'transferOrders';


export interface State extends EntityState<TransferOrder> {
  selectedTransferOrder: DetailedTransferOrder
  loaded: boolean; // has the TransferOrder list been loaded
  error?: string | null; // last known error (if any)
}

export interface TransferOrderPartialState {
  readonly [TRANSFERORDER_FEATURE_KEY]: State;
}

export const transferOrderAdapter: EntityAdapter<TransferOrder> = createEntityAdapter<
TransferOrder
>();

export const initialState: State = transferOrderAdapter.getInitialState({
  // set initial required properties
  selectedTransferOrder: null,
  loaded: false,
  error: null,
});

const TransferOrderReducer = createReducer<State>(
  initialState,
  on( TransferOrderActions.loadTransferOrdersSuccess,
      (state, action)  => transferOrderAdapter.setAll(action.transferOrders,
        {
         ...state,
         loaded: true
        })
  ),
  on( TransferOrderActions.loadTransferOrderByIdSuccess,
    (state, action)  => (
      {
        ...state,
        error: null,
        selectedTransferOrder: action.transferOrder,
      }
    )
),
  on(TransferOrderActions.addTransferOrderSuccess,
    (state, action) => transferOrderAdapter.addOne(action.TransferOrder, state)
  ),
  on(TransferOrderActions.loadTransferOrdersFailure,
     TransferOrderActions.addTransferOrderFailure,
     TransferOrderActions.loadTransferOrderByIdFailure,
     (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return TransferOrderReducer(state, action);
}
