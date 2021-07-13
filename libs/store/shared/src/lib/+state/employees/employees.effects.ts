import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromEmployees from './employees.reducer';
import * as EmployeesActions from './employees.actions';
import { ShortFeatureService } from '@tanglass-erp/core/common';
import { NotificationFacadeService } from '@tanglass-erp/store/app';
import * as OrdersSalepointActions from '@TanglassStore/shared/lib/+state/orders-salepoint/orders-salepoint.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class EmployeesEffects {


  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeesActions.loadEmployees),
      mergeMap((action) =>
        this.shortFeatureService.getAllEmployees().pipe(
          map((data) =>

            EmployeesActions.loadEmployeesSuccess({ employees: data.data.management_userProfile })
          ),
          catchError((error) => {
            this.notificationService.showToast(
              'error',
              'Erreur de chargement',
              error
            );
            return of(EmployeesActions.loadEmployeesFailure({ error }));
          })
        )
      )
    )
  );





  constructor(
    private actions$: Actions,
    private shortFeatureService: ShortFeatureService,
    private notificationService: NotificationFacadeService
  ) { }
}
