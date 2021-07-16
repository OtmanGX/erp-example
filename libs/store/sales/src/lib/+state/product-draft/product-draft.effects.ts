import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as ProductActions from './product-draft.actions';
import { DraftService } from '@tanglass-erp/core/sales';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
@Injectable()
export class ProductDraftEffects {
  insertGlassDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addGlass),
      mergeMap((action) =>
        this.ProductService.addGlass(action.glass).pipe(
          map((data) => {
            let {
              __typename,
              ...product
            } = data.data.insert_sales_glass_draft_one.product_draft;
            return ProductActions.addGlassSuccess({
              glass: product,
            });
          }),
          catchError((error) => of(ProductActions.addGlassFailure({ error })))
        )
      )
    );
  });

  insertServicDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addService),
      mergeMap((action) =>
        this.ProductService.addService(action.service).pipe(
          map((data) => {
            let {
              __typename,
              ...product
            } = data.data.insert_sales_service_draft_one.product_draft;
            return ProductActions.addServiceSuccess({
              service: {
                ...product,
                dependent_id:
                  data.data.insert_sales_service_draft_one.dependent_id,
              },
            });
          }),
          catchError((error) => of(ProductActions.addServiceFailure({ error })))
        )
      )
    );
  });
  insertConsumablDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addConsumable),
      mergeMap((action) =>
        this.ProductService.addConsumable(action.consumable).pipe(
          map((data) => {
            let {
              __typename,
              ...product
            } = data.data.insert_sales_consumable_draft_one.product_draft;
            return ProductActions.addConsumableSuccess({
              consumable: {
                ...product,
                dependent_id:
                  data.data.insert_sales_consumable_draft_one.dependent_id,
              },
            });
          }),
          catchError((error) =>
            of(ProductActions.addConsumableFailure({ error }))
          )
        )
      )
    );
  });
  insertAccessoryDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addAccessory),
      mergeMap((action) =>
        this.ProductService.addAccessory(action.accessory).pipe(
          map((data) => {
            let {
              __typename,
              ...product
            } = data.data.insert_sales_accessory_draft_one.product_draft;

            return ProductActions.addAccessorySuccess({
              accessory: product,
            });
          }),
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
  insertBis$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addReparationProducts),
      mergeMap((action) =>
        this.ProductService.addGlass(action.item.glass).pipe(
          map((data) => {
            let {
              __typename,
              ...product
            } = data.data.insert_sales_glass_draft_one.product_draft;
            action.item.services.length
              ? action.item.services.map((item) => {
                  let {
                    status,
                    glass_draft,
                    delivered,
                    service_draft,
                    isLaunched,
                    consumable_draft,
                    count,
                    heigth,
                    width,
                    substance_id,
                    ...service
                  } = item;
                  service = {
                    ...service,
                    isRepeated: true,
                    dependent_id: product.glass_draft.id,
                  };

                  return this.store.dispatch(
                    ProductActions.addService({ service })
                  );
                })
              : null;
            action.item.consumables.length
              ? action.item.consumables.map((item) => {
                  let {
                    status,
                    glass_draft,
                    delivered,
                    service_draft,
                    isLaunched,
                    consumable_draft,
                    count,
                    heigth,
                    width,
                    substance_id,
                    ...consumable
                  } = item;
                  consumable = {
                    ...consumable,
                    isRepeated: true,
                    dependent_id: product.glass_draft.id,
                  };
                  return this.store.dispatch(
                    ProductActions.addConsumable({ consumable })
                  );
                })
              : null;
            return ProductActions.addGlassSuccess({
              glass: product,
            });
          }),
          catchError((error) => of(ProductActions.addGlassFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private ProductService: DraftService,
    private store: Store
  ) {}
}
