import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromJobOrders from './job-orders.reducer';
import * as JobOrdersSelectors from './job-orders.selectors';
import * as JobOrdersAction from './job-orders.actions';
@Injectable()
export class JobOrdersFacade {
  loaded$ = this.store.pipe(select(JobOrdersSelectors.getJobOrdersLoaded));
  allJobOrders$ = this.store.pipe(select(JobOrdersSelectors.getAllJobOrders));
  selectedJobOrders$ = this.store.pipe(select(JobOrdersSelectors.getSelected));

  constructor(private store: Store<fromJobOrders.JobOrdersPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadAllJobOrders() {
    this.dispatch(JobOrdersAction.loadJobOrders());
  }

  addJobOrder(jobOrder){
    this.dispatch(JobOrdersAction.addJobOrder(jobOrder))
  }

}