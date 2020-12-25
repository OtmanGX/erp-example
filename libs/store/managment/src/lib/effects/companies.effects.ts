import { companieMockService } from '@TanglassCore/mock/management/companie.mock.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as CompaniesActions from '../actions/companies.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CompaniesEffects {

  loadCompanies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompaniesActions.loadCompanies, CompaniesActions.loadCompaniesBySalePoint, CompaniesActions.loadCompaniesByUser),
      mergeMap((action) =>
        this.companieService.getAll().pipe(
          map((data) =>
          CompaniesActions.loadCompaniesSuccess({companies: data})
          ),
          catchError((error) =>
            of(CompaniesActions.loadCompaniesFailure({ error }))
          )
        )
      )
    )
  });

  createCompanie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompaniesActions.addCompanie),
      mergeMap((action) =>
        this.companieService.addNewOne(action.companie).pipe(
          map((data) =>
          CompaniesActions.addCompanieSuccess({companie: data})
          ),
          catchError((error) =>
            of(CompaniesActions.addCompanieFailure({ error }))
          )
        )
      )
    )
  });


  updateCompanie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompaniesActions.updateCompanie),
      mergeMap((action) =>
        this.companieService.addNewOne(action.companie).pipe(
          map((data) =>
          CompaniesActions.updateCompanieSuccess({companie: data})
          ),
          catchError((error) =>
            of(CompaniesActions.updateCompanieFailure({ error }))
          )
        )
      )
    )
  });

  constructor(private actions$: Actions,
              private companieService: companieMockService) {}
}
