import { DetailedProvider, Provider } from '@tanglass-erp/core/contact';
import { createAction, props } from '@ngrx/store';

/****************************************************************** */
/*****LOAD PROVIDERS ** */
/****************************************************************** */

export const loadProviders= createAction('[Providers Component] Load Providers');


export const loadProvidersSuccess = createAction(
  '[Provider Effect] Load Providers Success',
  props<{ providers: Provider[] }>()
);

export const loadProvidersFailure = createAction(
  '[Provider Effect] Load Providers Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****LOAD INDIVIDUAL PROVIDER ** */
/****************************************************************** */

export const loadProviderById = createAction(
  '[Provider Card Component] Load Provider By Id',
  props<{ id: any }>()
  );


export const loadProviderByIdSuccess = createAction(
  '[Provider Effect] Load Provider By Id Success',
  props<{ provider: DetailedProvider }>()
);

export const loadProviderByIdFailure = createAction(
  '[Provider Effect] Load Provider By Id Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****ADD INDIVIDUAL PROVIDER ** */
/****************************************************************** */

export const addProvider = createAction(
  '[Providers Component] Add Provider',
  props<{ provider: Provider }>()
);

export const addProviderSuccess = createAction(
  '[Provider Effect] Add Provider Success',
  props<{provider: Provider }>()
);

export const addProviderFailure = createAction(
  '[Provider Effect] Add Provider Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****UPDATE INDIVIDUAL PROVIDER ** */
/****************************************************************** */

export const updateProvider = createAction(
  '[Providers Component] Update Provider',
  props<{ provider: Provider }>()
);
export const updateProviderSuccess = createAction(
  '[Provider Effect] Update Provider Success',
  props<{ provider: Provider }>()
);
export const updateProviderFailure = createAction(
  '[Provider Effect] Update Provider failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****REMOVE INDIVIDUAL PROVIDER ** */
/****************************************************************** */

export const removeProvider = createAction(
  '[Providers Component] Update Provider',
  props<{ provider: Provider }>()
);
export const removeProviderSuccess = createAction(
  '[Provider Effect] Update Provider Success',
  props<{ provider: Provider }>()
);
export const removeProviderFailure = createAction(
  '[Provider Effect] Update Provider failure',
  props<{ error: any }>()
);
