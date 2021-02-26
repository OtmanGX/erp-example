import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromWarehouseAccessory from './warehouse-accessory.reducer';
import * as WarehouseAccessorySelectors from './warehouse-accessory.selectors';

@Injectable()
export class WarehouseAccessoryFacade {
  loaded$ = this.store.pipe(
    select(WarehouseAccessorySelectors.getWarehouseAccessoryLoaded)
  );
  allWarehouseAccessory$ = this.store.pipe(
    select(WarehouseAccessorySelectors.getAllWarehouseAccessory)
  );
  selectedWarehouseAccessory$ = this.store.pipe(
    select(WarehouseAccessorySelectors.getSelected)
  );

  constructor(
    private store: Store<fromWarehouseAccessory.WarehouseAccessoryPartialState>
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
