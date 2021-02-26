import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromWarehouseSubstance from './warehouse-glass.reducer';
import * as WarehouseSubstanceSelectors from './warehouse-glass.selectors';
import * as  warehouseSubstancesActions from './warehouse-glass.actions';

@Injectable()
export class WarehouseSubstanceFacade {
  loaded$ = this.store.pipe(
    select(WarehouseSubstanceSelectors.getWarehouseGlassLoaded)
  );
  allWarehouseSubstance$ = this.store.pipe(
    select(WarehouseSubstanceSelectors.getAllWarehouseGlass)
  );
  selectedWarehouseSubstance$ = this.store.pipe(
    select(WarehouseSubstanceSelectors.getSelected)
  );

  constructor(
    private store: Store
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
  loadWarehouseGlasses(id) {
    this.dispatch(warehouseSubstancesActions.loadWarehouseGlasses(id));
  }
  loadWarehouseAccessories(id) {
    this.dispatch(warehouseSubstancesActions.loadWarehouseAccessories(id));
  }
}
