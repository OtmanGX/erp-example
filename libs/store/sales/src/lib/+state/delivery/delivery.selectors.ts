import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DELIVERY_FEATURE_KEY,
  State,
  DeliveryPartialState,
  deliveryAdapter,
} from './delivery.reducer';

// Lookup the 'Delivery' feature state managed by NgRx
export const getDeliveryState = createFeatureSelector<
  DeliveryPartialState,
  State
>(DELIVERY_FEATURE_KEY);

const { selectAll, selectEntities } = deliveryAdapter.getSelectors();

export const getDeliveryLoaded = createSelector(
  getDeliveryState,
  (state: State) => state.loaded
);

export const getDeliveryError = createSelector(
  getDeliveryState,
  (state: State) => state.error
);

export const getAllDelivery = createSelector(getDeliveryState, (state: State) =>
  selectAll(state)
);

export const getDeliveryEntities = createSelector(
  getDeliveryState,
  (state: State) => selectEntities(state)
);

export const getSelectedEntity = createSelector(
  getDeliveryState,
  (state: State) => state.selectedDeliveryForm
);

export const getSelected = createSelector(
  getDeliveryEntities,
  getSelectedEntity,
  (entities, selectedId) => selectedId && getSelectedEntity
);
