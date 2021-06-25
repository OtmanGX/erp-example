import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as QuotationActions from './quotation.actions';
import { QuotationService } from '@tanglass-erp/core/sales';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
<<<<<<< HEAD
import { ProductDraftFacade } from "../product-draft/product-draft.facade";
=======
>>>>>>> 2d0cfc5ef4f46402b987a2a151311c772ac50f0e
import { Router } from '@angular/router';
import { NotificationFacadeService } from '@tanglass-erp/store/app';

@Injectable()
export class QuotationEffects {
  loadQuotationsDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuotationActions.loadQuotations),
      mergeMap((action) =>
        this.quotationService.getAll().pipe(
          map((data) =>
            QuotationActions.loadQuotationsSuccess({ quotations: data.data.sales_quotation })
          ),
          catchError((error) =>
            of(QuotationActions.loadQuotationsFailure({ error }))
          )
        )
      )
    )
  });


  addQuotation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuotationActions.addQuotation),
      mergeMap((action) =>
        this.quotationService.insertOne(action.Quotation).pipe(
          map((data) => {
            this.notificationService.showNotifToast({
              message: 'Ajouté avec succès',
              operation: 'success',
              title: 'Devis',
              time: new Date(),
              icon: 'check',
              route: 'sales/quotation',
              color: 'primary',
            });
              return QuotationActions.addQuotationSuccess({Quotation: data.data.insert_sales_quotation_one})
            }
          ),
          catchError((error) =>
            of(QuotationActions.addQuotationFailure({ error }))
          )
        )
      )
    )
  });


  getOrderById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuotationActions.loadQuotationById),
      mergeMap((action) =>
        this.quotationService.getOneById(action.id).pipe(
          map((data) => {

            return QuotationActions.loadQuotationByIdSuccess({ Quotation: data.data.sales_quotation_by_pk })
          }),
          catchError((error) =>
            of(QuotationActions.loadQuotationByIdFailure({ error }))
          )
        )
      )
    )
  });

<<<<<<< HEAD
=======

>>>>>>> 2d0cfc5ef4f46402b987a2a151311c772ac50f0e
  deleteMany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuotationActions.deleteQuotations),
      mergeMap(({ids}) =>
        this.quotationService.deleteMany(ids).pipe(
          map((data) => {
            this.notificationService.showNotifToast({
              message: 'Supprimé avec succès',
              operation: 'info',
              title: 'Devis',
              icon: 'closed',
              route: 'sales/quotation',
              color: 'warn',
            });
              return QuotationActions.deleteQuotationsSuccess({ids})
            }
          ),
          catchError((error) =>
            of(QuotationActions.deleteQuotationsFailure({ error }))
          )
        )
      )
    )
  });

  constructor(
    private actions$: Actions,
    private quotationService:QuotationService,
    private router: Router,
<<<<<<< HEAD
    private productDraftFacade: ProductDraftFacade,
=======
>>>>>>> 2d0cfc5ef4f46402b987a2a151311c772ac50f0e
    private notificationService: NotificationFacadeService

  ) {}
}
