import { User } from '@TanglassCore/models/management/users';
import { createAction, props } from '@ngrx/store';

/****************************************************************** */
/*****LOAD USERS ** */
/****************************************************************** */

export const loadUsers= createAction('[Users Component] Load Users');

export const loadUsersByCompanies= createAction('[Pop Companies Component] Load Users');

export const loadUsersBySalePoint= createAction('[Pop SalePoint Component] Load Users');

export const loadUsersSuccess = createAction(
  '[User Effect] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User Effect] Load Users Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****ADD INDIVIDUAL USER ** */
/****************************************************************** */

export const addUser = createAction(
  '[Pop Users Component] Add User',
  props<{ user: User }>()
);

export const addUserSuccess = createAction(
  '[User Effect] Add User Success',
  props<{ user: User }>()
);

export const addUserFailure = createAction(
  '[User Effect] Add User Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****UPDATE INDIVIDUAL USER ** */
/****************************************************************** */

export const updateUser = createAction(
  '[Pop Users Component] Update User',
  props<{ user: User }>()
);
export const updateUserSuccess = createAction(
  '[User Effect] Update User Success',
  props<{ user: User }>()
);
export const updateUserFailure = createAction(
  '[User Effect] Update User failure',
  props<{ error: any }>()
);
