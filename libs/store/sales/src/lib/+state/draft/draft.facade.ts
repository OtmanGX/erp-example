import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromDraft from './draft.reducer';
import * as DraftSelectors from './draft.selectors';
import * as DraftActions from './draft.actions';

@Injectable()
export class DraftFacade {
  loaded$ = this.store.pipe(select(DraftSelectors.getDraftLoaded));
  allDraft$ = this.store.pipe(select(DraftSelectors.getAllDraft));
  selectedDraft$ = this.store.pipe(select(DraftSelectors.getSelectedIdDraft));
  draftLoadedById$ = this.store.pipe(select(DraftSelectors.getDraftLoadedById));
  constructor(private store: Store<fromDraft.DraftPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadAll() {
    this.dispatch(DraftActions.loadDrafts());
  }
  createDraft() {
    this.dispatch(DraftActions.addDraft());
  }

  selectDraftId(id: number) {
    this.dispatch(DraftActions.selectDraft({ id }));
  }

  removeMany(ids: number[]) {
    this.dispatch(DraftActions.removeDrafts({ ids }));
  }

  clearState() {
    this.dispatch(DraftActions.clearDraftState());
  }

  loadById(id) {
    this.dispatch(DraftActions.loadDraftById({ id }));
  }
}
