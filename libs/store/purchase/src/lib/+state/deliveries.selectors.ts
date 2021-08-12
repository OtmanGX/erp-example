import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DELIVERIES_FEATURE_KEY,
  State,
  DeliveriesPartialState,
  DeliveriesAdapter,
} from './deliveries.reducer';

// Lookup the 'Deliveries' feature state managed by NgRx
export const getDeliveriesState = createFeatureSelector<
  DeliveriesPartialState,
  State
>(DELIVERIES_FEATURE_KEY);

const { selectAll, selectEntities } = DeliveriesAdapter.getSelectors();

export const getDeliveriesLoaded = createSelector(
  getDeliveriesState,
  (state: State) => state.loaded
);

export const getDeliveriesError = createSelector(
  getDeliveriesState,
  (state: State) => state.error
);

export const getAllDeliveries = createSelector(
  getDeliveriesState,
  (state: State) => selectAll(state)
);

export const getDeliveriesEntities = createSelector(
  getDeliveriesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getDeliveriesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getDeliveriesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
