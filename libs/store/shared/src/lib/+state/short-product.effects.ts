import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromShortProduct from './short-product.reducer';
import * as ShortProductActions from './short-product.actions';

@Injectable()
export class ShortProductEffects {
  loadShortProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShortProductActions.loadShortProduct),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ShortProductActions.loadShortProductSuccess({
            shortProduct: [],
          });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ShortProductActions.loadShortProductFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
