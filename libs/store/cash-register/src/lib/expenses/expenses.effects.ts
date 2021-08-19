import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ExpensesActions from './expenses.actions';
import { catchError, map, mergeMap, take, zipAll } from 'rxjs/operators';
import { of } from 'rxjs';
import { NotificationFacadeService } from '@tanglass-erp/store/app';
import { CashBoxFacade } from '@tanglass-erp/store/cash-register';
import { ExpensesService } from '@tanglass-erp/core/cash-register';

@Injectable()
export class ExpensesEffects {
  addExpense$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpensesActions.addExpense),
      mergeMap((action) =>
        this.expensesService.addExpense(action.expense).pipe(
          map((data) => {
            this.notificationService.showNotifToast({
              message: 'Ajouté avec succès',
              operation: 'success',
              title: 'La caisse',
              time: new Date(),
              icon: 'checked',
              route: 'cash-register',
              color: 'primary',
            });
            return this.cashBoxFacade.selectedCashBox$;
          }),
          mergeMap((obs) => {
            return obs.pipe(
              take(1),
              map((value) => {
                this.cashBoxFacade.loadCashBoxById(
                  value.id,
                  value.salepoint_id
                );
                return ExpensesActions.addExpenseSuccess();
              })
            );
          }),
          catchError((error) => of(ExpensesActions.addExpenseFailure({ error })))
        )
      )
    )
  );

  loadExpensesCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpensesActions.loadExpensesCategories),
      mergeMap((action) =>
        this.expensesService.getExpensesCategories().pipe(
          mergeMap((data) =>
            this.cashBoxFacade.selectedCashBox$.pipe(
              take(1),
              map((value) => {
                this.cashBoxFacade.loadCashBoxById(
                  value.id,
                  value.salepoint_id
                );
                return ExpensesActions.loadExpensesCategoriesSuccess({expensesCategories: data.data.cash_register_expense_category});
              })
            )
          ),
          catchError((error) => of(ExpensesActions.loadExpensesCategoriesFailure({ error })))
        )
      )
    )
  );


  deleteExpenses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExpensesActions.deleteExpense),
      mergeMap((action) =>
        this.expensesService.deleteExpense(action.ids).pipe(
          map((data) => {
            this.notificationService.showNotifToast({
              message: 'dépenses supprimés avec succes',
              operation: 'success',
              title: 'La caisse',
              time: new Date(),
              icon: 'checked',
              route: 'cash-register',
              color: 'primary',
            });
            return this.cashBoxFacade.selectedCashBox$;
          }),
          mergeMap((obs) =>
            obs.pipe(
              take(1),
              map((value) => {
                this.cashBoxFacade.loadCashBoxById(
                  value.id,
                  value.salepoint_id
                );
                return ExpensesActions.deleteExpenseSuccess();
              })
            )
          ),
          catchError((error) => of(ExpensesActions.deleteExpenseFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private expensesService: ExpensesService,
    private cashBoxFacade: CashBoxFacade,
    private notificationService: NotificationFacadeService
  ) {}
}
