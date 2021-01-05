import { CompaniesService } from '@tanglass-erp/core/management';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as CompaniesActions from '../actions/companies.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CompaniesEffects {

  loadCompanies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompaniesActions.loadCompanies),
      mergeMap((action) =>
        this.companieService.getAll().pipe(
          map((data) =>
          CompaniesActions.loadCompaniesSuccess({companies: data.data.management_Company})
          ),
          catchError((error) =>
            of(CompaniesActions.loadCompaniesFailure({ error }))
          )
        )
      )
    )
  });

  insertCompanie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompaniesActions.addCompanie),
      mergeMap((action) =>
        this.companieService.insertOne(action.companie).pipe(
          map((data) =>
          CompaniesActions.addCompanieSuccess({companie: data.data.insert_management_Company_one})
          ),
          catchError((error) =>
            of(CompaniesActions.addCompanieFailure({ error }))
          )
        )
      )
    )
  });





  constructor(private actions$: Actions,
              private companieService: CompaniesService) {}
}
