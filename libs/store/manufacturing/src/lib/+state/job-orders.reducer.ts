import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as JobOrdersActions from './job-orders.actions';
import { JobOrdersEntity } from './job-orders.models';

export const JOB_ORDERS_FEATURE_KEY = 'jobOrders';

export interface State extends EntityState<JobOrdersEntity> {
  selectedId?: string | number; // which JobOrders record has been selected
  loaded: boolean; // has the JobOrders list been loaded
  error?: string | null; // last known error (if any)
}

export interface JobOrdersPartialState {
  readonly [JOB_ORDERS_FEATURE_KEY]: State;
}

export const jobOrdersAdapter: EntityAdapter<JobOrdersEntity> = createEntityAdapter<
  JobOrdersEntity
>();

export const initialState: State = jobOrdersAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const jobOrdersReducer = createReducer(
  initialState,
  on(JobOrdersActions.loadJobOrders, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(JobOrdersActions.loadJobOrdersSuccess, (state, { jobOrders }) =>
    jobOrdersAdapter.setAll(jobOrders, { ...state, loaded: true })
  ),
  on(JobOrdersActions.loadJobOrdersFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return jobOrdersReducer(state, action);
}
