import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromInvoice from './invoice.reducer';
import * as InvoiceSelectors from './invoice.selectors';
import * as InvoiceActions from './invoice.actions';
import { InsertedInvoice, invoiceFilter, UpdatedInvoice } from '@tanglass-erp/core/sales';
import { filter, switchMap } from 'rxjs/operators';
import { InvoiceGeneratorService } from '@tanglass-erp/core/common';

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
    public invoiceGeneratorService: InvoiceGeneratorService
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadAll(params: invoiceFilter) {
    this.dispatch(InvoiceActions.loadInvoices(params));
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

  printInvoice(invoice: UpdatedInvoice) {
      this.invoiceGeneratorService.generateInvoicePDF(invoice);
  }
}
