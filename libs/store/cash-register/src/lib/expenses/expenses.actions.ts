import { createAction, props } from '@ngrx/store';
import { ExpensesEntity } from './expenses.models';

export const loadExpenses = createAction('[Expenses] Load Expenses');

export const loadExpensesSuccess = createAction(
  '[Expenses] Load Expenses Success',
  props<{ expenses: ExpensesEntity[] }>()
);

export const loadExpensesFailure = createAction(
  '[Expenses] Load Expenses Failure',
  props<{ error: any }>()
);
