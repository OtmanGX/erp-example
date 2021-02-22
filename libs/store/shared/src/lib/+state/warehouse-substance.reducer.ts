import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as WarehouseSubstanceActions from './warehouse-substance.actions';
import { Substance } from '@tanglass-erp/core/common';

export const WAREHOUSESUBSTANCE_FEATURE_KEY = 'warehouseSubstance';

export interface State extends EntityState<Substance> {
  selectedId?: string | number;// which WarehouseSubstance record has been selected
  loaded: boolean; // has the WarehouseSubstance list been loaded
  error?: string | null; // last known error (if any)
}

export interface WarehouseSubstancePartialState {
  readonly [WAREHOUSESUBSTANCE_FEATURE_KEY]: State;
}

export const warehouseSubstanceAdapter: EntityAdapter<Substance> = createEntityAdapter<
Substance
>({
  selectId: (substance: Substance) => substance.substanceid,
});

export const initialState: State = warehouseSubstanceAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const warehouseSubstanceReducer = createReducer(
  initialState,
  on(WarehouseSubstanceActions.loadWarehouseGlasses, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    WarehouseSubstanceActions.loadWarehouseGlassesSuccess,
    (state, { warehouseSubstance }) =>
      warehouseSubstanceAdapter.setAll(warehouseSubstance, {
        ...state,
        loaded: true,
      })
  ),
  on(
    WarehouseSubstanceActions.loadWarehouseGlassesFailure,
    (state, { error }) => ({ ...state, error })
  ),
  on(WarehouseSubstanceActions.loadWarehouseAccessories, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    WarehouseSubstanceActions.loadWarehouseAccessoriesSuccess,
    (state, { warehouseSubstance }) =>
      warehouseSubstanceAdapter.setAll(warehouseSubstance, {
        ...state,
        loaded: true,
      })
  ),
  on(
    WarehouseSubstanceActions.loadWarehouseAccessoriesFailure,
    (state, { error }) => ({ ...state, error })
  )
);

export function reducer(state: State , action: Action) {
  return warehouseSubstanceReducer(state, action);
}
