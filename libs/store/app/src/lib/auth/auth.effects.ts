import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '@tanglass-erp/core/common';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadUser),
      mergeMap((action) =>
        this.userService
          .getUser()
          .pipe(map((value) => AuthActions.loadUserSuccess({ user: value })))
      ),
      catchError((error) => of(AuthActions.loadUserFailure({ error })))
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
