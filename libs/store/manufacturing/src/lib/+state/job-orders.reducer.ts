import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as JobOrdersActions from './job-orders.actions';
import {
  JobOrder,
  JobProduct,
} from '@tanglass-erp/core/manufacturing';
export const JOB_ORDERS_FEATURE_KEY = 'jobOrders';

export interface State extends EntityState<JobOrder> {
  selectedId?: string | number; // which JobOrders record has been selected
  selectedJobOrder?: JobOrder;
  selectedGlasses?: JobProduct[];
  loaded: boolean; // has the JobOrders list been loaded
  error?: string | null; // last known error (if any)
}

export interface JobOrdersPartialState {
  readonly [JOB_ORDERS_FEATURE_KEY]: State;
}

export const jobOrdersAdapter: EntityAdapter<JobOrder> = createEntityAdapter<
  JobOrder
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
  on(JobOrdersActions.addJobOrderSuccess, (state, action) =>
    jobOrdersAdapter.addOne(action.jobOrder, state)
  ),
  on(JobOrdersActions.loadJobOrderByIdSuccess, (state, action) => ({
    ...state,
    error: null,
    selectedJobOrder: action.jobOrder,
    selectedGlasses: [
      ...action.jobOrder.glass_drafts.map((glass) => ({
        ...glass,
        manufacturing_lines: glass.manufacturing_lines
      })),
    ]
  })),
  on(JobOrdersActions.addManufacturingLinesSuccess, (state, action) => {
    return {
      ...state,
      error: null,
      selectedGlasses: [
        ...state.selectedJobOrder.glass_drafts.map((glass) => ({
          ...glass,
          manufacturing_lines: action.manufacturingLines.filter(
            (line) => line.glass_id == glass.id
          ),
        })),
      ],
    };
  }),
  on(
    JobOrdersActions.loadJobOrdersFailure,
    JobOrdersActions.addJobOrderFailure,
    JobOrdersActions.addManufacturingLinesFailure,
    JobOrdersActions.loadJobOrderByIdFailure,
    (state, { error }) => ({
      ...state,
      error,
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return jobOrdersReducer(state, action);
}
