import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as DraftActions from './draft.actions';
import { Draft } from "@tanglass-erp/core/sales";

export const DRAFT_FEATURE_KEY = 'draft';

export interface DraftState extends EntityState<Draft> {
  selectedId?: string | number; // which Draft record has been selected
  loaded: boolean; // has the Draft list been loaded
  error?: string | null; // last known error (if any)
}

export interface DraftPartialState {
  readonly [DRAFT_FEATURE_KEY]: DraftState;
}

export const draftAdapter: EntityAdapter<Draft> = createEntityAdapter<
  Draft
>();

export const initialDraftState: DraftState = draftAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const draftReducer = createReducer(
  initialDraftState,
  on(DraftActions.loadDraft, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DraftActions.loadDraftSuccess, (state, { draft }) =>
    draftAdapter.setAll(draft, { ...state, loaded: true })
  ),
  on(DraftActions.addDraftSuccess,
    (state, action) => draftAdapter.addOne(action.draft, state)
  ),
  on(DraftActions.loadDraftFailure,
    DraftActions.addDraftFailure,

    (state, { error }) => ({ ...state, error }))
);

export function reducerDraft(state: DraftState | undefined, action: Action) {
  return draftReducer(state, action);
}
