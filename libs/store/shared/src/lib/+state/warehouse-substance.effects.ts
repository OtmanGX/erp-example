import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromWarehouseSubstance from './warehouse-substance.reducer';
import * as WarehouseSubstanceActions from './warehouse-substance.actions';
import * as ShortWarehouseActions from './short-warehouse.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ShortFeatureService } from '@tanglass-erp/core/common';
import { of } from 'rxjs';
@Injectable()
export class WarehouseSubstanceEffects {
  loadWarehouseGlasses$ =createEffect(() => {
    return this.actions$.pipe(
      ofType(WarehouseSubstanceActions.loadWarehouseSubstance),
      mergeMap((action) =>
        this.warehouseSubstanceService.getGlassesSubstances(action.id).pipe(
          map((data) =>
          WarehouseSubstanceActions.loadWarehouseSubstanceSuccess({ warehouseSubstance: data })
          ),
          catchError((error) =>
            of(WarehouseSubstanceActions.loadWarehouseSubstanceFailure({ error }))
          )
        )
      )
    )
  });

  constructor(private actions$: Actions,
    private warehouseSubstanceService: ShortFeatureService) {}
}
