import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { NotificationFacadeService } from '@tanglass-erp/store/app';
import { Router } from '@angular/router';

import * as fromJobOrders from './job-orders.reducer';
import * as JobOrdersActions from './job-orders.actions';
import { JobOrderService } from '@tanglass-erp/core/manufacturing';

@Injectable()
export class JobOrdersEffects {
  loadJobOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(JobOrdersActions.loadJobOrders),
      mergeMap((action) =>
        this.jobOrderService
          .getAll()
          .pipe(
            map((data) =>
            JobOrdersActions.loadJobOrdersSuccess({ jobOrders: data.data.manufacturing_job_order })
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
            this.router.navigate(['manufacturing/jobOrder']);
            return JobOrdersActions.addJobOrderSuccess({
              jobOrder: data.data.insert_manufacturing_job_order_one,
            });
          }),
          catchError((error) => of(JobOrdersActions.addJobOrderFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private jobOrderService: JobOrderService,
    private router: Router,
    private notificationService: NotificationFacadeService,
   ) {}
}
