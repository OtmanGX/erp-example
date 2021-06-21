import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromInvoice from './invoice.reducer';
import * as InvoiceSelectors from './invoice.selectors';
import * as InvoiceActions from './invoice.actions';
import { InsertedInvoice, UpdatedInvoice } from '@tanglass-erp/core/sales';
import { filter, switchMap } from 'rxjs/operators';

@Injectable()
export class InvoiceFacade {
  loaded$ = this.store.pipe(select(InvoiceSelectors.getInvoiceLoaded));
  allInvoices$ = this.loaded$.pipe(
    filter((e) => !!e),
    switchMap(() => this.store.pipe(select(InvoiceSelectors.getAllInvoice)))
  );
  selectedInvoice$ = this.store.pipe(
    select(InvoiceSelectors.getSelected),
    filter((e) => !!e)
  );

  constructor(
    private store: Store<fromInvoice.InvoicePartialState>,
    ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadAll() {
    this.dispatch(InvoiceActions.loadInvoices());
  }

  loadById(id: string) {
    this.dispatch(InvoiceActions.loadInvoiceById({ id }));
  }

  addOne(invoice: InsertedInvoice) {
    this.dispatch(InvoiceActions.addInvoice({ invoice }));
  }

  update(invoice: UpdatedInvoice) {
    this.dispatch(InvoiceActions.updateInvoice({ invoice }));
  }

  deleteMany(ids: string[]) {
    this.dispatch(InvoiceActions.deleteInvoices({ ids }));
  }
}
