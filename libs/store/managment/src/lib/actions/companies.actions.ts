import { Companie } from '@tanglass-erp/core/management';
import { createAction, props } from '@ngrx/store';

/****************************************************************** */
/*****LOAD COMPANIES ** */
/****************************************************************** */

export const loadCompanies= createAction('[Companies Component] Load Companies');


export const loadCompaniesSuccess = createAction(
  '[Companie Effect] Load Companies Success',
  props<{ companies: Companie[] }>()
);

export const loadCompaniesFailure = createAction(
  '[Companie Effect] Load Companies Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****ADD INDIVIDUAL COMPANIE ** */
/****************************************************************** */

export const addCompanie = createAction(
  '[Companies Component] Add Companie',
  props<{ companie: Companie }>()
);

export const addCompanieSuccess = createAction(
  '[Companie Effect] Add Companie Success',
  props<{ companie: Companie }>()
);

export const addCompanieFailure = createAction(
  '[Companie Effect] Add Companie Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****UPDATE INDIVIDUAL COMPANIE ** */
/****************************************************************** */

export const updateCompanie = createAction(
  '[Companies Component] Update Companie',
  props<{ companie: Companie }>()
);
export const updateCompanieSuccess = createAction(
  '[Companie Effect] Update Companie Success',
  props<{ companie: Companie }>()
);
export const updateCompanieFailure = createAction(
  '[Companie Effect] Update Companie failure',
  props<{ error: any }>()
);
