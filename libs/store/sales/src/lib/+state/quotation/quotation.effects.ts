import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromQuotation from './quotation.reducer';
import * as QuotationActions from './quotation.actions';

@Injectable()
export class QuotationEffects {
  loadQuotation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuotationActions.loadQuotation),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return QuotationActions.loadQuotationSuccess({ quotation: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return QuotationActions.loadQuotationFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
