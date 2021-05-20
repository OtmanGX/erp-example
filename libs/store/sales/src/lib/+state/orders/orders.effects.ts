import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { OrderService } from '@tanglass-erp/core/sales';

import * as fromOrders from './orders.reducer';
import * as OrdersActions from './orders.actions';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class OrdersEffects {
  loadQuotationsDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.loadOrders),
      mergeMap((action) =>
        this.orderService.getAll().pipe(
          map((data) =>
          OrdersActions.loadOrdersSuccess({ orders: data.data.sales_order})
          ),
          catchError((error) =>
            of(OrdersActions.loadOrdersFailure({ error }))
          )
        )
      )
    )
  });

  constructor(private actions$: Actions,private orderService:OrderService) {}
}
