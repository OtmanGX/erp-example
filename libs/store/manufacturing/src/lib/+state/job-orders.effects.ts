import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { NotificationFacadeService } from '@tanglass-erp/store/app';
import { Router } from '@angular/router';
import * as JobOrdersActions from './job-orders.actions';
import { JobOrderService } from '@tanglass-erp/core/manufacturing';
import { select, Store, Action } from '@ngrx/store';
import * as JobOrdersSelectors from './job-orders.selectors';
import * as fromJobOrders from './job-orders.reducer';
import { Line } from 'pdfmake-wrapper';

@Injectable()
export class JobOrdersEffects {
  selectedJobOrderID$ = this.store.pipe(
    select(JobOrdersSelectors.getSelectedId)
  );
  loadJobOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(JobOrdersActions.loadJobOrders),
      mergeMap((action) =>
        this.jobOrderService.getAll().pipe(
          map((data) =>
            JobOrdersActions.loadJobOrdersSuccess({
              jobOrders: data.data.manufacturing_job_order,
            })
          ),
          catchError((error) =>
            of(JobOrdersActions.loadJobOrdersFailure({ error }))
          )
        )
      )
    );
  });

  addJobOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(JobOrdersActions.addJobOrder),
      mergeMap((action) =>
        this.jobOrderService.insertOne(action.jobOrder).pipe(
          map((data) => {
            this.notificationService.showNotifToast({
              message: 'Ajouté avec succès',
              operation: 'success',
              title: 'Ordre de fabrication',
              time: new Date(),
              icon: 'check',
              route: 'manufacturing/jobOrder',
              color: 'primary',
            });
            this.router.navigate(['manufacturing/jobOrders']);
            return JobOrdersActions.addJobOrderSuccess({
              jobOrder: data.data.insert_manufacturing_job_order_one,
            });
          }),
          catchError((error) =>
            of(JobOrdersActions.addJobOrderFailure({ error }))
          )
        )
      )
    );
  });

  getJobOrderById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(JobOrdersActions.loadJobOrderById),
      mergeMap((action) =>
        this.jobOrderService.getOneById(action.id).pipe(
          map((data) => {
            let jobOrder = {
              ...data.data.manufacturing_job_order_by_pk,
              glass_drafts: [
                ...data.data.manufacturing_job_order_by_pk.glass_drafts.map(
                  (glass) => ({
                    ...glass,
                    manufacturing_lines: glass.manufacturing_lines.map(
                      (prodLine) => ({
                        ...prodLine,
                        manufacturing_services: prodLine.manufacturing_services.map(
                          (data) => data.service_draft.labelFactory
                        ),
                        manufacturing_consumables: prodLine.manufacturing_consumables.map(
                          (data) => data.consumable_draft.labelFactory
                        ),
                      })
                    ),
                  })
                ),
              ],
            };
            
            return JobOrdersActions.loadJobOrderByIdSuccess({
              jobOrder: jobOrder,
            });
          }),
          catchError((error) =>
            of(JobOrdersActions.loadJobOrderByIdFailure({ error }))
          )
        )
      )
    );
  });
  addManufacturingLines = createEffect(() => {
    return this.actions$.pipe(
      ofType(JobOrdersActions.addManufacturingLines),
      mergeMap((action) =>
        this.jobOrderService
          .generateManufacturingLines(action.manufacturingLines)
          .pipe(
            map((data) => {
              return JobOrdersActions.addManufacturingLinesSuccess({
                manufacturingLines: data,
              });
            }),
            catchError((error) =>
              of(JobOrdersActions.addManufacturingLinesFailure({ error }))
            )
          )
      )
    );
  });
  constructor(
    private actions$: Actions,
    private jobOrderService: JobOrderService,
    private router: Router,
    private notificationService: NotificationFacadeService,
    private store: Store<fromJobOrders.JobOrdersPartialState>
  ) {}
}
