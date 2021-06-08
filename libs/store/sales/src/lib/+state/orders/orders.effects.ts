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
  loadOrderssDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.loadOrders),
      mergeMap((action) =>
        this.orderService.getAll().pipe(
          map((data) =>
            OrdersActions.loadOrdersSuccess({ orders: data.data.sales_order })
          ),
          catchError((error) => of(OrdersActions.loadOrdersFailure({ error })))
        )
      )
    );
  });

  removeOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.removeOrders),
      mergeMap(({ ids }) =>
        this.orderService.removeMany(ids).pipe(
          map((data) => OrdersActions.removeOrderSuccess({ ids })),
          catchError((error) => of(OrdersActions.removeOrderFailure({ error })))
        )
      )
    );
  });


  addOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.addOrder),
      mergeMap((action) =>
        this.orderService.insertOne(action.Order).pipe(
          map((data) =>
          OrdersActions.addOrderSuccess({Order: data.data.insert_sales_order_one})
          ),
          catchError((error) =>
            of(OrdersActions.addOrderFailure({ error }))
          )
        )
      )
    )
  });


  getOrderById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.loadOrderById),
      mergeMap((action) =>
        this.orderService.getOneById(action.id).pipe(
          map((data) =>
          OrdersActions.loadOrderByIdSuccess({Order: data.data.sales_order_by_pk})
          ),
          catchError((error) =>
            of(OrdersActions.loadOrderByIdFailure({ error }))
          )
        )
      )
    )
  });



  constructor(private actions$: Actions,private orderService:OrderService) {}
}
