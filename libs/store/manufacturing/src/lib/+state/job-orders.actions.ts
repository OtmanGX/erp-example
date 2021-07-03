import { createAction, props } from '@ngrx/store';
import { JobOrdersEntity } from './job-orders.models';

export const loadJobOrders = createAction('[JobOrders] Load JobOrders');

export const loadJobOrdersSuccess = createAction(
  '[JobOrders] Load JobOrders Success',
  props<{ jobOrders: JobOrdersEntity[] }>()
);

export const loadJobOrdersFailure = createAction(
  '[JobOrders] Load JobOrders Failure',
  props<{ error: any }>()
);
