import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { NotificationFacadeService } from '@tanglass-erp/store/app';
import { Router } from '@angular/router';
import * as JobOrdersActions from './job-orders.actions';
import { JobOrderService } from '@tanglass-erp/core/manufacturing';

@Injectable()
export class JobOrdersEffects {
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
            return JobOrdersActions.loadJobOrderByIdSuccess({
              jobOrder: data.data.manufacturing_job_order_by_pk,
            });
          }),
          catchError((error) =>
            of(JobOrdersActions.loadJobOrderByIdFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private jobOrderService: JobOrderService,
    private router: Router,
    private notificationService: NotificationFacadeService
  ) {}
}
