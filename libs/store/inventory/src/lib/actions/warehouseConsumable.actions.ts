import { createAction, props } from '@ngrx/store';
import { ConsumableWarehouse } from '@tanglass-erp/core/inventory';

export const loadConsumableWarehouses = createAction('[ConsumableWarehouses] Load ConsumableWarehouses');

export const loadConsumableWarehousesSuccess = createAction(
  '[WareHouseConsumable effect] Load WareHouseConsumables Success',
  props<{ consumableWarehouses: ConsumableWarehouse[] }>()
);

export const loadConsumableWarehousesFailure = createAction(
  '[ConsumableWarehouses effect] Load ConsumableWarehouses Failure',
  props<{ error: any }>()
);
