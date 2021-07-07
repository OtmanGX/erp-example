import { createAction, props } from '@ngrx/store';
import { Product_draft,InsertedProduct } from '@tanglass-erp/core/sales';

/****************************************************************** */
/*****LOAD  Products ** */
/****************************************************************** */

export const loadProducts = createAction(
  '[Products] Load Products',
  props<{ draft_id: number }>()
);

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product_draft[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****LOAD INDIVIDUAL Product ** */
/****************************************************************** */

export const loadProductById = createAction(
  '[product Card Component] Load Product  By Id',
  props<{ id: any }>()
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
  props<{ glass: InsertedProduct }>()
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
  props<{ service: InsertedProduct }>()
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
  props<{ consumable: InsertedProduct }>()
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
  props<{ accessory: InsertedProduct }>()
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
/*****ADD INDIVIDUAL Accessory ** */
/****************************************************************** */

export const addCustomerItem = createAction(
  '[order  products] Add  Customer Item',
  props<{ customer_item: InsertedProduct }>()
);

export const addCustomerItemSuccess = createAction(
  '[  order  products] Add   Customer Item Success',
  props<{ customer_item: Product_draft }>()
);

export const addCustomerItemFailure = createAction(
  '[  order  products] Add   Customer Item Failure',
  props<{ error: any }>()
);

/****************************************************************** */
/*****REMOVE INDIVIDUAL    Product** */
/****************************************************************** */

export const removeProduct = createAction(
  '[List   Product Component] Delete  Product',
  props<{ productId: string }>()
);
export const removeProductSuccess = createAction(
  '[ Product Effect] Delete  Product Success',
  props<{ productId: string }>()
);
export const removeProductFailure = createAction(
  '[  Product Effect] Delete   Product failure',
  props<{ error: any }>()
);

export const setProductsState = createAction(
  '[Products]  Set  Products Success ',
  props<{ products: Product_draft[] }>()
);


// remove Products Form
export const removeProducts = createAction(
  '[Products] remove Products',
  props<{ ids: string[] }>()
);

export const removeProductsSuccess = createAction(
  '[Products] remove Products Success',
  props<{ ids: string[] }>()
);

export const removeProductsFailure = createAction(
  '[Products] remove Products Failure',
  props<{ error: any }>()
);


/****************************************************************** */
/*****ADD  BIS  Product to be reproduced** */
/****************************************************************** */

export const addReparationProducts = createAction(
  '[Reparation Products ] Add Reparation Products ',
  props<{ products: Product_draft[] }>()
);

export const addReparationProductsSuccess = createAction(
  '[Reparation Products Effect] Add Reparation Products  Success',
  props<{ products: Product_draft}>()
);

export const addReparationProductsFailure = createAction(
  '[Reparation Products Effect] Add Reparation  Products Failure',
  props<{ error: any }>()
);


