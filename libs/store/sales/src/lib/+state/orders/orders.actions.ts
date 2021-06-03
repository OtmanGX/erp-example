import { createAction, props } from '@ngrx/store';
import {Order as OrdersEntity } from "@tanglass-erp/core/sales";

export const loadOrders = createAction('[Orders] Load Orders');

export const loadOrdersSuccess = createAction(
  '[Orders] Load Orders Success',
  props<{ orders: OrdersEntity[] }>()
);

export const loadOrdersFailure = createAction(
  '[Orders] Load Orders Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****LOAD INDIVIDUAL Order ** */
/****************************************************************** */

export const loadOrderById = createAction(
  '[Order Card Component] Load Order By Id',
  props<{ id: any }>()
  );


export const loadOrderByIdSuccess = createAction(
  '[Order Effect] Load Order By Id Success',
  props<{ Order: OrdersEntity }>()
);

export const loadOrderByIdFailure = createAction(
  '[Order Effect] Load Order By Id Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****ADD INDIVIDUAL ORDER ** */
/****************************************************************** */

export const addOrder = createAction(
  '[Orders Component] Add Order',
  props<{ Order: OrdersEntity }>()
);

export const addOrderSuccess = createAction(
  '[Order Effect] Add Order Success',
  props<{ Order: OrdersEntity }>()
);

export const addOrderFailure = createAction(
  '[Order Effect] Add Order Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****UPDATE INDIVIDUAL Order ** */
/****************************************************************** */

export const updateOrder = createAction(
  '[Orders Component] Update Order',
  props<{ Order: OrdersEntity }>()
);
export const updateOrderSuccess = createAction(
  '[Order Effect] Update Order Success',
  props<{ Order: OrdersEntity }>()
);
export const updateOrderFailure = createAction(
  '[Order Effect] Update Order failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****REMOVE INDIVIDUAL Order ** */
/****************************************************************** */

export const removeOrders = createAction(
  '[Orders Component] Delete Order',
  props<{ ids: number[] }>()
);
export const removeOrderSuccess = createAction(
  '[Order Effect] Delete Order Success',
  props<{ ids: number[] }>()
);
export const removeOrderFailure = createAction(
  '[Order Effect] Delete Order failure',
  props<{ error: any }>()
);


export const selectOrder = createAction(
  '[Orders] Select Order',
  props<{ id: string | number}>()
);


export const clearSelection = createAction('[Orders] Clear Selection');
