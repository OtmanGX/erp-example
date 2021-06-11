import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as InvoiceActions from './invoice.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { InsertedInvoice, InvoiceService, UpdatedInvoice } from '@tanglass-erp/core/sales';
import { NotificationFacadeService } from '@tanglass-erp/store/app';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class InvoiceEffects {
  loadinvoices$ = createEffect(() =>
    this.actions$.pipe(
    ofType(InvoiceActions.loadInvoices),
    mergeMap(() => this.service.getAll()
      .pipe(
        map(data => InvoiceActions.loadInvoicesSuccess({invoices: data.data.sales_invoice})),
        catchError(error => {
          this.notificationService.showToast('error', 'Erreur de chargement', error);
          return of(InvoiceActions.loadInvoicesFailure({error}));
        })
      ))
    )
  );

  loadinvoiceById$ = createEffect(() =>
    this.actions$.pipe(
    ofType(InvoiceActions.loadInvoiceById),
    mergeMap(action => this.service.getOneById(action.id)
      .pipe(
        map(data => {
          const {__typename, ...invoice} = data.data.sales_invoice_by_pk;
          return InvoiceActions.loadInvoiceByIdSuccess({invoice: <UpdatedInvoice> invoice})
        }),
        catchError(error => {
          this.notificationService.showToast('error', 'Erreur de chargement', error);
          return of(InvoiceActions.loadInvoiceByIdFailure({error}));
        })
      ))
    )
  );

  addInvoice$ = createEffect(() =>
    this.actions$.pipe(
    ofType(InvoiceActions.addInvoice),
    mergeMap(action => this.service.insertOne(action.invoice)
      .pipe(
        map(data => {
          this.notificationService.showNotifToast({
            message: 'Ajouté avec succès',
            operation: 'success',
            title: 'Factures',
            time: new Date(),
            icon: 'recipt',
            route: 'sales/invoice',
            color: 'primary'
          })
          this.router.navigate(['sales/invoice/ready'], {state: {data: action.invoice}});
          return InvoiceActions.addInvoiceSuccess({invoice: data.data.insert_sales_invoice_one})
        }),
        catchError(error => {
          this.notificationService.showToast('error', 'Erreur d\'ajout', error);
          return of(InvoiceActions.addInvoiceFailure({error}));
        })
      ))
    )
  );

  updateInvoice$ = createEffect(() =>
    this.actions$.pipe(
    ofType(InvoiceActions.updateInvoice),
    mergeMap(action => this.service.updateOne(action.invoice)
      .pipe(
        map(data => {
          this.router.navigate(['sales/invoice']);
          this.notificationService.showNotifToast({
            message: 'Mise à jour avec succès',
            operation: 'info',
            title: 'Factures',
            time: new Date(),
            icon: 'checked',
            route: 'sales/invoice',
            color: 'accent'
          })
          return InvoiceActions.updateInvoiceSuccess({invoice: data.data.update_sales_invoice_by_pk})
        }),
        catchError(error => {
          this.notificationService.showToast('error', 'Erreur de mise à jour', error);
          return of(InvoiceActions.updateInvoiceFailure({error}));
        })
      ))
    )
  );

  removeInvoice$ = createEffect(() =>
    this.actions$.pipe(
    ofType(InvoiceActions.deleteInvoices),
    mergeMap(action => this.service.deleteMany(action.ids)
      .pipe(
        map(data => {
          this.notificationService.showNotifToast({
            message: 'Supprimé avec succès',
            operation: 'info',
            title: 'Factures',
            time: new Date(),
            icon: 'close',
            route: 'sales/invoice',
            color: 'warn'
          })
          return InvoiceActions.deleteInvoicesSuccess({ids: action.ids})
        }),
        catchError(error => {
          this.notificationService.showToast('error', 'Erreur de suppression', error);
          return of(InvoiceActions.deleteInvoicesFailure({error}));
        })
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private service: InvoiceService,
    private router: Router,
    private notificationService: NotificationFacadeService,
  ) {}
}