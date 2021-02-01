import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromWarehouses from './reducers/warehouses.reducer';
import * as fromtfrhouses from './reducers/transferOrder.reducer';
import { WarehousesEffects } from './effects/warehouses.effects';
import { TransferOrderEffects } from './effects/transferOrder.effects';

import { WarehousesFacade } from './+state/warehouses.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromWarehouses.WAREHOUSES_FEATURE_KEY,
      fromWarehouses.reducer
    ),
    StoreModule.forFeature(
      fromtfrhouses.TRANSFERORDER_FEATURE_KEY,
      fromtfrhouses.reducer
    ),
    EffectsModule.forFeature([
      WarehousesEffects,
      TransferOrderEffects
    ]),
  ],
  providers: [WarehousesFacade],
})
export class StoreInventoryModule {}
