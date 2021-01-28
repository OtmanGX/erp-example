import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ServiceConfigActions from '../actions/servicesConfig.actions';
import { ServiceConfig, DetailedServiceConfig } from '@tanglass-erp/core/product';

export const SERVICE_FEATURE_KEY = 'services';


export interface State extends EntityState<ServiceConfig> {
  selectedService: DetailedServiceConfig
  loaded: boolean; // has the Service list been loaded
  error?: string | null; // last known error (if any)
}

export interface servicePartialState {
  readonly [SERVICE_FEATURE_KEY]: State;
}

export const serviceAdapter: EntityAdapter<ServiceConfig> = createEntityAdapter<
ServiceConfig
>();

export const initialState: State = serviceAdapter.getInitialState({
  // set initial required properties
  selectedService: null,
  loaded: false,
  error: null,
});

const ServiceReducer = createReducer<State>(
  initialState,
  on( ServiceConfigActions.loadServiceConfigsSuccess,
      (state, action)  => serviceAdapter.setAll(action.serviceConfigs,
        {
         ...state,
         loaded: true
        })
  ),
  on( ServiceConfigActions.loadServiceConfigByIdSuccess,
    (state, action)  => (
      {
        ...state,
        error: null,
        selectedService: action.serviceConfig,
      }
    )
),
  on(ServiceConfigActions.addServiceConfigSuccess,
    (state, action) => serviceAdapter.addOne(action.serviceConfig, state)
  ),
  on(ServiceConfigActions.updateServiceConfigSuccess, (state, action) =>
     serviceAdapter.upsertOne(action.serviceConfig, state)
  ),
  on(ServiceConfigActions.removeServiceConfigSuccess, (state, action) =>
     serviceAdapter.removeOne(action.serviceConfigId, state)
  ),
  on(ServiceConfigActions.loadServiceConfigByIdFailure,
     ServiceConfigActions.loadServiceConfigsFailure,
     ServiceConfigActions.removeServiceConfigFailure,
     ServiceConfigActions.updateServiceConfigFailure,
     ServiceConfigActions.addServiceConfigFailure,
     (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ServiceReducer(state, action);
}
