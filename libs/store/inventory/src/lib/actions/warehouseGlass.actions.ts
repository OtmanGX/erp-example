import { createAction, props } from '@ngrx/store';
import { GlassWarehouse } from '@tanglass-erp/core/inventory';

export const loadGlassWarehouses = createAction('[GlassWarehouses] Load GlassWarehouses');

export const loadGlassWarehousesSuccess = createAction(
  '[WareHouseAccessories] Load WareHouseAccessories Success',
  props<{ glassWarehouses: GlassWarehouse[] }>()
);

export const loadGlassWarehousesFailure = createAction(
  '[GlassWarehouses] Load GlassWarehouses Failure',
  props<{ error: any }>()
);
