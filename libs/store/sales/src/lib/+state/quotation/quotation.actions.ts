import { createAction, props } from '@ngrx/store';
import { invoiceFilter, Quotation } from '@tanglass-erp/core/sales';

export const loadQuotations = createAction('[Quotations] Load Quotations',
  props<invoiceFilter>()
);

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
  props<{ quotation: Quotation }>()
);

export const addQuotationSuccess = createAction(
  '[Quotation Effect] Add Quotation Success',
  props<{ quotation: Quotation }>()
);

export const addQuotationFailure = createAction(
  '[Quotation Effect] Add Quotation Failure',
  props<{ error: any }>()
);



/****************************************************************** */
/*****Delete Quotations ** */
/****************************************************************** */

export const deleteQuotations = createAction(
  '[Quotation Component] Delete Quotations',
  props<{ ids: number[] }>()
);

export const deleteQuotationsSuccess = createAction(
  '[Quotation Effect] Delete Quotations Success',
  props<{ ids: number[] }>()
);

export const deleteQuotationsFailure = createAction(
  '[Quotation Effect] Delete Quotations Failure',
  props<{ error: any }>()
);
