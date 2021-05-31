import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromQuotation from './quotation.reducer';
import * as QuotationActions from './quotation.actions';
import { QuotationService } from '@tanglass-erp/core/sales';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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

  constructor(private actions$: Actions, private quotationService:QuotationService) {}
}
