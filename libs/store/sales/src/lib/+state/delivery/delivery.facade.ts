import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromDelivery from './delivery.reducer';
import * as DeliverySelectors from './delivery.selectors';
import * as DeliveryActions from './delivery.actions';
import {
  deliveryFilter,
  DeliveryForm,
  DeliveryLine,
  DeliveryStatus,
  InsertedDeliveryForm
} from '@tanglass-erp/core/sales';
import { filter, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NotificationFacadeService } from '@tanglass-erp/store/app';

@Injectable()
export class DeliveryFacade {
  loaded$ = this.store.pipe(select(DeliverySelectors.getDeliveryLoaded));
  allDelivery$ = this.loaded$.pipe(
    filter((e) => !!e),
    switchMap(() => this.store.pipe(select(DeliverySelectors.getAllDelivery)))
  );
  selectedDelivery$ = this.store
    .pipe(select(DeliverySelectors.getSelectedEntity))
    .pipe(filter((e) => !!e));

  constructor(
    private store: Store<fromDelivery.DeliveryPartialState>,
    private router: Router,
    private notificationService: NotificationFacadeService
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadDeliveries(params: deliveryFilter) {
    this.dispatch(DeliveryActions.loadDelivery(params));
  }

  loadDeliveryById(id: string) {
    this.dispatch(DeliveryActions.loadDeliveryById({ id }));
  }

  addDelivery(delivery: InsertedDeliveryForm) {
    this.dispatch(DeliveryActions.addDelivery({ delivery }));
  }

  updateDelivery(delivery: InsertedDeliveryForm) {
    this.dispatch(DeliveryActions.updateDelivery({ delivery }));
  }

  removeDelivery(ids: string[]) {
    this.dispatch(DeliveryActions.removeDelivery({ ids }));
  }

  calculateAmounts(delivery_lines: DeliveryLine[]) {
    const amount_ttc = delivery_lines
      .reduce((acc, curr) => acc + curr.amount, 0);
    const amount_tva = (amount_ttc/6);
    const amount_ht = amount_ttc*(5/6);
    return {
      amount_ttc,
      amount_tva,
      amount_ht
    }
  }

  //  Other
  deliveryToInvoice(data: Array<DeliveryForm>) {
    if (!data.every((e) => e.status === DeliveryStatus.NOT_INVOICED)) {
      this.notificationService.showToast(
        'warning',
        'Facture',
        'Assurez-vous que tous les bons de livraisons séléctionnés ne sont pas encore facturés'
      );
      return;
    }
    this.router.navigate(['sales/invoice/add'], {
      state: { deliveries: data.map((e) => ({ delivery_id: e.id })) },
    });
  }
}
