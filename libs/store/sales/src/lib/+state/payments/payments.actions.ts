import { createAction, props } from '@ngrx/store';
import { PaymentsEntity } from './payments.models';

export const loadPayments = createAction('[Payments] Load Payments');

export const loadPaymentsSuccess = createAction(
  '[Payments] Load Payments Success',
  props<{ payments: PaymentsEntity[] }>()
);

export const loadPaymentsFailure = createAction(
  '[Payments] Load Payments Failure',
  props<{ error: any }>()
);



/****************************************************************** */
/*****LOAD INDIVIDUAL PAYMENT ** */
/****************************************************************** */

export const loadPaymentById = createAction(
  '[payment Card Component] Load payment  By Id',
  props<{ id:any }>()
  );


export const loadPaymentByIdSuccess = createAction(
  '[payment Effect] Load  By Id Success',
  props<{ payment: PaymentsEntity }>()
);

export const loadPaymentByIdFailure = createAction(
  '[payment Effect] Load payment By Id Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****ADD INDIVIDUAL PAYMENT ** */
/****************************************************************** */

export const addPayment = createAction(
  '[List  Payment Component] Add  Payment',
  props<{ payment: PaymentsEntity }>()
);

export const addPaymentSuccess = createAction(
  '[  Payment Effect] Add   Payment Success',
  props<{ payment: PaymentsEntity }>()
);

export const addPaymentFailure = createAction(
  '[  Payment Effect] Add   Payment Failure',
  props<{ error: any }>()
);