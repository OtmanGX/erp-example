import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { OrderService } from '@tanglass-erp/core/sales';
import * as DraftActions from '../draft/draft.actions';
import { select, Store, Action } from '@ngrx/store';

import * as OrdersActions from './orders.actions';
import { Router } from '@angular/router';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { NotificationFacadeService } from '@tanglass-erp/store/app';
import { ProductDraftFacade } from "../product-draft/product-draft.facade";
import { DraftFacade } from "../draft/draft.facade";
import { PaymentsFacade } from '../payments/payments.facade';

@Injectable()
export class OrdersEffects {
  loadOrdersDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.loadOrders),
      mergeMap((action) =>
        this.orderService.getAll({
          dateStart: action.dateStart,
          dateEnd: action.dateEnd,
        }).pipe(
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
          map((data) => {
            this.notificationService.showNotifToast({
              message: 'Supprimé avec succès',
              operation: 'info',
              title: 'Commandes',
              icon: 'closed',
              route: 'sales/order',
              color: 'warn',
            });
            return OrdersActions.removeOrderSuccess({ ids });
          }),
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
            this.notificationService.showNotifToast({
              message: 'Ajouté avec succès',
              operation: 'success',
              title: 'Commandes',
              time: new Date(),
              icon: 'check',
              route: 'sales/order',
              color: 'primary',
            });
            this.router.navigate(['/sales/order']);
            return OrdersActions.addOrderSuccess({
              rrder: data.data.insert_sales_order_one,
            });
          }),
          catchError((error) => of(OrdersActions.addOrderFailure({ error })))
        )
      )
    );
  });

  getOrderById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.loadOrderById),
      switchMap((action) =>
        this.orderService.getOneById(action.id).pipe(
          map((data) => {
            this.draftFacade.selectDraftId(data.data.sales_order_by_pk.draft_id)
            this.productDraftFacade.setDraftProducts(data.data.sales_order_by_pk.draft.product_drafts)
            this.paymentFacade.setOrderPayments(data.data.sales_order_by_pk.payments)
            return OrdersActions.loadOrderByIdSuccess({ order: {
                ...data.data.sales_order_by_pk,
              products: data.data.sales_order_by_pk.draft.product_drafts
              } })
          }),
          catchError((error) =>
            of(OrdersActions.loadOrderByIdFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private router: Router,
    private notificationService: NotificationFacadeService,
    private productDraftFacade: ProductDraftFacade,
    private draftFacade: DraftFacade,
    private paymentFacade: PaymentsFacade,
    private store: Store,
  ) {
  }
}
