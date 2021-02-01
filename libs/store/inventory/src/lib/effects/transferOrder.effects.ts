import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as TransferOrderActions from '../actions/transferOrder.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TransferOrderService } from '@tanglass-erp/core/inventory';
import { of } from 'rxjs';

@Injectable()
export class TransferOrderEffects {

  loadTransferOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransferOrderActions.loadTransferOrders),
      mergeMap(() => this.transferOrderservice.getAll()
        .pipe(
          map((data) =>
            TransferOrderActions.loadTransferOrdersSuccess({transferOrders: data.data.stock_transfer_order})),
          catchError((error) =>
            of(TransferOrderActions.loadTransferOrdersFailure({error})))
          ))
    )
  );


  addTransferOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransferOrderActions.addTransferOrder),
      mergeMap((action) => this.transferOrderservice.insertOne(action.TransferOrder)
        .pipe(
          map((data) =>
            TransferOrderActions.addTransferOrderSuccess({TransferOrder: data.data.insert_stock_transfer_order_one})),
          catchError((error) =>
            of(TransferOrderActions.addTransferOrderFailure({error})))
          ))
    )
  );

  constructor(private actions$: Actions,
              private transferOrderservice: TransferOrderService) {}
}
