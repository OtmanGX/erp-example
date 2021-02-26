import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromShortProvider from './short-provider.reducer';
import * as ShortProviderSelectors from './short-provider.selectors';

@Injectable()
export class ShortProviderFacade {
  loaded$ = this.store.pipe(
    select(ShortProviderSelectors.getShortProviderLoaded)
  );
  allShortProvider$ = this.store.pipe(
    select(ShortProviderSelectors.getAllShortProvider)
  );
  selectedShortProvider$ = this.store.pipe(
    select(ShortProviderSelectors.getSelected)
  );

  constructor(
    private store: Store<fromShortProvider.ShortProviderPartialState>
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
