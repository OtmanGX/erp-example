import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromQuotation from './+state/quotation.reducer';
import { QuotationEffects } from './+state/quotation.effects';
import { QuotationFacade } from './+state/quotation.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromQuotation.QUOTATION_FEATURE_KEY,
      fromQuotation.reducer
    ),
    EffectsModule.forFeature([QuotationEffects]),
  ],
  providers: [QuotationFacade],
})
export class StoreSalesModule {}
