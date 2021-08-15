import { createAction, props } from '@ngrx/store';
import { PurchaseDelivery } from '@tanglass-erp/core/purchase';
export const loadDeliveries = createAction('[deliveries] Load deliveries');

export const loadDeliveriesSuccess = createAction(
  '[deliveries] Load deliveries Success',
  props<{ deliveries: PurchaseDelivery[] }>()
);

export const loadDeliveriesFailure = createAction(
  '[deliveries] Load deliveries Failure',
  props<{ error: any }>()
);
