import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './product-draft.actions';
import { DraftService } from '@tanglass-erp/core/sales';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { NotificationFacadeService } from '@tanglass-erp/store/app';

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
  insertManyConsumablesDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addManyConsumables),
      mergeMap((action) =>
        this.ProductService.addManyConsumables(action.consumables).pipe(
          map((data) => {
            return ProductActions.addManyConsumablesSuccess({
              consumables: data.data.insert_sales_consumable_draft.returning.map(
                (cons) => ({
                  ...cons.product_draft,
                  dependent_id: cons.dependent_id,
                })
              ),
            });
          }),
          catchError((error) =>
            of(ProductActions.addManyConsumablesFailure({ error }))
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
  insertManyGlassesDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addManyGlasses),
      mergeMap((action) =>
        this.ProductService.addManyGlasses(action.glasses).pipe(
          map((data) => {
            this.notificationService.showNotifToast({
              message: 'Verres enregistrés avec succès',
              operation: 'info',
              title: 'Glasses',
              icon: 'closed',
              route: 'sales/order',
              color: 'warn',
            });
            return ProductActions.addManyGlassesSuccess({
              glasses: data.data.insert_sales_glass_draft.returning.map(
                (glass) => glass.product_draft
              ),
            });
          }),
          catchError((error) =>
            of(ProductActions.addManyGlassesFailure({ error }))
          )
        )
      )
    );
  });
  insertManyServicesDraft$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addManyServices),
      mergeMap((action) =>
        this.ProductService.addManyServices(action.services).pipe(
          map((data) => {
            this.notificationService.showNotifToast({
              message: 'Services enregistrés avec succès',
              operation: 'info',
              title: 'Services',
              icon: 'closed',
              route: 'sales/order',
              color: 'warn',
            });
            return ProductActions.addManyServicesSuccess({
              services: data.data.insert_sales_service_draft.returning.map(
                (service) => ({
                  ...service.product_draft,
                  dependent_id: service.dependent_id,
                })
              ),
            });
          }),
          catchError((error) => of(ProductActions.addManyServicesFailure({ error })))
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
    private store: Store,
    private notificationService: NotificationFacadeService
  ) {}
}
