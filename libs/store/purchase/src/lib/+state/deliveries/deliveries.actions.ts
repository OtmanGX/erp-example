import { createAction, props } from '@ngrx/store';
import { InsertedPurchaseDelivery, PurchaseDelivery, PurchaseItem } from '@tanglass-erp/core/purchase';

export const loadDeliveries = createAction('[deliveries] Load deliveries');

export const loadDeliveriesSuccess = createAction(
  '[deliveries] Load deliveries Success',
  props<{ deliveries: PurchaseDelivery[] }>()
);

export const loadDeliveriesFailure = createAction(
  '[deliveries] Load deliveries Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****LOAD INDIVIDUAL Delivery ** */
/****************************************************************** */

export const loadDeliveryById = createAction(
  '[Delivery Card Component] Load Delivery By Id',
  props<{ id: number }>()
);

export const loadDeliveryByIdSuccess = createAction(
  '[Delivery Effect] Load Delivery By Id Success',
  props<{ delivery: PurchaseDelivery }>()
);

export const loadDeliveryByIdFailure = createAction(
  '[Delivery Effect] Load Delivery By Id Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****ADD INDIVIDUAL Delivery ** */
/****************************************************************** */

export const addDelivery = createAction(
  '[Deliverys Component] Add Delivery',
  props<{ delivery: InsertedPurchaseDelivery }>()
);

export const addDeliverySuccess = createAction(
  '[Delivery Effect] Add Delivery Success',
  props<{ delivery: PurchaseDelivery }>()
);

export const addDeliveryFailure = createAction(
  '[Delivery Effect] Add Delivery Failure',
  props<{ error: any }>()
);



/****************************************************************** */
/*****REMOVE MANY DeliveryS ** */
/****************************************************************** */

export const removeDelivery = createAction(
  '[Deliverys Component] Delete Delivery',
  props<{ ids: number[] }>()
);
export const removeDeliverySuccess = createAction(
  '[Delivery Effect] Delete Delivery Success',
  props<{ ids: number[] }>()
);
export const removeDeliveryFailure = createAction(
  '[Delivery Effect] Delete Delivery failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****ADD INDIVIDUAL Item to delivery Locally ** */
/****************************************************************** */

export const addDeliveryItem = createAction(
  '[Delivery Item Component] Add Delivery Item',
  props<{ item: PurchaseItem }>()
);


