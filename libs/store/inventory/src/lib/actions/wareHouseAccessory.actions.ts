import { createAction, props } from '@ngrx/store';
import { AccessoryWarehouse,  } from '@tanglass-erp/core/inventory';

export const loadWareHouseAccessories = createAction('[WareHouseAccessories] Load WareHouseAccessories');

export const loadWareHouseAccessoriesSuccess = createAction(
  '[WareHouseAccessories] Load WareHouseAccessories Success',
  props<{ wareHouseAccessories: AccessoryWarehouse[] }>()
);

export const loadWareHouseAccessoriesFailure = createAction(
  '[WareHouseAccessories] Load WareHouseAccessories Failure',
  props<{ error: any }>()
);


