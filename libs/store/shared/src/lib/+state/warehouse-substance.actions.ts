import { createAction, props } from '@ngrx/store';
import { Substance } from '@tanglass-erp/core/common';

export const loadWarehouseSubstance = createAction(
  '[WarehouseSubstance] Load WarehouseSubstance',
  props<{ id: any }>()
);

export const loadWarehouseSubstanceSuccess = createAction(
  '[WarehouseSubstance] Load WarehouseSubstance Success',
  props<{ warehouseSubstance: Substance[] }>()
);

export const loadWarehouseSubstanceFailure = createAction(
  '[WarehouseSubstance] Load WarehouseSubstance Failure',
  props<{ error: any }>()
);
