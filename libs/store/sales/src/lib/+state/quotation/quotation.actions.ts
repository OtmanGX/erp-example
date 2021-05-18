import { createAction, props } from '@ngrx/store';
import { QuotationEntity } from './quotation.models';

export const loadQuotation = createAction('[Quotation] Load Quotation');

export const loadQuotationSuccess = createAction(
  '[Quotation] Load Quotation Success',
  props<{ quotation: QuotationEntity[] }>()
);

export const loadQuotationFailure = createAction(
  '[Quotation] Load Quotation Failure',
  props<{ error: any }>()
);
