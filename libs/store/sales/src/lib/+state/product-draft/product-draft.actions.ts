import { createAction, props } from '@ngrx/store';
import { Product_draft } from "@tanglass-erp/core/sales";



/****************************************************************** */
/*****LOAD  Products ** */
/****************************************************************** */

export const loadProduct = createAction(
  '[Product] Load ProductDraft',
  props<{ draft_id: number }>()

);

export const loadProductSuccess = createAction(
  '[Product] Load Product Success',
  props<{ product: Product_draft[] }>()
);

export const loadProductFailure = createAction(
  '[Product] Load Product Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****LOAD INDIVIDUAL Product ** */
/****************************************************************** */

export const loadProductById = createAction(
  '[product Card Component] Load Product  By Id',
  props<{ id:any }>()
  );


export const loadProductByIdSuccess = createAction(
  '[product Effect] Load  By Id Success',
  props<{ product: Product_draft }>()
);

export const loadProductByIdFailure = createAction(
  '[product Effect] Load product By Id Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****ADD INDIVIDUAL Glass ** */
/****************************************************************** */

export const addGlass = createAction(
  '[List  Glass Component] Add  Glass',
  props<{ glass: Product_draft }>()
);

export const addGlassSuccess = createAction(
  '[  Product Effect] Add   Glass Success',
  props<{ glass: Product_draft }>()
);

export const addGlassFailure = createAction(
  '[  Glass Effect] Add   Glass Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****ADD INDIVIDUAL Service ** */
/****************************************************************** */

export const addService = createAction(
  '[List  Service Component] Add  Service',
  props<{ service: Product_draft }>()
);

export const addServiceSuccess = createAction(
  '[  Service Effect] Add   Service Success',
  props<{ service: Product_draft }>()
);

export const addServiceFailure = createAction(
  '[  Service Effect] Add   Service Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****ADD INDIVIDUAL Consumable ** */
/****************************************************************** */

export const addConsumable = createAction(
  '[List  Consumable Component] Add  Consumable',
  props<{ consumable: Product_draft }>()
);

export const addConsumableSuccess = createAction(
  '[  Consumable Effect] Add   Consumable Success',
  props<{ consumable: Product_draft }>()
);

export const addConsumableFailure = createAction(
  '[  Consumable Effect] Add   Consumable Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****ADD INDIVIDUAL Accessory ** */
/****************************************************************** */

export const addAccessory = createAction(
  '[List  Accessory Component] Add  Accessory',
  props<{ accessory: Product_draft }>()
);

export const addAccessorySuccess = createAction(
  '[  Product Effect] Add   Accessory Success',
  props<{ accessory: Product_draft }>()
);

export const addAccessoryFailure = createAction(
  '[  Accessory Effect] Add   Accessory Failure',
  props<{ error: any }>()
);



/****************************************************************** */
/*****REMOVE INDIVIDUAL    Product** */
/****************************************************************** */

export const removeProduct= createAction(
  '[List   Product Component] Delete  Product',
  props<{ productId: any }>()
);
export const removeProductSuccess = createAction(
  '[ Product Effect] Delete  Product Success',
  props<{ productId: any }>()
);
export const removeProductFailure = createAction(
  '[  Product Effect] Delete   Product failure',
  props<{ error: any }>()
);
