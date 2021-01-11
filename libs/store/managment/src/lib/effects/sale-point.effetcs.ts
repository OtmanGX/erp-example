import { SalePointService } from '@tanglass-erp/core/management';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as SalePointActions from '../actions/salePoint.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SalePointEffects {

  loadSalePoints$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SalePointActions.loadSalePoints),
      mergeMap((action) =>
        this.salePointService.getAll().pipe(
          map((data) =>
            SalePointActions.loadSalePointsSuccess({salePoints: data.data.management_SalesPoint})
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
        this.salePointService.insertOne(action.salePoint).pipe(
          map((data) =>
            SalePointActions.addSalePointSuccess({salePoint: data.data.insert_management_SalesPoint_one})
          ),
          catchError((error) =>
            of(SalePointActions.addSalePointFailure({ error }))
          )
        )
      )
    )
  });

  getSalePointById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SalePointActions.loadSalePointById),
      mergeMap((action) =>
        this.salePointService.getOneById(action.id).pipe(
          map((data) =>
            SalePointActions.loadSalePointByIdSuccess({salePoint: data.data.management_SalesPoint_by_pk})
          ),
          catchError((error) =>
            of(SalePointActions.loadSalePointByIdFailure({ error }))
          )
        )
      )
    )
  });

  updateSalePoint$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SalePointActions.updateSalePoint),
      mergeMap((action) =>
        this.salePointService.updateOne(action.salePoint).pipe(
          map((data) =>
            SalePointActions.updateSalePointSuccess({salePoint: data.data.update_management_SalesPoint_by_pk})
          ),
          catchError((error) =>
            of(SalePointActions.updateSalePointFailure({ error }))
          )
        )
      )
    )
  });


  constructor(private actions$: Actions,
              private salePointService: SalePointService) {}
}
