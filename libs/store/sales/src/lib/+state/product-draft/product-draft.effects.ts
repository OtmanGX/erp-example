import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as ProductActions from './product-draft.actions';
import { DraftService } from '@tanglass-erp/core/sales';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class ProductDraftEffects {
  insertGlassesDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addGlass),
      mergeMap((action) =>
        this.ProductService.addGlass(action.glass).pipe(
          map((data) => {
            return ProductActions.addGlassSuccess({
              glass: data.data.insert_sales_glass_draft_one.product_draft,
            });
          }),
          catchError((error) => of(ProductActions.addGlassFailure({ error })))
        )
      )
    );
  });
  insertServicesDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addService),
      mergeMap((action) =>
        this.ProductService.addService(action.service).pipe(
          map((data) =>
            ProductActions.addServiceSuccess({
              service: {
                ...data.data.insert_sales_service_draft_one.product_draft,
                dependent_id:
                  data.data.insert_sales_service_draft_one.dependent_id,
              },
            })
          ),
          catchError((error) => of(ProductActions.addServiceFailure({ error })))
        )
      )
    );
  });
  insertConsumablesDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addConsumable),
      mergeMap((action) =>
        this.ProductService.addConsumable(action.consumable).pipe(
          map((data) =>
            ProductActions.addConsumableSuccess({
              consumable: {
                ...data.data.insert_sales_consumable_draft_one.product_draft,
                dependent_id:
                  data.data.insert_sales_consumable_draft_one.dependent_id,
              },
            })
          ),
          catchError((error) =>
            of(ProductActions.addConsumableFailure({ error }))
          )
        )
      )
    );
  });
  insertAccessoriesDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addAccessory),
      mergeMap((action) =>
        this.ProductService.addAccessory(action.accessory).pipe(
          map((data) =>
            ProductActions.addAccessorySuccess({
              accessory:
                data.data.insert_sales_accessory_draft_one.product_draft,
            })
          ),
          catchError((error) =>
            of(ProductActions.addAccessoryFailure({ error }))
          )
        )
      )
    );
  });

  removeProductDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.removeProducts),
      mergeMap((action) =>
        this.ProductService.removeProducts(action.ids).pipe(
          map((data) =>
            ProductActions.removeProductsSuccess({
              ids: action.ids,
            })
          ),
          catchError((error) =>
            of(ProductActions.removeProductsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private ProductService: DraftService
  ) {}
}
