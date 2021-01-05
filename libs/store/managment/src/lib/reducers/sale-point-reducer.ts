import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as SalePointActions from '../actions/salePoint.actions';
import { SalePoint } from '@tanglass-erp/core/management';

export const SALE_POINT_FEATURE_KEY = 'sale-points';

export interface State extends EntityState<SalePoint> {
  loaded: boolean; // has the Companie list been loaded
  error?: string | null; // last known error (if any)
}


export const salePointAdapter: EntityAdapter<SalePoint> = createEntityAdapter<
SalePoint
>();

export const initialState: State = salePointAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  error: null,
});

const salePointReducer = createReducer(
  initialState,
  on(SalePointActions.loadSalePoints, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SalePointActions.loadSalePointsSuccess,
     (state, action) =>
  salePointAdapter.setAll(action.salePoints, { ...state, loaded: true })
  ),
  on(SalePointActions.addSalePointSuccess,
    (state, action) => salePointAdapter.addOne(action.salePoint, state)
  ),
  on(SalePointActions.updateSalePointSuccess, (state, action) =>
  salePointAdapter.upsertOne(action.salePoint, state)
  ),
  on(SalePointActions.addSalePointFailure,
     SalePointActions.loadSalePointsFailure,
     SalePointActions.updateSalePointFailure,
     (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return salePointReducer(state, action);
}

