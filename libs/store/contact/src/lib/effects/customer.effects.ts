import { CustomerService } from '@tanglass-erp/core/contact';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as CustomersActions from '../actions/customer.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CustomersEffects {

  loadCustomers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomersActions.loadCustomers),
      mergeMap((action) =>
        this.customerService.getAll().pipe(
          map((data) =>
          CustomersActions.loadCustomersSuccess({customers: data.data.contact_customer})
          ),
          catchError((error) =>
            of(CustomersActions.loadCustomersFailure({ error }))
          )
        )
      )
    )
  });

  insertCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomersActions.addCustomer),
      mergeMap((action) =>
        this.customerService.insertOne(action.customer).pipe(
          map((data) =>
          CustomersActions.addCustomerSuccess({customer: data.data.insert_contact_customer_one})
          ),
          catchError((error) =>
            of(CustomersActions.addCustomerFailure({ error }))
          )
        )
      )
    )
  });



  updateCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomersActions.updateCustomer),
      mergeMap((action) =>
        this.customerService.updateOne(action.customer).pipe(
          map((data) =>
          CustomersActions.updateCustomerSuccess({customer: data.data.update_contact_customer_by_pk})
          ),
          catchError((error) =>
            of(CustomersActions.updateCustomerFailure({ error }))
          )
        )
      )
    )
  });

  removeCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomersActions.removeCustomer),
      mergeMap((action) =>
        this.customerService.removeOne(action.customer.id).pipe(
          map((data) =>
          CustomersActions.removeCustomerSuccess({customer: data.data.delete_contact_customer_by_pk.id})
          ),
          catchError((error) =>
            of(CustomersActions.removeCustomerFailure({ error }))
          )
        )
      )
    )
  });





  constructor(private actions$: Actions,
              private customerService: CustomerService) {}
}
