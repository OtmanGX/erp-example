import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromShortCompany from './short-company.reducer';
import * as ShortCompanySelectors from './short-company.selectors';
import * as ShortCompaniesActions from './short-company.actions';

@Injectable()
export class ShortCompanyFacade {
  loaded$ = this.store.pipe(
    select(ShortCompanySelectors.getShortCompanyLoaded)
  );
  allShortCompany$ = this.store.pipe(
    select(ShortCompanySelectors.getAllShortCompany)
  );
  selectedShortCompany$ = this.store.pipe(
    select(ShortCompanySelectors.getSelected)
  );

  constructor(
    private store: Store
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadAllShortCompanies() {
    this.dispatch(ShortCompaniesActions.loadShortCompany());
    console.log('helle')
  }
}
