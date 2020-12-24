import { UserMockService } from '@TanglassCore/mock/management/user.mock.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as UsersActions from '../actions/user.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.loadUsers, UsersActions.loadUsersByCompanies, UsersActions.loadUsersBySalePoint),
      mergeMap((action) =>
        this.userService.getAll().pipe(
          map((data) =>
          UsersActions.loadUsersSuccess({users: data})
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
        this.userService.addNewOne(action.user).pipe(
          map((data) =>
          UsersActions.addUserSuccess({user: data})
          ),
          catchError((error) =>
            of(UsersActions.addUserFailure({ error }))
          )
        )
      )
    )
  });


  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.updateUser),
      mergeMap((action) =>
        this.userService.addNewOne(action.user).pipe(
          map((data) =>
          UsersActions.updateUserSuccess({user: data})
          ),
          catchError((error) =>
            of(UsersActions.updateUserFailure({ error }))
          )
        )
      )
    )
  });

  constructor(private actions$: Actions,
              private userService: UserMockService) {}
}
