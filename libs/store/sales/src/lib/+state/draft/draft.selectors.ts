import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DRAFT_FEATURE_KEY,
  DraftState,
  DraftPartialState,
  draftAdapter,
} from './draft.reducer';

// Lookup the 'Draft' feature state managed by NgRx
export const getDraftState = createFeatureSelector<
  DraftPartialState,
  DraftState
>(DRAFT_FEATURE_KEY);

const { selectAll, selectEntities } = draftAdapter.getSelectors();

export const getDraftLoaded = createSelector(
  getDraftState,
  (state: DraftState) => state.loaded
);

export const getDraftError = createSelector(
  getDraftState,
  (state: DraftState) => state.error
);

export const getDraftLoadedById = createSelector(
  getDraftState,
  (state: DraftState) => state.draftLoadedById
);

export const getAllDraft = createSelector(getDraftState, (state: DraftState) =>
  selectAll(state)
);

export const getDraftEntities = createSelector(
  getDraftState,
  (state: DraftState) => selectEntities(state)
);

export const getSelectedIdDraft = createSelector(
  getDraftState,
  (state: DraftState) => state.selectedId
);

export const getSelectedDraft = createSelector(
  getDraftEntities,
  getSelectedIdDraft,
  (entities, selectedId) => selectedId && entities[selectedId]
);
