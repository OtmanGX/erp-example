import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as UserActions from '../actions/user.actions';
import { User } from '@TanglassCore/models/management/users';

export const USER_FEATURE_KEY = 'users';

export interface State extends EntityState<User> {
  loaded: boolean; // has the Companie list been loaded
  error?: string | null; // last known error (if any)
}


export const userAdapter: EntityAdapter<User> = createEntityAdapter<
User
>();

export const initialState: State = userAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  error: null,
});

const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UserActions.loadUsersSuccess,
      (state, action) =>
        userAdapter.setAll(action.users, { ...state, loaded: true })
  ),
  on(UserActions.addUserSuccess,
    (state, action) => userAdapter.addOne(action.user, state)
  ),
  on(UserActions.updateUserSuccess, (state, action) =>
  userAdapter.upsertOne(action.user, state)
  ),
  on(UserActions.addUserFailure,
     UserActions.loadUsersFailure,
     UserActions.updateUserFailure,
     (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
