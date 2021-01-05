import { UserService } from '@tanglass-erp/core/management';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as UsersActions from '../actions/user.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      mergeMap((action) =>
        this.userService.getAll().pipe(
          map((data) =>
          UsersActions.loadUsersSuccess({users: data.data.management_userProfile})
          ),
          catchError((error) =>
            of(UsersActions.loadUsersFailure({ error }))
          )
        )
      )
    )
  });




  createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.addUser),
      mergeMap((action) =>
        this.userService.insertOne(action.user).pipe(
          map((data) =>
          UsersActions.addUserSuccess({user: data.data.insert_management_userProfile})
          ),
          catchError((error) =>
            of(UsersActions.addUserFailure({ error }))
          )
        )
      )
    )
  });


  constructor(private actions$: Actions,
              private userService: UserService) {}
}
