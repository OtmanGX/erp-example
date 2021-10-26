import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as ProductActions from './product-draft.actions';
import { Product_draft } from '@tanglass-erp/core/sales';

export const PRODUCT_FEATURE_KEY = 'product';

export interface ProductState extends EntityState<Product_draft> {
  selectedId?: string; // which Product record has been selected
  selectedProducts?: Product_draft[];
  selectedGlasses?: Product_draft[];
  selectedM2?: number;
  selectedML?: number;
  loaded: boolean; // has the Product list been loaded
  error?: string | null; // last known error (if any)
}

export interface ProductPartialState {
  readonly [PRODUCT_FEATURE_KEY]: ProductState;
}

export const productAdapter: EntityAdapter<Product_draft> = createEntityAdapter<
  Product_draft
>();

export const initialProductState: ProductState = productAdapter.getInitialState(
  {
    // set initial required properties
    selectedId: null,
    selectedProducts: [],
    loaded: false,
    error: null,
  }
);

const productReducer = createReducer(
  initialProductState,

  on(ProductActions.setProductsState, (state, { products }) =>
    productAdapter.setAll(products, { ...state, loaded: true })
  ),
  on(ProductActions.clearProducts, (state) =>
    productAdapter.setAll([], { ...state, loaded: true })
  ),
  on(ProductActions.addGlassSuccess, (state, action) =>
    productAdapter.addOne<ProductState>(action.glass, state)
  ),
  on(ProductActions.addManyGlassesSuccess, (state, action) =>
    productAdapter.addMany<ProductState>(action.glasses, state)
  ),
  on(ProductActions.addManyServicesSuccess, (state, action) =>
    productAdapter.addMany<ProductState>(action.services, state)
  ),
  on(ProductActions.addAccessorySuccess, (state, action) =>
    productAdapter.addOne<ProductState>(action.accessory, state)
  ),
  on(ProductActions.addConsumableSuccess, (state, action) =>
    productAdapter.addOne<ProductState>(action.consumable, state)
  ),
  on(ProductActions.addManyConsumablesSuccess, (state, action) =>
    productAdapter.addMany<ProductState>(action.consumables, state)
  ),
  on(ProductActions.addServiceSuccess, (state, action) =>
    productAdapter.addOne<ProductState>(action.service, state)
  ),
  on(ProductActions.removeProductsSuccess, (state, action) =>
    productAdapter.removeMany<ProductState>(action.ids, state)
  ),
  on(ProductActions.selectManyGlasses, (state, action) => ({
    ...state,
    selectedGlasses: action.glasses,
    selectedM2: action.glasses.reduce((acc, val) => acc + val.m2, 0),
    selectedML: action.glasses.reduce((acc, val) => acc + val.ml, 0),
    error: null,
  })),
  on(ProductActions.clearSelectedGlasses, (state, action) => ({
    ...state,
    selectedGlasses: [],
    error: null,
  })),
  on(
    ProductActions.loadProductsFailure,
    ProductActions.addGlassFailure,
    ProductActions.addAccessoryFailure,
    ProductActions.addConsumableFailure,
    ProductActions.addServiceFailure,
    ProductActions.removeProductsFailure,
    ProductActions.addManyGlassesFailure,
    ProductActions.addManyServicesFailure,
    ProductActions.addManyConsumablesFailure,
    //ProductActions.loadSelectedProductsFailure,
    (state, { error }) => ({
      ...state,
      error,
    })
  )
);

export function reducerProduct(
  state: ProductState | undefined,
  action: Action
) {
  return productReducer(state, action);
}
