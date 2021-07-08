import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as CashBoxActions from './cash-box.actions';
import { CashBoxService } from '@tanglass-erp/core/cash-register';
import { NotificationFacadeService } from '@tanglass-erp/store/app';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ShortFeatureService } from '@tanglass-erp/core/common';

@Injectable()
export class CashBoxEffects {
  loadCashBox$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CashBoxActions.loadCashBox),
      mergeMap((action) =>
        this.cashBoxService.getCashBoxById(action.id, action.salepoint_id).pipe(
          map((data) => {
            const cashBox = {
              ...data.data.cash_register_cash_box_by_pk,
              payments: data.data.sales_payment,
            };
            return CashBoxActions.loadCashBoxSuccess({ cashBox });
          }),
          catchError((error) => {
            this.notificationService.showToast(
              'error',
              'Erreur de chargement',
              error
            );
            return of(CashBoxActions.loadCashBoxFailure({ error }));
          })
        )
      )
    )
  );



  addCashBox$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CashBoxActions.addCashBox),
      mergeMap((action) =>
        this.cashBoxService.insertCashBox(action.cashBox).pipe(
          map(() => {
            this.notificationService.showNotifToast({
              message: 'Ajouté avec succès',
              operation: 'success',
              title: 'La caisse',
              time: new Date(),
              icon: 'checked',
              route: 'cash-register',
              color: 'primary',
            });
            return CashBoxActions.addCashBoxSuccess();
          }),
          catchError((error) => {
            this.notificationService.showToast(
              'error',
              'Erreur de chargement',
              error
            );
            return of(CashBoxActions.addCashBoxFailure({ error }));
          })
        )
      )
    )
  );


  addPayment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CashBoxActions.addPayment),
      mergeMap((action) =>
        this.cashBoxService.insertPayment(action.payment).pipe(
          map(() => {
            this.notificationService.showNotifToast({
              message: 'Payée avec succès',
              operation: 'success',
              title: 'La caisse',
              time: new Date(),
              icon: 'checked',
              route: 'cash-register',
              color: 'primary',
            });
            return CashBoxActions.addPaymentSuccess();
          }),
          catchError((error) => {
            this.notificationService.showToast(
              'error',
              'Erreur lors d\'insertion',
              error
            );
            return of(CashBoxActions.addPaymentFailure({ error }));
          })
        )
      )
    )
  );


  loadSalePoints$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CashBoxActions.addPayment),
      mergeMap((action) =>
        this.shortFeatureService.getAllSalePoints().pipe(
          map((data) =>
            CashBoxActions.loadCashBoxSalePointsSuccess({salepoints: data.data.management_salesPoint})
          ),
          catchError((error) => {
            this.notificationService.showToast(
              'error',
              'Erreur de chargement',
              error
            );
            return of(CashBoxActions.loadCashBoxSalePointsFailure({ error }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private cashBoxService: CashBoxService,
    private shortFeatureService: ShortFeatureService,
    private notificationService: NotificationFacadeService
  ) {}
}
