import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromQuotation from './+state/quotation/quotation.reducer';
import { QuotationEffects } from './+state/quotation/quotation.effects';
import { QuotationFacade } from './+state/quotation/quotation.facade';
import * as fromDraft from './+state/draft/draft.reducer';
import { DraftEffects } from './+state/draft/draft.effects';
import { DraftFacade } from './+state/draft/draft.facade';
import * as fromProductDraft from './+state/product-draft/product-draft.reducer';
import { ProductDraftEffects } from './+state/product-draft/product-draft.effects';
import { ProductDraftFacade } from './+state/product-draft/product-draft.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromQuotation.QUOTATION_FEATURE_KEY,
      fromQuotation.reducerQuotation
    ),
    EffectsModule.forFeature([QuotationEffects]),
    StoreModule.forFeature(fromDraft.DRAFT_FEATURE_KEY, fromDraft.reducerDraft),
    EffectsModule.forFeature([DraftEffects]),
    StoreModule.forFeature(
      fromProductDraft.PRODUCT_FEATURE_KEY,
      fromProductDraft.reducerProduct
    ),
    EffectsModule.forFeature([ProductDraftEffects]),
  ],
  providers: [QuotationFacade, DraftFacade, ProductDraftFacade],
})
export class StoreSalesModule {}
