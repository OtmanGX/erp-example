import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as ProductActions from './product-draft.actions';
import { DraftService } from '@tanglass-erp/core/sales';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductDraftFacade } from "./product-draft.facade";
@Injectable()
export class ProductDraftEffects {


  loadSelectedProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadSelectedProducts),
      mergeMap((action) =>
        this.ProductService.getDraftPorducts(action.draft_id).pipe(
          map((data) => {
            console.log('products loading...', data)
            return ProductActions.loadSelectedProductsSuccess({ products: data.data.sales_product_draft })
          }
          ),
          catchError((error) =>
            of(ProductActions.loadSelectedProductsFailure({ error }))
          )
        )
      )
    )
  });

  insertGlassesDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addGlass),
      mergeMap((action) =>
        this.ProductService.addGlass(action.glass).pipe(
          map((data) =>
            ProductActions.addGlassSuccess({ glass: data.data.insert_sales_glass_draft_one.product_draft }),
          ),
          catchError((error) =>
            of(ProductActions.addGlassFailure({ error }))
          )
        )
      )
    )
  });
  insertServicesDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addService),
      mergeMap((action) =>
        this.ProductService.addService(action.service).pipe(
          map((data) =>
            ProductActions.addServiceSuccess({
              service: data.data.insert_sales_service_draft_one.product_draft
            })
          ),
          catchError((error) =>
            of(ProductActions.addServiceFailure({ error }))
          )
        )
      )
    )
  });
  insertConsumablesDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addConsumable),
      mergeMap((action) =>
        this.ProductService.addConsumable(action.consumable).pipe(
          map((data) =>
            ProductActions.addConsumableSuccess({ consumable: data.data.insert_sales_consumable_draft_one.product_draft })
          ),
          catchError((error) =>
            of(ProductActions.addConsumableFailure({ error }))
          )
        )
      )
    )
  });
  insertAccessoriesDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addAccessory),
      mergeMap((action) =>
        this.ProductService.addAccessory(action.accessory).pipe(
          map((data) =>
            ProductActions.addAccessorySuccess({ accessory: data.data.insert_sales_accessory_draft_one.product_draft })
          ),
          catchError((error) =>
            of(ProductActions.addAccessoryFailure({ error }))
          )
        )
      )
    )
  });



  removeProductDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.removeProduct),
      mergeMap((action) =>
        this.ProductService.removeProduct(action.productId).pipe(
          map((data) =>
            ProductActions.removeProductSuccess({ productId: data.data.delete_sales_product_draft_by_pk.id })
          ),
          catchError((error) =>
            of(ProductActions.removeProductFailure({ error }))
          )
        )
      )
    )
  });


  constructor(private actions$: Actions, private ProductService: DraftService
  ) { }
}
