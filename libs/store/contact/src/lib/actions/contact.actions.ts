import { Contact, DetailedContact, InsertedContact } from '@tanglass-erp/core/contact';
import { createAction, props } from '@ngrx/store';

/****************************************************************** */
/*****LOAD ContactS ** */
/****************************************************************** */

export const loadContacts= createAction('[Contacts Component] Load Contacts');


export const loadContactsSuccess = createAction(
  '[Contact Effect] Load Contacts Success',
  props<{ contacts: Contact[] }>()
);

export const loadContactsFailure = createAction(
  '[Contact Effect] Load Contacts Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****LOAD INDIVIDUAL Contact ** */
/****************************************************************** */

export const loadContactById = createAction(
  '[Contact Card Component] Load Contact By Id',
  props<{ id: any }>()
  );


export const loadContactByIdSuccess = createAction(
  '[Contact Effect] Load Contact By Id Success',
  props<{ contact: DetailedContact }>()
);

export const loadContactByIdFailure = createAction(
  '[Contact Effect] Load Contact By Id Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****ADD INDIVIDUAL CONTACT ** */
/****************************************************************** */

export const addContact = createAction(
  '[Contacts Component] Add Contact',
  props<{ contact: InsertedContact }>()
);

export const addContactSuccess = createAction(
  '[Contact Effect] Add Contact Success',
  props<{ contact: Contact }>()
);

export const addContactFailure = createAction(
  '[Contact Effect] Add Contact Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****UPDATE INDIVIDUAL CONTACT ** */
/****************************************************************** */

export const updateContact = createAction(
  '[Contacts Component] Update Contact',
  props<{ contact: DetailedContact }>()
);
export const updateContactSuccess = createAction(
  '[Contact Effect] Update Contact Success',
  props<{ contact: Contact }>()
);
export const updateContactFailure = createAction(
  '[Contact Effect] Update Contact failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****REMOVE INDIVIDUAL CONTACT ** */
/****************************************************************** */

export const removeContact = createAction(
  '[Contacts Component] Delete Contact',
  props<{ contactId: any }>()
);
export const removeContactSuccess = createAction(
  '[Contact Effect] Delete Contact Success',
  props<{ contactId: any }>()
);
export const removeContactFailure = createAction(
  '[Contact Effect] Delete Contact failure',
  props<{ error: any }>()
);
