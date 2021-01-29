import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromShortCompany from './short-company.reducer';
import * as ShortCompanyActions from './short-company.actions';


import { ShortFeatureService } from '@tanglass-erp/core/common';
import * as ShortCompaniesActions from './short-company.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class ShortCompanyEffects {
  loadShortCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShortCompanyActions.loadShortCompany),
      mergeMap(() =>
        this.companieService.getAll().pipe(
          map((data) =>
            ShortCompanyActions.loadShortCompanySuccess({ shortCompany: data.data.management_company })
          ),
          catchError((error) =>
            of(ShortCompanyActions.loadShortCompanyFailure({ error }))
          )
        )
      )
    )
  });

  constructor(private actions$: Actions,
    private companieService: ShortFeatureService) { }
}
