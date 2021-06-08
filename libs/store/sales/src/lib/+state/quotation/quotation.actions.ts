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


/****************************************************************** */
/*****LOAD INDIVIDUAL Quotation ** */
/****************************************************************** */

export const loadQuotationById = createAction(
  '[Quotation Card Component] Load Quotation By Id',
  props<{ id: any }>()
  );


export const loadQuotationByIdSuccess = createAction(
  '[Quotation Effect] Load Quotation By Id Success',
  props<{ Quotation: Quotation }>()
);

export const loadQuotationByIdFailure = createAction(
  '[Quotation Effect] Load Quotation By Id Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****ADD INDIVIDUAL Quotation ** */
/****************************************************************** */

export const addQuotation = createAction(
  '[Quotation Component] Add Quotation',
  props<{ Quotation: Quotation }>()
);

export const addQuotationSuccess = createAction(
  '[Quotation Effect] Add Quotation Success',
  props<{ Quotation: Quotation }>()
);

export const addQuotationFailure = createAction(
  '[Quotation Effect] Add Quotation Failure',
  props<{ error: any }>()
);
