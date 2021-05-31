import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as DeliveryActions from './delivery.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  adaptDelivery,
  DeliveryForm,
  DeliveryService,
  InsertedDeliveryForm,
} from '@tanglass-erp/core/sales';
import { reverseAdaptDelivery } from '@tanglass-erp/core/sales';
import { Router } from '@angular/router';

@Injectable()
export class DeliveryEffects {
  loadDelivery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeliveryActions.loadDelivery),
      mergeMap(() =>
        this.deliveryService.getAll().pipe(
          map((data) =>
            DeliveryActions.loadDeliverySuccess({
              delivery: data.data.sales_delivery.map(
                (e) => <DeliveryForm>reverseAdaptDelivery(e)
              ),
            })
          ),
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
        this.deliveryService.getOneById(<string>action.id).pipe(
          map((data) =>
            DeliveryActions.loadDeliveryByIdSuccess({
              delivery: <InsertedDeliveryForm>(
                reverseAdaptDelivery(data.data.sales_delivery_by_pk)
              ),
            })
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
              delivery: <DeliveryForm>(
                reverseAdaptDelivery(data.data.insert_sales_delivery_one)
              ),
            });
          }),
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
        this.deliveryService.updateDelivery(action.delivery).pipe(
          map((data: Array<any>) =>
            DeliveryActions.updateDeliverySuccess({
              delivery: {
                ...data[0].data.update_sales_delivery_by_pk,
                delivery_lines: data
                  .slice(1, data.length)
                  .map((e) => e.data.update_sales_delivery_line_by_pk),
              },
            })
          ),
          tap((e) => this.router.navigate(['/sales/delivery'])),
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
