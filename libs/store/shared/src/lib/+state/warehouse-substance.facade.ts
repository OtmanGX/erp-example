import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromWarehouseSubstance from './warehouse-substance.reducer';
import * as WarehouseSubstanceSelectors from './warehouse-substance.selectors';
import * as  warehouseSubstancesActions from './warehouse-substance.actions';

@Injectable()
export class WarehouseSubstanceFacade {
  loaded$ = this.store.pipe(
    select(WarehouseSubstanceSelectors.getWarehouseSubstanceLoaded)
  );
  allWarehouseSubstance$ = this.store.pipe(
    select(WarehouseSubstanceSelectors.getAllWarehouseSubstance)
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
