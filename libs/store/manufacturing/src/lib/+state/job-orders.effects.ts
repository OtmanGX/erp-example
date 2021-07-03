import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromJobOrders from './job-orders.reducer';
import * as JobOrdersActions from './job-orders.actions';

@Injectable()
export class JobOrdersEffects {
  loadJobOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobOrdersActions.loadJobOrders),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return JobOrdersActions.loadJobOrdersSuccess({ jobOrders: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return JobOrdersActions.loadJobOrdersFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
