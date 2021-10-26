import { createAction, props } from '@ngrx/store';
import { ShortFeature } from '@tanglass-erp/core/common';


/****************************************************************** */
/*****LOAD SHORT SALEPOINTS ** */
/****************************************************************** */

export const loadShortSalePoint = createAction(
  '[ShortSalePoint] Load ShortSalePoint',
  props<{ids?: string[]}>()
  );

export const loadShortSalePointSuccess = createAction(
  '[ShortSalePoint] Load ShortSalePoint Success',
  props<{ shortSalePoint: ShortFeature[] }>()
);

export const loadShortSalePointFailure = createAction(
  '[ShortSalePoint] Load ShortSalePoint Failure',
  props<{ error: any }>()
);
