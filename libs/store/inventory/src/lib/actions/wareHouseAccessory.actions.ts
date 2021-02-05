import { createAction, props } from '@ngrx/store';
import { AccessoryWarehouse,  } from '@tanglass-erp/core/inventory';

export const loadWareHouseAccessories = createAction('[WareHouseAccessories component] Load WareHouseAccessories');

export const loadWareHouseAccessoriesSuccess = createAction(
  '[WareHouseAccessories effect] Load WareHouseAccessories Success',
  props<{ wareHouseAccessories: AccessoryWarehouse[] }>()
);

export const loadWareHouseAccessoriesFailure = createAction(
  '[WareHouseAccessories effect] Load WareHouseAccessories Failure',
  props<{ error: any }>()
);


