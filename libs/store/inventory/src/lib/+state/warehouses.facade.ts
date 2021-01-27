import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromWarehouses from '../reducers/warehouses.reducer';
import * as WarehousesSelectors from '../selectors/warehouses.selectors';

@Injectable()
export class WarehousesFacade {
  loaded$ = this.store.pipe(select(WarehousesSelectors.getWarehousesLoaded));
  allWarehouses$ = this.store.pipe(
    select(WarehousesSelectors.getAllWarehouses)
  );
  selectedWarehouses$ = this.store.pipe(
    select(WarehousesSelectors.getSelectedId)
  );

  constructor(private store: Store<fromWarehouses.WarehousesPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
