import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { DeliveryService } from '@tanglass-erp/core/purchase';
import * as fromPurchases from './deliveries.reducer';
import * as DeliveriesActions from './deliveries.actions';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PurchasesEffects {
  loadOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeliveriesActions.loadDeliveries),
      mergeMap((action) =>
        this.deliveryService.getAll()
          .pipe(
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

  constructor(
    private actions$: Actions,
    protected deliveryService: DeliveryService
  ) {}
}
