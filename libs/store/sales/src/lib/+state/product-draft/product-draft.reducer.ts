import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ProductActions from './product-draft.actions';
import { Product_draft } from "@tanglass-erp/core/sales";
import { Actions } from '@ngrx/effects';

export const PRODUCT_FEATURE_KEY = 'product';

export interface ProductState extends EntityState<Product_draft> {
  selectedId?:string|number; // which Product record has been selected
  loaded: boolean; // has the Product list been loaded
  error?: string | null; // last known error (if any)
}

export interface ProductPartialState {
  readonly [PRODUCT_FEATURE_KEY]: ProductState;
}

export const productAdapter: EntityAdapter<Product_draft> = createEntityAdapter<
  Product_draft
>(
  {
    selectId: (product: Product_draft) => product.id,
  }
);

export const initialProductState: ProductState = productAdapter.getInitialState({
  // set initial required properties
  selectedId: null,
  loaded: false,
  error: null,

});

const productReducer = createReducer(
  initialProductState,
  
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  on(ProductActions.loadProductsSuccess, (state,action) =>
    productAdapter.setAll(action.products, { ...state, loaded: true })
  ),

  on(ProductActions.addGlassSuccess,
    (state, action) => productAdapter.addOne<ProductState>(action.glass, state)
    ),
  on(ProductActions.addAccessorySuccess,
    (state, action) => productAdapter.addOne<ProductState>(action.accessory, state)
    ),

  on(ProductActions.addConsumableSuccess,
    (state, action) => productAdapter.addOne<ProductState>(action.consumable, state)
    ),

  on(ProductActions.addServiceSuccess,
    (state, action) => productAdapter.addOne<ProductState>(action.service, state)
    ),

  on(ProductActions.loadProductsFailure,
    ProductActions.addGlassFailure,
    ProductActions.addAccessoryFailure,
    ProductActions.addConsumableFailure,
    ProductActions.addServiceFailure,

    (state, { error }) => ({
      ...state,
      error,
    }))
);

export function reducerProduct(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
