import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  WAREHOUSESUBSTANCE_FEATURE_KEY,
  State,
  WarehouseSubstancePartialState,
  warehouseSubstanceAdapter,
} from './warehouse-substance.reducer';

// Lookup the 'WarehouseSubstance' feature state managed by NgRx
export const getWarehouseSubstanceState = createFeatureSelector<
  WarehouseSubstancePartialState,
  State
>(WAREHOUSESUBSTANCE_FEATURE_KEY);

const { selectAll, selectEntities } = warehouseSubstanceAdapter.getSelectors();

export const getWarehouseSubstanceLoaded = createSelector(
  getWarehouseSubstanceState,
  (state: State) => state.loaded
);

export const getWarehouseSubstanceError = createSelector(
  getWarehouseSubstanceState,
  (state: State) => state.error
);

export const getAllWarehouseSubstance = createSelector(
  getWarehouseSubstanceState,
  (state: State) => selectAll(state)
);

export const getWarehouseSubstanceEntities = createSelector(
  getWarehouseSubstanceState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getWarehouseSubstanceState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getWarehouseSubstanceEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
