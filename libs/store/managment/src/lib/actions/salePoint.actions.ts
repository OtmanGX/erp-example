import { SalePoint } from '@tanglass-erp/core/management';
import { createAction, props } from '@ngrx/store';

/****************************************************************** */
/*****LOAD SALEPOINTS ** */
/****************************************************************** */

export const loadSalePoints= createAction('[SalePoints Component] Load SalePoints');


export const loadSalePointsSuccess = createAction(
  '[SalePoint Effect] Load SalePoints Success',
  props<{ salePoints: SalePoint[] }>()
);

export const loadSalePointsFailure = createAction(
  '[SalePoint Effect] Load SalePoints Failure',
  props<{ error: any }>()
);




/****************************************************************** */
/*****ADD INDIVIDUAL SALEPOINT ** */
/****************************************************************** */

export const addSalePoint = createAction(
  '[Pop SalePoints Component] Add SalePoint',
  props<{ salePoint: SalePoint }>()
);

export const addSalePointSuccess = createAction(
  '[SalePoint Effect] Add SalePoint Success',
  props<{ salePoint: SalePoint }>()
);

export const addSalePointFailure = createAction(
  '[SalePoint Effect] Add SalePoint Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****UPDATE INDIVIDUAL SALEPOINT ** */
/****************************************************************** */

export const updateSalePoint = createAction(
  '[Pop SalePoints Component] Update SalePoint',
  props<{ salePoint: SalePoint }>()
);
export const updateSalePointSuccess = createAction(
  '[SalePoint Effect] Update SalePoint Success',
  props<{ salePoint: SalePoint }>()
);
export const updateSalePointFailure = createAction(
  '[SalePoint Effect] Update SalePoint failure',
  props<{ error: any }>()
);
