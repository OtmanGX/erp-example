import { ContactService } from '@tanglass-erp/core/contact';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ContactsActions from '../actions/contact.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ServicesConfigService } from '@tanglass-erp/core/product';

@Injectable()
export class ContactsEffects {

  loadContacts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactsActions.loadContacts),
      mergeMap( () =>
        this.contactService.getAll().pipe(
          map((data) =>
          ContactsActions.loadContactsSuccess({contacts: data.data.contact_contact})
          ),
          catchError((error) =>
            of(ContactsActions.loadContactsFailure({ error }))
          )
        )
      )
    )
  });

  insertContact$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactsActions.addContact),
      mergeMap((action) =>
        this.contactService.insertOne(action.contact).pipe(
          map((data) =>
          ContactsActions.addContactSuccess({contact: data.data.insert_contact_contact_one})
          ),
          catchError((error) =>
            of(ContactsActions.addContactFailure({ error }))
          )
        )
      )
    )
  });


  getContactById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactsActions.loadContactById),
      mergeMap((action) =>
        this.contactService.getOneById(action.id).pipe(
          map((data) =>
          ContactsActions.loadContactByIdSuccess({contact: data.data.contact_contact_by_pk})
          ),
          catchError((error) =>
            of(ContactsActions.loadContactByIdFailure({ error }))
          )
        )
      )
    )
  });

  updateContact$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactsActions.updateContact),
      mergeMap((action) =>
        this.contactService.updateOne(action.contact).pipe(
          map((data) =>
          ContactsActions.updateContactSuccess({contact: data.data.update_contact_contact_by_pk})
          ),
          catchError((error) =>
            of(ContactsActions.updateContactFailure({ error }))
          )
        )
      )
    )
  });

  removeContact$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactsActions.removeContact),
      mergeMap((action) =>
        this.contactService.removeOne(action.contactId).pipe(
          map((data) =>
          ContactsActions.removeContactSuccess({contactId: data.data.delete_contact_contact_by_pk.id})
          ),
          catchError((error) =>
            of(ContactsActions.removeContactFailure({ error }))
          )
        )
      )
    )
  });

  constructor(private actions$: Actions,
              private contactService: ContactService,
              ser:ServicesConfigService) {
                ser.insertOne({
                  labelFactory:"TRMP",
                  name:"trempage",
                  params:"{ep:number}"
                }).subscribe(obj=>obj.data.insert_product_serviceConfig_one)
              }
}
