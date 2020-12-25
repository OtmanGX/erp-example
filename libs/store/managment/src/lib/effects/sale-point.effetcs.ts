import { SalePointMockService } from '@TanglassCore/mock/management/salePoint.mock.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as SalePointActions from '../actions/salePoint.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SalePointEffects {

  loadSalePoints$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SalePointActions.loadSalePoints, SalePointActions.loadSalePointsByCompanies, SalePointActions.loadSalePointsByUser),
      mergeMap((action) =>
        this.salePointService.getAll().pipe(
          map((data) =>
            SalePointActions.loadSalePointsSuccess({salePoints: data})
          ),
          catchError((error) =>
            of(SalePointActions.loadSalePointsFailure({ error }))
          )
        )
      )
    )
  });


  createSalePoint$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SalePointActions.addSalePoint),
      mergeMap((action) =>
        this.salePointService.addNewOne(action.salePoint).pipe(
          map((data) =>
            SalePointActions.addSalePointSuccess({salePoint: data})
          ),
          catchError((error) =>
            of(SalePointActions.addSalePointFailure({ error }))
          )
        )
      )
    )
  });


  updateSalePoint$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SalePointActions.updateSalePoint),
      mergeMap((action) =>
        this.salePointService.addNewOne(action.salePoint).pipe(
          map((data) =>
          SalePointActions.updateSalePointSuccess({salePoint: data})
          ),
          catchError((error) =>
            of(SalePointActions.updateSalePointFailure({ error }))
          )
        )
      )
    )
  });

  constructor(private actions$: Actions,
              private salePointService: SalePointMockService) {}
}
