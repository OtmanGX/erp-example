import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as DeliveryActions from './delivery.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DeliveryService } from '@tanglass-erp/core/sales';
import { reverseAdaptDelivery } from '@tanglass-erp/core/sales';
import { Router } from '@angular/router';

@Injectable()
export class DeliveryEffects {
  loadDelivery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeliveryActions.loadDelivery),
      mergeMap(() =>
        this.deliveryService.getAll().pipe(
          map((data) => DeliveryActions.loadDeliverySuccess({ delivery: data.data.sales_delivery.map(
            e => reverseAdaptDelivery(e)
            ) })),
          catchError((error) =>
            of(DeliveryActions.loadDeliveryFailure({ error }))
          )
        )
      )
    )
  );

  loadDeliveryById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeliveryActions.loadDeliveryById),
      mergeMap((action) =>
        of(null).pipe(
          map((data) =>
            DeliveryActions.loadDeliveryByIdSuccess({ delivery: data })
          ),
          catchError((error) =>
            of(DeliveryActions.loadDeliveryByIdFailure({ error }))
          )
        )
      )
    )
  );

  addDelivery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeliveryActions.addDelivery),
      mergeMap((action) =>
        this.deliveryService.insertOne(action.delivery).pipe(
          map((data) => {
            this.router.navigate(['/sales/delivery']);
              return DeliveryActions.addDeliverySuccess({
                delivery: reverseAdaptDelivery(
                  data.data.insert_sales_delivery_one
                ),
              })
            }
          ),
          catchError((error) =>
            of(DeliveryActions.addDeliveryFailure({ error }))
          )
        )
      )
    )
  );

  updateDelivery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeliveryActions.updateDelivery),
      mergeMap((action) =>
        of(null).pipe(
          map((data) =>
            DeliveryActions.updateDeliverySuccess({ delivery: data })
          ),
          catchError((error) =>
            of(DeliveryActions.updateDeliveryFailure({ error }))
          )
        )
      )
    )
  );

  removeDelivery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeliveryActions.removeDelivery),
      mergeMap((action) =>
        of(null).pipe(
          map((data) =>
            DeliveryActions.removeDeliverySuccess({ ids: action.ids })
          ),
          catchError((error) =>
            of(DeliveryActions.removeDeliveryFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private deliveryService: DeliveryService
  ) {}
}
