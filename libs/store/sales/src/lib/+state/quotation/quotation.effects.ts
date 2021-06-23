import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromQuotation from './quotation.reducer';
import * as QuotationActions from './quotation.actions';
import { QuotationService } from '@tanglass-erp/core/sales';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductDraftFacade } from "../product-draft/product-draft.facade";

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
          map((data) =>
            QuotationActions.addQuotationSuccess({ Quotation: data.data.insert_sales_quotation_one })
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
            this.productDraftFacade.loadSelectedProducts(data.data.sales_quotation_by_pk.draft_id)

            return QuotationActions.loadQuotationByIdSuccess({ Quotation: data.data.sales_quotation_by_pk })
          }),
          catchError((error) =>
            of(QuotationActions.loadQuotationByIdFailure({ error }))
          )
        )
      )
    )
  });

  constructor(private actions$: Actions,
    private quotationService: QuotationService,
    private productDraftFacade: ProductDraftFacade) { }
}
