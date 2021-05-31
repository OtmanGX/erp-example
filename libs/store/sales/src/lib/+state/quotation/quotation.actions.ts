import { createAction, props } from '@ngrx/store';
import { Quotation } from "@tanglass-erp/core/sales";

export const loadQuotations = createAction('[Quotations] Load Quotations');

export const loadQuotationsSuccess = createAction(
  '[Quotations] Load Quotations Success',
  props<{ quotations: Quotation[] }>()
);

export const loadQuotationsFailure = createAction(
  '[Quotations] Load Quotations Failure',
  props<{ error: any }>()
);
