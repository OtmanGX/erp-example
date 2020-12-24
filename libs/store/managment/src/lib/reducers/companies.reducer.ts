import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CompaniesActions from '../actions/companies.actions';
import { Companie } from '@TanglassCore/models/management/companie';

export const COMPANIE_FEATURE_KEY = 'companies';


export interface State extends EntityState<Companie> {
  loaded: boolean; // has the Companie list been loaded
  error?: string | null; // last known error (if any)
}

export interface CompaniePartialState {
  readonly [COMPANIE_FEATURE_KEY]: State;
}

export const companieAdapter: EntityAdapter<Companie> = createEntityAdapter<
Companie
>();

export const initialState: State = companieAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  error: null,
});

const companieReducer = createReducer<State>(
  initialState,
  on( CompaniesActions.loadCompaniesSuccess,
      (state, action)  => companieAdapter.setAll(action.companies,
        {
         ...state,
         loaded: true
        })
  ),
  on(CompaniesActions.addCompanieSuccess,
    (state, action) => companieAdapter.addOne(action.companie, state)
  ),
  on(CompaniesActions.updateCompanieSuccess, (state, action) =>
     companieAdapter.upsertOne(action.companie, state)
  ),
  on(CompaniesActions.loadCompaniesFailure,
     CompaniesActions.updateCompanieFailure,
     CompaniesActions.addCompanieFailure,
     (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return companieReducer(state, action);
}
