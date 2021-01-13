import { ProviderService } from '@tanglass-erp/core/contact';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ProvidersActions from '../actions/Provider.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProvidersEffects {

  loadProviders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProvidersActions.loadProviders),
      mergeMap((action) =>
        this.providerService.getAll().pipe(
          map((data) =>
          ProvidersActions.loadProvidersSuccess({providers: data.data.contact_provider})
          ),
          catchError((error) =>
            of(ProvidersActions.loadProvidersFailure({ error }))
          )
        )
      )
    )
  });

  insertProvider$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProvidersActions.addProvider),
      mergeMap((action) =>
        this.providerService.insertOne(action.provider).pipe(
          map((data) =>
          ProvidersActions.addProviderSuccess({provider: data.data.insert_contact_provider_one})
          ),
          catchError((error) =>
            of(ProvidersActions.addProviderFailure({ error }))
          )
        )
      )
    )
  });


  updateProvider$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProvidersActions.updateProvider),
      mergeMap((action) =>
        this.providerService.updateOne(action.provider).pipe(
          map((data) =>
          ProvidersActions.updateProviderSuccess({provider: data.data.update_contact_provider_by_pk})
          ),
          catchError((error) =>
            of(ProvidersActions.updateProviderFailure({ error }))
          )
        )
      )
    )
  });

  removeProvider$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProvidersActions.removeProvider),
      mergeMap((action) =>
        this.providerService.removeOne(action.provider.id).pipe(
          map((data) =>
          ProvidersActions.removeProviderSuccess({provider: data.data.delete_contact_provider_by_pk.id})
          ),
          catchError((error) =>
            of(ProvidersActions.removeProviderFailure({ error }))
          )
        )
      )
    )
  });





  constructor(private actions$: Actions,
              private providerService: ProviderService) {}
}
