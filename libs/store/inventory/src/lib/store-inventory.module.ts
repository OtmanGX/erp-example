import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromWarehouses from './reducers/warehouses.reducer';
import { WarehousesEffects } from './effects/warehouses.effects';
import { WarehousesFacade } from './+state/warehouses.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromWarehouses.WAREHOUSES_FEATURE_KEY,
      fromWarehouses.reducer
    ),
    EffectsModule.forFeature([WarehousesEffects]),
  ],
  providers: [WarehousesFacade],
})
export class StoreInventoryModule {}
