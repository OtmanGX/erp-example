import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { OrderService } from '@tanglass-erp/core/sales';

import * as fromOrders from './orders.reducer';
import * as OrdersActions from './orders.actions';
import { Router } from '@angular/router';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { NotificationFacadeService } from '@tanglass-erp/store/app';
import { ProductDraftFacade } from "../product-draft/product-draft.facade";

@Injectable()
export class OrdersEffects {
  loadOrdersDraft$ = createEffect(() => {
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
          map((data) => {
            // this.router.navigate(['/sales/order/${data.data.insert_sales_order_one.id}']);

            return OrdersActions.addOrderSuccess({ Order: data.data.insert_sales_order_one })
          }
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
          map((data) => {
           // this.productDraftFacade.loadSelectedProducts(data.data.sales_order_by_pk.draft_id)
           
            return OrdersActions.loadOrderByIdSuccess({ Order: data.data.sales_order_by_pk })
          }),
          catchError((error) =>
            of(OrdersActions.loadOrderByIdFailure({ error }))
          )
        )
      )
    )
  });



  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private router: Router,
    private notificationService: NotificationFacadeService,
    private productDraftFacade: ProductDraftFacade
  ) { }
}
