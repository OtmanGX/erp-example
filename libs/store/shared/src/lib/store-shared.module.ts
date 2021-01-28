import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreCommonModule } from '@tanglass-erp/core/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromShortCompany from './+state/short-company.reducer';
import { ShortCompanyEffects } from './+state/short-company.effects';
import { ShortCompanyFacade } from './+state/short-company.facade';

@NgModule({
  imports: [
    CommonModule,
    CoreCommonModule,
    StoreModule.forFeature(
      fromShortCompany.SHORTCOMPANY_FEATURE_KEY,
      fromShortCompany.reducer
    ),
    EffectsModule.forFeature([ShortCompanyEffects]),
  ],
  providers: [ShortCompanyFacade],
})
export class StoreSharedModule {}
