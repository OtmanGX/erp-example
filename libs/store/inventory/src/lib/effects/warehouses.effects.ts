import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as WarehousesActions from '../actions/warehouses.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { WarehouseService } from '@tanglass-erp/core/inventory';
import { of } from 'rxjs';

@Injectable()
export class WarehousesEffects {
  loadWarehouses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WarehousesActions.loadWarehouses),
      mergeMap(() => this.warehouseService.getAll()
        .pipe(
          map((data) =>
            WarehousesActions.loadWarehousesSuccess({warehouses: data.data.stock_warehouse})),
          catchError((error) =>
            of(WarehousesActions.loadWarehousesFailure({error})))
          ))
    )
  );

  constructor(private actions$: Actions,
              private warehouseService: WarehouseService) {}
}
