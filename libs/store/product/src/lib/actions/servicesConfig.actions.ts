import { ServiceConfig, DetailedServiceConfig } from '@tanglass-erp/core/product';
import { createAction, props } from '@ngrx/store';

/****************************************************************** */
/*****LOAD ServiceConfigS ** */
/****************************************************************** */

export const loadServiceConfigs= createAction('[ServiceConfigs Component] Load ServiceConfigs');


export const loadServiceConfigsSuccess = createAction(
  '[ServiceConfig Effect] Load ServiceConfigs Success',
  props<{ ServiceConfigs: ServiceConfig[] }>()
);

export const loadServiceConfigsFailure = createAction(
  '[ServiceConfig Effect] Load ServiceConfigs Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****LOAD INDIVIDUAL ServiceConfig ** */
/****************************************************************** */

export const loadServiceConfigById = createAction(
  '[ServiceConfig Card Component] Load ServiceConfig By Id',
  props<{ id: any }>()
  );


export const loadServiceConfigByIdSuccess = createAction(
  '[ServiceConfig Effect] Load ServiceConfig By Id Success',
  props<{ ServiceConfig: DetailedServiceConfig }>()
);

export const loadServiceConfigByIdFailure = createAction(
  '[ServiceConfig Effect] Load ServiceConfig By Id Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****ADD INDIVIDUAL ServiceConfig ** */
/****************************************************************** */

export const addServiceConfig = createAction(
  '[ServiceConfigs Component] Add ServiceConfig',
  props<{ ServiceConfig: ServiceConfig }>()
);

export const addServiceConfigSuccess = createAction(
  '[ServiceConfig Effect] Add ServiceConfig Success',
  props<{ ServiceConfig: ServiceConfig }>()
);

export const addServiceConfigFailure = createAction(
  '[ServiceConfig Effect] Add ServiceConfig Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****UPDATE INDIVIDUAL ServiceConfig ** */
/****************************************************************** */

export const updateServiceConfig = createAction(
  '[ServiceConfigs Component] Update ServiceConfig',
  props<{ ServiceConfig: ServiceConfig }>()
);
export const updateServiceConfigSuccess = createAction(
  '[ServiceConfig Effect] Update ServiceConfig Success',
  props<{ ServiceConfig: ServiceConfig }>()
);
export const updateServiceConfigFailure = createAction(
  '[ServiceConfig Effect] Update ServiceConfig failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****REMOVE INDIVIDUAL ServiceConfig ** */
/****************************************************************** */

export const removeServiceConfig = createAction(
  '[ServiceConfigs Component] Update ServiceConfig',
  props<{ ServiceConfig: ServiceConfig }>()
);
export const removeServiceConfigSuccess = createAction(
  '[ServiceConfig Effect] Update ServiceConfig Success',
  props<{ ServiceConfig: ServiceConfig }>()
);
export const removeServiceConfigFailure = createAction(
  '[ServiceConfig Effect] Update ServiceConfig failure',
  props<{ error: any }>()
);
