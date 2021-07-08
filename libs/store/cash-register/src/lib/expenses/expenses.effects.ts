import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromExpenses from './expenses.reducer';
import * as ExpensesActions from './expenses.actions';

@Injectable()
export class ExpensesEffects {
  loadExpenses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpensesActions.loadExpenses),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ExpensesActions.loadExpensesSuccess({ expenses: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ExpensesActions.loadExpensesFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
