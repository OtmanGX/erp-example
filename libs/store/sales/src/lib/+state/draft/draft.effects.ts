import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as DraftActions from './draft.actions';

import { DraftService } from '@tanglass-erp/core/sales';
import { mergeMap, map, catchError, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductDraftFacade } from "../product-draft/product-draft.facade";


@Injectable()
export class DraftEffects {


  insertDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DraftActions.addDraft),
      mergeMap((action) =>
        this.draftervice.insertOne().pipe(
          map((data) => {
            this.productDraftFacade.resetState()
            return DraftActions.addDraftSuccess({ draft: data.data.insert_sales_draft_one })
          }),
          catchError((error) =>
            of(DraftActions.addDraftFailure({ error }))
          )
        )
      )
    )
  });

  loadDraftById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DraftActions.loadDraftById),
      mergeMap((action) =>
        this.draftervice.getOneById(action.id).pipe(
          take(1),
          map((data) => {
            this.productDraftFacade.loadSelectedProducts(data.data.sales_draft_by_pk.id)
            return DraftActions.loadDraftByIdSuccess({ draft: data.data.sales_draft_by_pk });
          }
          ),
          catchError((error) =>
            of(DraftActions.loadDraftByIdFailure({ error }))
          )
        )
      )
    )
  });

  loadAllDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DraftActions.loadDrafts),
      mergeMap((action) =>
        this.draftervice.getAll().pipe(
          map((data) =>
            DraftActions.loadDraftSuccess({ draft: data.data.sales_draft })
          ),
          catchError((error) =>
            of(DraftActions.loadDraftFailure({ error }))
          )
        )
      )
    )
  });

  removeDrafts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DraftActions.removeDrafts),
      mergeMap((action) =>
        this.draftervice.removeMany(action.ids).pipe(
          map((data) =>
            DraftActions.removeDraftSuccess({ ids: action.ids })
          ),
          catchError((error) =>
            of(DraftActions.removeDraftFailure({ error }))
          )
        )
      )
    )
  });


  constructor(private actions$: Actions,
    private draftervice: DraftService,
    private productDraftFacade: ProductDraftFacade) { }
}
