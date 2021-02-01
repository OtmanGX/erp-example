import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromShortWarehouse from './short-warehouse.reducer';
import * as ShortWarehouseSelectors from './short-warehouse.selectors';
import * as ShortWarehouseActions from './short-warehouse.actions';

@Injectable()
export class ShortWarehouseFacade {
  loaded$ = this.store.pipe(
    select(ShortWarehouseSelectors.getShortWarehouseLoaded)
  );
  allShortWarehouse$ = this.store.pipe(
    select(ShortWarehouseSelectors.getAllShortWarehouse)
  );
  selectedShortWarehouse$ = this.store.pipe(
    select(ShortWarehouseSelectors.getSelected)
  );

  constructor(
    private store: Store) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
  loadAllShortWarehouses() {
    this.dispatch(ShortWarehouseActions.loadShortWarehouse());
  }
}
