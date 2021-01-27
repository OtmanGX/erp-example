import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as WarehousesActions from '../actions/warehouses.actions';
import { DetailedWarehouse, Warehouse } from '@tanglass-erp/core/inventory';

export const WAREHOUSES_FEATURE_KEY = 'warehouses';

export interface State extends EntityState<Warehouse> {
  selectedWarehouse?: DetailedWarehouse; // which Warehouses record has been selected
  loaded: boolean; // has the Warehouses list been loaded
  error?: string | null; // last known error (if any)
}

export interface WarehousesPartialState {
  readonly [WAREHOUSES_FEATURE_KEY]: State;
}

export const warehousesAdapter: EntityAdapter<Warehouse> = createEntityAdapter<
  Warehouse
>();

export const initialState: State = warehousesAdapter.getInitialState({
  // set initial required properties
  selectedWarehouse: null,
  loaded: false,
});

const warehousesReducer = createReducer(
  initialState,
  // Load
  on(WarehousesActions.loadWarehouses, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(WarehousesActions.loadWarehousesSuccess, (state, { warehouses }) =>
    warehousesAdapter.setAll(warehouses, { ...state, loaded: true })
  ),
  // Add
  on(WarehousesActions.addWarehouseSuccess, (state, action) =>
    warehousesAdapter.addOne(action.warehouse, state)
  ),
  // Update
  on(WarehousesActions.updateWarehouseSuccess, (state, action) =>
    warehousesAdapter.upsertOne(action.warehouse, state)
  ),
  // Failure
  on(WarehousesActions.loadWarehousesFailure,
    WarehousesActions.loadWarehouseByIdFailure,
    WarehousesActions.addWarehouseFailure,
    WarehousesActions.updateWarehouseFailure,
    (state, { error }) => ({
      ...state,
      error,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return warehousesReducer(state, action);
}
