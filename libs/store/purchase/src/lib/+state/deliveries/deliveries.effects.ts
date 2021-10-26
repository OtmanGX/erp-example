import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DeliveryService } from '@tanglass-erp/core/purchase';
import * as DeliveriesActions from './deliveries.actions';
import { NotificationFacadeService } from '@tanglass-erp/store/app';
import { Router } from '@angular/router';

import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PurchasesEffects {
  loadDeliveries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeliveriesActions.loadDeliveries),
      mergeMap((action) =>
        this.deliveryService.getAll().pipe(
          map((data) =>
            DeliveriesActions.loadDeliveriesSuccess({
              deliveries: data.data.purchase_delivery,
            })
          ),
          catchError((error) =>
            of(DeliveriesActions.loadDeliveriesFailure({ error }))
          )
        )
      )
    );
  });
  removeDeliveries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeliveriesActions.removeDelivery),
      mergeMap(({ ids }) =>
        this.deliveryService.removeMany(ids).pipe(
          map((data) => {
            this.notificationService.showNotifToast({
              message: 'Supprimé avec succès',
              operation: 'info',
              title: 'Reception',
              icon: 'closed',
              route: 'purchase/order',
              color: 'warn',
            });
            return DeliveriesActions.removeDeliverySuccess({ ids });
          }),
          catchError((error) =>
            of(DeliveriesActions.removeDeliveryFailure({ error }))
          )
        )
      )
    );
  });

  addOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeliveriesActions.addDelivery),
      mergeMap((action) =>
        this.deliveryService.insertOne(action.delivery).pipe(
          map((data) => {
            this.notificationService.showNotifToast({
              message: 'Ajouté avec succès',
              operation: 'success',
              title: 'Commandes',
              time: new Date(),
              icon: 'check',
              route: 'sales/order',
              color: 'primary',
            });
            this.router.navigate([
              '/sales/order',
              data.data.insert_purchase_delivery_one.id,
            ]);
            return DeliveriesActions.addDeliverySuccess({
              delivery: data.data.insert_purchase_delivery_one,
            });
          }),
          catchError((error) =>
            of(DeliveriesActions.addDeliveryFailure({ error }))
          )
        )
      )
    );
  });

  getOrderById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeliveriesActions.loadDeliveryById),
      mergeMap((action) =>
        this.deliveryService.getOneById(action.id).pipe(
          map((data) => {
            return DeliveriesActions.loadDeliveryByIdSuccess({
              delivery: data.data.purchase_delivery_by_pk,
            });
          }),
          catchError((error) =>
            of(DeliveriesActions.loadDeliveryByIdFailure({ error }))
          )
        )
      )
    );
  });
  constructor(
    private actions$: Actions,
    protected deliveryService: DeliveryService,
    private router: Router,
    private notificationService: NotificationFacadeService
  ) {}
}
