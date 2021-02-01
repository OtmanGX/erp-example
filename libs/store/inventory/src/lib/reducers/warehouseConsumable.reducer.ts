import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ConsumableWarehouseActions from '../actions/warehouseConsumable.actions';
import { ConsumableWarehouse } from '@tanglass-erp/core/inventory';

export const CONSUMABLE_WAREHOUSE_FEATURE_KEY = 'consumable_warehouse';


export interface State extends EntityState<ConsumableWarehouse> {
  loaded: boolean; // has the TransferOrder list been loaded
  error?: string | null; // last known error (if any)
}

export interface TransferOrderPartialState {
  readonly [CONSUMABLE_WAREHOUSE_FEATURE_KEY]: State;
}

export const ConsumableWarehouseAdapter: EntityAdapter<ConsumableWarehouse> = createEntityAdapter<
ConsumableWarehouse
>();

export const initialState: State = ConsumableWarehouseAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  error: null,
});

const ConsumableWarehouseReducer = createReducer<State>(
  initialState,
  on( ConsumableWarehouseActions.loadConsumableWarehousesSuccess,
      (state, action)  => ConsumableWarehouseAdapter.setAll(action.consumableWarehouses,
        {
         ...state,
         loaded: true
        })
  ),
  on(ConsumableWarehouseActions.loadConsumableWarehousesFailure,
     (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ConsumableWarehouseReducer(state, action);
}
