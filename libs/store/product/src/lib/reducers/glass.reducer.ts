import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as GlassesActions from '../actions/glass.actions';
import { Glass, DetailedGlass } from '@tanglass-erp/core/product';

export const GLASS_FEATURE_KEY = 'glasses';


export interface State extends EntityState<Glass> {
  selectedGlass: DetailedGlass
  loaded: boolean; // has the Glass list been loaded
  error?: string | null; // last known error (if any)
}

export interface glassPartialState {
  readonly [GLASS_FEATURE_KEY]: State;
}

export const glassAdapter: EntityAdapter<Glass> = createEntityAdapter<
Glass
>();

export const initialState: State = glassAdapter.getInitialState({
  // set initial required properties
  selectedGlass: null,
  loaded: false,
  error: null,
});

const GlassReducer = createReducer<State>(
  initialState,
  on( GlassesActions.loadGlassesSuccess,
      (state, action)  => glassAdapter.setAll(action.glasses,
        {
         ...state,
         loaded: true
        })
  ),
  on( GlassesActions.loadGlassByIdSuccess,
    (state, action)  => (
      {
        ...state,
        error: null,
        selectedGlass: action.glass,
      }
    )
),
  on(GlassesActions.addGlassSuccess,
    (state, action) => glassAdapter.addOne(action.glass, state)
  ),
  on(GlassesActions.updateGlassesuccess, (state, action) =>
     glassAdapter.upsertOne(action.glass, state)
  ),
  on(GlassesActions.removeGlassesuccess, (state, action) =>
     glassAdapter.removeOne(action.glassId, state)
  ),
  on(GlassesActions.loadGlassesFailure,
     GlassesActions.updateGlassFailure,
     GlassesActions.addGlassFailure,
     GlassesActions.loadGlassByIdFailure,
     GlassesActions.removeGlassFailure,
     (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return GlassReducer(state, action);
}
