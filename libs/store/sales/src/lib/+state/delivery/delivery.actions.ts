import { createAction, props } from '@ngrx/store';
import { DeliveryForm, InsertedDeliveryForm,DeliveryLine } from '@tanglass-erp/core/sales';

// Load all
export const loadDelivery = createAction(
  '[Delivery] Load Delivery',
  props<{ dateStart?: Date; dateEnd?: Date; status?: string }>()
);

export const loadDeliverySuccess = createAction(
  '[Delivery] Load Delivery Success',
  props<{ delivery: DeliveryForm[] }>()
);

export const loadDeliveryFailure = createAction(
  '[Delivery] Load Delivery Failure',
  props<{ error: any }>()
);

// Load By Id
export const loadDeliveryById = createAction(
  '[Delivery] Load Delivery By Id',
  props<{ id: string | number }>()
);

export const loadDeliveryByIdSuccess = createAction(
  '[Delivery] Load Delivery By Id Success',
  props<{ delivery: InsertedDeliveryForm }>()
);

export const loadDeliveryByIdFailure = createAction(
  '[Delivery] Load Delivery By Id Failure',
  props<{ error: any }>()
);

// Add Delivery Form
export const addDelivery = createAction(
  '[Delivery] Add Delivery',
  props<{ delivery: InsertedDeliveryForm }>()
);

export const addDeliverySuccess = createAction(
  '[Delivery] Add Delivery Success',
  props<{ delivery: DeliveryForm }>()
);

export const addDeliveryFailure = createAction(
  '[Delivery] Add Delivery Failure',
  props<{ error: any }>()
);

// update Delivery Form
export const updateDelivery = createAction(
  '[Delivery] update Delivery',
  props<{ delivery: InsertedDeliveryForm }>()
);

export const updateDeliverySuccess = createAction(
  '[Delivery] update Delivery Success',
  props<{ delivery: Partial<DeliveryForm> }>()
);

export const updateDeliveryFailure = createAction(
  '[Delivery] update Delivery Failure',
  props<{ error: any }>()
);

// remove Delivery Form
export const removeDelivery = createAction(
  '[Delivery] remove Delivery',
  props<{ ids: string[] }>()
);

export const removeDeliverySuccess = createAction(
  '[Delivery] remove Delivery Success',
  props<{ ids: string[] }>()
);

export const removeDeliveryFailure = createAction(
  '[Delivery] remove Delivery Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****LOAD SPECIFIC ORDER DELIVERIES ** */
/****************************************************************** */

export const loadOrderDeliveries = createAction(
  '[Order deliveries] Load Order deliveries',
  props<{ draft_id: number }>()
);

export const loadOrderDeliveriesSuccess = createAction(
  '[Order deliveries] Load Order deliveries Success',
  props<{ deliveries: DeliveryLine[] }>()
);

export const loadOrderDeliveriesFailure = createAction(
  '[Order deliveries] Load Order deliveries Failure',
  props<{ error: any }>()
);
