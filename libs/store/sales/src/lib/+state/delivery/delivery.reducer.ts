import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as DeliveryActions from './delivery.actions';
import { DeliveryForm, InsertedDeliveryForm,OrderDelivery } from '@tanglass-erp/core/sales';

export const DELIVERY_FEATURE_KEY = 'delivery';

export interface State extends EntityState<DeliveryForm> {
  selectedDeliveryForm?: InsertedDeliveryForm; // which Delivery record has been selected
  orderDeliveries:OrderDelivery[];
  loaded: boolean; // has the Delivery list been loaded
  error?: string | null; // last known error (if any)
}

export interface DeliveryPartialState {
  readonly [DELIVERY_FEATURE_KEY]: State;
}

export const deliveryAdapter: EntityAdapter<DeliveryForm> = createEntityAdapter<
  DeliveryForm
>();

export const initialState: State = deliveryAdapter.getInitialState({
  // set initial required properties
  selectedDeliveryForm: null,
  orderDeliveries:null,
  loaded: false,
});

const deliveryReducer = createReducer(
  initialState,
  on(DeliveryActions.loadDelivery, (state) => ({
    ...state,
    loaded: false,
  })),
  on(DeliveryActions.loadDeliverySuccess, (state, { delivery }) => {
    return deliveryAdapter.setAll(delivery, { ...state, loaded: true });
    }
  ),
  on(DeliveryActions.loadDeliveryById, (state) =>
    ({...state, selectedDeliveryForm: null})
  ),
  on(DeliveryActions.loadDeliveryByIdSuccess, (state, {delivery}) =>
    ({...state, selectedDeliveryForm: delivery})
  ),
  on(DeliveryActions.addDeliverySuccess, (state, {delivery}) =>
    deliveryAdapter.addOne(delivery, state)
  ),
  on(DeliveryActions.updateDeliverySuccess, (state, {delivery}) =>
    deliveryAdapter.updateOne({id: delivery.id, changes: delivery}, state)
  ),
  on(DeliveryActions.removeDeliverySuccess, (state, {ids}) =>
    deliveryAdapter.removeMany(ids, state)
  ),
  on(DeliveryActions.loadOrderDeliveriesSuccess, (state, { deliveries }) =>
  ({...state, orderDeliveries: deliveries})
  ),
  on(
    DeliveryActions.loadDeliveryFailure,
    DeliveryActions.loadDeliveryByIdFailure,
    DeliveryActions.addDeliveryFailure,
    DeliveryActions.updateDeliveryFailure,
    DeliveryActions.removeDeliveryFailure,
    DeliveryActions.loadOrderDeliveriesFailure,
    (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return deliveryReducer(state, action);
}
