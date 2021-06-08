import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromPayments from './payments.reducer';
import * as PaymentsActions from './payments.actions';

@Injectable()
export class PaymentsEffects {
  loadPayments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PaymentsActions.loadPayments),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return PaymentsActions.loadPaymentsSuccess({ payments: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return PaymentsActions.loadPaymentsFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
