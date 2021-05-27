import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromDraft from './draft.reducer';
import * as DraftSelectors from './draft.selectors';
import * as DraftActions from './draft.actions';
import { getDraftLoadedById } from './draft.selectors';

@Injectable()
export class DraftFacade {
  loaded$ = this.store.pipe(select(DraftSelectors.getDraftLoaded));
  allDraft$ = this.store.pipe(select(DraftSelectors.getAllDraft));
  selectedDraft$ = this.store.pipe(select(DraftSelectors.getSelectedDraft));
  draftLoadedById$ = this.store.pipe(select(DraftSelectors.getDraftLoadedById));

  constructor(private store: Store<fromDraft.DraftPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
  createDraft(){
    this.dispatch(DraftActions.addDraft())
  }

  clearState() {
    this.dispatch(DraftActions.clearDraftState());
  }

  loadById(id) {
    this.dispatch(DraftActions.loadDraftById({id}));
  }
}
