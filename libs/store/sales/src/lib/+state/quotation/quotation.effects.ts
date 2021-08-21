import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as QuotationActions from './quotation.actions';
import { QuotationService } from '@tanglass-erp/core/sales';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { NotificationFacadeService } from '@tanglass-erp/store/app';
import { ProductDraftFacade } from '../product-draft/product-draft.facade';
import { DraftFacade } from '../draft/draft.facade';

@Injectable()
export class QuotationEffects {
  loadQuotationsDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuotationActions.loadQuotations),
      mergeMap((action) =>
        this.quotationService
          .getAll({
            dateStart: action.dateStart,
            dateEnd: action.dateEnd,
          })
          .pipe(
            map((data) =>
              QuotationActions.loadQuotationsSuccess({
                quotations: data.data.sales_quotation,
              })
            ),
            catchError((error) =>
              of(QuotationActions.loadQuotationsFailure({ error }))
            )
          )
      )
    );
  });

  addQuotation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuotationActions.addQuotation),
      mergeMap((action) =>
        this.quotationService.insertOne(action.quotation).pipe(
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
            this.router.navigate([
              'sales/quotation',
              data.data.insert_sales_quotation_one.id,
            ]);

            return QuotationActions.addQuotationSuccess({
              quotation: data.data.insert_sales_quotation_one,
            });
          }),
          catchError((error) =>
            of(QuotationActions.addQuotationFailure({ error }))
          )
        )
      )
    );
  });

  getQuotationById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuotationActions.loadQuotationById),
      mergeMap((action) =>
        this.quotationService.getOneById(action.id).pipe(
          map((data) => {
            this.draftFacade.selectDraftId(data.draft_id);
            this.productDraftFacade.setDraftProducts(data.products);
            return QuotationActions.loadQuotationByIdSuccess({
              quotation: data,
            });
          }),
          catchError((error) =>
            of(QuotationActions.loadQuotationByIdFailure({ error }))
          )
        )
      )
    );
  });

  deleteMany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuotationActions.deleteQuotations),
      mergeMap(({ ids }) =>
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
            return QuotationActions.deleteQuotationsSuccess({ ids });
          }),
          catchError((error) =>
            of(QuotationActions.deleteQuotationsFailure({ error }))
          )
        )
      )
    );
  });

  TransformQuotationToOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuotationActions.TransformToOrder),
      mergeMap((action) =>
        this.quotationService
          .transformQuotationToOrder(action.transformingVariables)
          .pipe(
            map((data) => {
              this.notificationService.showNotifToast({
                message: 'Transférer au Commande avec succès',
                operation: 'success',
                title: 'Devis',
                time: new Date(),
                icon: 'check',
                route: 'sales/quotation',
                color: 'primary',
              });
              this.router.navigate([
                'sales/order',
                data.data.insert_sales_order_one.id,
              ]);

              return QuotationActions.TransformToOrderSuccess({
                order: data.data.insert_sales_order_one,
              });
            }),
            catchError((error) =>
              of(QuotationActions.TransformToOrderFailure({ error }))
            )
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private quotationService: QuotationService,
    private router: Router,
    private productDraftFacade: ProductDraftFacade,
    private notificationService: NotificationFacadeService,
    private draftFacade: DraftFacade
  ) {}
}
