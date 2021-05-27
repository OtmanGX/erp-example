import { createAction, props } from '@ngrx/store';
import  {Order as OrdersEntity } from "@tanglass-erp/core/sales";

export const loadOrders = createAction('[Orders] Load Orders');

export const loadOrdersSuccess = createAction(
  '[Orders] Load Orders Success',
  props<{ orders: OrdersEntity[] }>()
);

export const loadOrdersFailure = createAction(
  '[Orders] Load Orders Failure',
  props<{ error: any }>()
);


export const selectOrder = createAction(
  '[Orders] Select Order',
  props<{ id: string | number}>()
);


export const clearSelection = createAction('[Orders] Clear Selection');
