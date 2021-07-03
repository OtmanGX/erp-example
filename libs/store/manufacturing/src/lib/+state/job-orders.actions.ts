import { createAction, props } from '@ngrx/store';
import { JobOrdersEntity } from './job-orders.models';


/****************************************************************** */
/*****LOAD ALL JOB ORDERS ** */
/****************************************************************** */


export const loadJobOrders = createAction('[JobOrders] Load JobOrders');

export const loadJobOrdersSuccess = createAction(
  '[JobOrders] Load JobOrders Success',
  props<{ jobOrders: JobOrdersEntity[] }>()
);

export const loadJobOrdersFailure = createAction(
  '[JobOrders] Load JobOrders Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****LOAD INDIVIDUAL JOB ORDER ** */
/****************************************************************** */

export const loadJobOrderById = createAction(
  '[JOB Order Component] Load Job Order By Id',
  props<{ id: number }>()
  );


export const loadJobOrderByIdSuccess = createAction(
  '[Job Order Effect] Load Job Order By Id Success',
  props<{ jobOrder: JobOrdersEntity }>()
);

export const loadJobOrderByIdFailure = createAction(
  '[Job Order Effect] Load Job Order By Id Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****ADD INDIVIDUAL JOB ORDER ** */
/****************************************************************** */

export const addJobOrder = createAction(
  '[Job Orders Component] Add Job Order',
  props<{ jobOrder: JobOrdersEntity }>()
);

export const addJobOrderSuccess = createAction(
  '[Job Order Effect] Add Job Order Success',
  props<{ jobOrder: JobOrdersEntity }>()
);

export const addJobOrderFailure = createAction(
  '[Job Order Effect] Add Job Order Failure',
  props<{ error: any }>()
);


