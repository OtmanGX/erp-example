import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as DraftActions from './draft.actions';

import { DraftService } from '@tanglass-erp/core/sales';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable()
export class DraftEffects {


  insertDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DraftActions.addDraft),
      mergeMap((action) =>
        this.draftervice.insertOne().pipe(
          map((data) =>
            DraftActions.addDraftSuccess({ draft: data.data.insert_sales_draft_one })
          ),
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
          map((data) =>
            DraftActions.loadDraftByIdSuccess({ draft: data.data.sales_draft_by_pk })
          ),
          catchError((error) =>
            of(DraftActions.loadDraftByIdFailure({ error }))
          )
        )
      )
    )
  });


  constructor(private actions$: Actions,
    private draftervice: DraftService) { }
}
