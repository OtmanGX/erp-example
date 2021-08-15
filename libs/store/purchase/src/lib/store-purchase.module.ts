import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDeliveries from './+state/deliveries.reducer';
import { PurchasesEffects } from './+state/deliveries.effects';
import { DeliveriesFacade } from './+state/deliveries.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromDeliveries.DELIVERIES_FEATURE_KEY,
      fromDeliveries.reducer
    ),
    EffectsModule.forFeature([PurchasesEffects]),
  ],
  providers: [DeliveriesFacade],
})
export class StorePurchaseModule {}
