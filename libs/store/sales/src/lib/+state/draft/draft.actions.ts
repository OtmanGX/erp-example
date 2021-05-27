import { createAction, props } from '@ngrx/store';
import { DraftEntity } from './draft.models';
import { Draft, DraftDetailed } from '@tanglass-erp/core/sales';

/****************************************************************** */
/*****LOAD Drafts ** */
/****************************************************************** */

export const loadDraft = createAction(
  '[Draft] Load Draft',
  props<{ id: any }>()

  );

export const loadDraftSuccess = createAction(
  '[Draft] Load Draft Success',
  props<{ draft: Draft[] }>()
);

export const loadDraftFailure = createAction(
  '[Draft] Load Draft Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****LOAD INDIVIDUAL Draft ** */
/****************************************************************** */

export const loadDraftById = createAction(
  '[Draft Card Component] Load Draft By Id',
  props<{ id: any }>()
  );


export const loadDraftByIdSuccess = createAction(
  '[Draft Effect] Load Draft By Id Success',
  props<{ draft: DraftDetailed }>()
);

export const loadDraftByIdFailure = createAction(
  '[Draft Effect] Load Draft By Id Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****ADD INDIVIDUAL Draft ** */
/****************************************************************** */

export const addDraft = createAction(
  '[List drafts Component] Add Draft',
 // props<{ draft: Draft }>()
);

export const addDraftSuccess = createAction(
  '[Draft Effect] Add Draft Success',
  props<{ draft: Draft }>()
);

export const addDraftFailure = createAction(
  '[Draft Effect] Add Draft Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****UPDATE INDIVIDUAL Draft ** */
/****************************************************************** */

export const updateDraft = createAction(
  '[List drafts Component] Update Draft',
  props<{ draft: Draft }>()
);
export const updateDraftSuccess = createAction(
  '[Draft Effect] Update Draft Success',
  props<{ draft: Draft }>()
);
export const updateDraftFailure = createAction(
  '[Draft Effect] Update Draft failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****REMOVE INDIVIDUAL Draft ** */
/****************************************************************** */

export const removeDraft = createAction(
  '[List drafts Component] Delete Draft',
  props<{ draftId: any }>()
);
export const removeDraftSuccess = createAction(
  '[Draft Effect] Delete Draft Success',
  props<{ draftId: any }>()
);
export const removeDraftFailure = createAction(
  '[Draft Effect] Delete Draft failure',
  props<{ error: any }>()
);

export const clearDraftState = createAction('[Draft] Clear Draft State');
