import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as GlassWarehouseActions from '../actions/warehouseGlass.actions';
import { GlassWarehouse } from '@tanglass-erp/core/inventory';

export const GLASS_WAREHOUSE_FEATURE_KEY = 'glass_warehouse';


export interface State extends EntityState<GlassWarehouse> {
  loaded: boolean; // has the TransferOrder list been loaded
  error?: string | null; // last known error (if any)
}

export interface TransferOrderPartialState {
  readonly [GLASS_WAREHOUSE_FEATURE_KEY]: State;
}

export const glassWarehouseAdapter: EntityAdapter<GlassWarehouse> = createEntityAdapter<
GlassWarehouse
>();

export const initialState: State = glassWarehouseAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  error: null,
});

const GlassWarehouseReducer = createReducer<State>(
  initialState,
  on( GlassWarehouseActions.loadGlassWarehousesSuccess,
      (state, action)  => glassWarehouseAdapter.setAll(action.glassWarehouses,
        {
         ...state,
         loaded: true
        })
  ),
  on(GlassWarehouseActions.loadGlassWarehousesFailure,
     (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return GlassWarehouseReducer(state, action);
}
