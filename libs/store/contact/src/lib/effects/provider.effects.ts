import { ProviderService } from '@tanglass-erp/core/contact';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ProvidersActions from '../actions/provider.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProvidersEffects {

  loadProviders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProvidersActions.loadProviders),
      mergeMap( () =>
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
        this.providerService.removeOne(action.providerId).pipe(
          map((data) =>
          ProvidersActions.removeProviderSuccess({providerId: data.data.delete_contact_provider_by_pk.id})
          ),
          catchError((error) =>
            of(ProvidersActions.removeProviderFailure({ error }))
          )
        )
      )
    )
  });

  addContactToProvider$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProvidersActions.addContactToProvider),
      mergeMap((action) =>
        this.providerService.addContact(action.contact).pipe(
          map((data) =>
          ProvidersActions.addContactToProviderSuccess({contact: data.data.insert_contact_provider_contact_one})
          ),
          catchError((error) =>
            of(ProvidersActions.addContactToProviderFailure({ error }))
          )
        )
      )
    )
  });


  affectContactToProvider$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProvidersActions.affectContactToProvider),
      mergeMap((action) =>
        this.providerService.affectContact(action.contact).pipe(
          map((data) =>
          ProvidersActions.affectContactToProviderSuccess({contact: data.data.insert_contact_provider_contact})
          ),
          catchError((error) =>
            of(ProvidersActions.affectContactToProviderFailure({ error }))
          )
        )
      )
    )
  });

  addAdressToProvider$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProvidersActions.addAdressToProvider),
      mergeMap((action) =>
        this.providerService.addAddress(action.adress).pipe(
          map((data) =>
          ProvidersActions.addAdressToProviderSuccess({adress: data.data.insert_contact_provider_address_one})
          ),
          catchError((error) =>
            of(ProvidersActions.addAdressToProviderFailure({ error }))
          )
        )
      )
    )
  });

  removeAdressToCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProvidersActions.removeAdressFromProvider),
      mergeMap((action) =>
        this.providerService.deleteAddress(action.adress).pipe(
          map((data) =>
          ProvidersActions.removeAdressFromProviderSuccess({adress: data.data.delete_contact_provider_address_by_pk})
          ),
          catchError((error) =>
            of(ProvidersActions.removeAdressFromProviderFailure({ error }))
          )
        )
      )
    )
  });

  constructor(private actions$: Actions,
              private providerService: ProviderService) {}
}
