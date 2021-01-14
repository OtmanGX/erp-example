import { Customer, DetailedCustomer } from '@tanglass-erp/core/contact';
import { createAction, props } from '@ngrx/store';

/****************************************************************** */
/*****LOAD CUSTOMERS ** */
/****************************************************************** */

export const loadCustomers= createAction('[Customers Component] Load Customers');


export const loadCustomersSuccess = createAction(
  '[Customer Effect] Load Customers Success',
  props<{ customers: Customer[] }>()
);

export const loadCustomersFailure = createAction(
  '[Customer Effect] Load Customers Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****LOAD INDIVIDUAL CUSTOMER ** */
/****************************************************************** */

export const loadCustomerById = createAction(
  '[Customer Card Component] Load Customer By Id',
  props<{ id: any }>()
  );


export const loadCustomerByIdSuccess = createAction(
  '[Customer Effect] Load Customer By Id Success',
  props<{ customer: DetailedCustomer }>()
);

export const loadCustomerByIdFailure = createAction(
  '[Customer Effect] Load Customer By Id Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****ADD INDIVIDUAL CUSTOMER ** */
/****************************************************************** */

export const addCustomer = createAction(
  '[Customers Component] Add Customer',
  props<{ customer: Customer }>()
);

export const addCustomerSuccess = createAction(
  '[Customer Effect] Add Customer Success',
  props<{ customer: Customer }>()
);

export const addCustomerFailure = createAction(
  '[Customer Effect] Add Customer Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****UPDATE INDIVIDUAL CUSTOMER ** */
/****************************************************************** */

export const updateCustomer = createAction(
  '[Customers Component] Update Customer',
  props<{ customer: Customer }>()
);
export const updateCustomerSuccess = createAction(
  '[Customer Effect] Update Customer Success',
  props<{ customer: Customer }>()
);
export const updateCustomerFailure = createAction(
  '[Customer Effect] Update Customer failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****REMOVE INDIVIDUAL CUSTOMER ** */
/****************************************************************** */

export const removeCustomer = createAction(
  '[Customers Component] Update Customer',
  props<{ customer: Customer }>()
);
export const removeCustomerSuccess = createAction(
  '[Customer Effect] Update Customer Success',
  props<{ customer: Customer }>()
);
export const removeCustomerFailure = createAction(
  '[Customer Effect] Update Customer failure',
  props<{ error: any }>()
);
