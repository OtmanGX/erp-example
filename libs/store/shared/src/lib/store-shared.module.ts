import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreCommonModule } from '@tanglass-erp/core/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromShortCompany from './+state/short-company.reducer';
import { ShortCompanyEffects } from './+state/short-company.effects';
import { ShortCompanyFacade } from './+state/short-company.facade';
import * as fromShortWarehouse from './+state/short-warehouse.reducer';
import { ShortWarehouseEffects } from './+state/short-warehouse.effects';
import { ShortWarehouseFacade } from './+state/short-warehouse.facade';
import * as fromWarehouseSubstance from './+state/warehouse-substance.reducer';
import { WarehouseSubstanceEffects } from './+state/warehouse-substance.effects';
import { WarehouseSubstanceFacade } from './+state/warehouse-substance.facade';

@NgModule({
  imports: [
    CommonModule,
    CoreCommonModule,
    StoreModule.forFeature(
      fromShortCompany.SHORTCOMPANY_FEATURE_KEY,
      fromShortCompany.reducer
    ),
    EffectsModule.forFeature([ShortCompanyEffects]),
    StoreModule.forFeature(
      fromShortWarehouse.SHORTWAREHOUSE_FEATURE_KEY,
      fromShortWarehouse.reducer
    ),
    EffectsModule.forFeature([ShortWarehouseEffects]),
    StoreModule.forFeature(
      fromWarehouseSubstance.WAREHOUSESUBSTANCE_FEATURE_KEY,
      fromWarehouseSubstance.reducer
    ),
    EffectsModule.forFeature([WarehouseSubstanceEffects]),
  ],
  providers: [
    ShortCompanyFacade,
    ShortWarehouseFacade,
    WarehouseSubstanceFacade,
  ],
})
export class StoreSharedModule {}
