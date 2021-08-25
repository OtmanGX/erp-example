import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import * as NotificationSelectors from './notification.selectors';
import * as NotificationActions from './notification.actions';
import { ToastService } from '@tanglass-erp/core/common';
import { MNotification } from './notification.model';
import { Apollo } from 'apollo-angular';
import {WarehouseSubscriptionGQL, WarehouseOnetimeGQL} from '@tanglass-erp/infrastructure/graphql';

@Injectable({
  providedIn: 'root',
})
export class NotificationFacadeService {
  notifications$ = this.store.select(NotificationSelectors.getAllNotifications);
  warehouses$= this.warehouseOnetimeGQL.watch().valueChanges;


  constructor(
    private store: Store,
    private toastrService: ToastService,
    private warehouseOnetimeGQL: WarehouseOnetimeGQL,
    private warehouseSubscriptionGQL: WarehouseSubscriptionGQL,

    ) {
    this.subscribe();
  }

  showNotification(notification: MNotification) {
    this.dispatch(NotificationActions.AddNotification({ notification }));
  }

  subscribe() {
      this.warehouseOnetimeGQL.watch().subscribeToMore({
        document: this.warehouseSubscriptionGQL.document,
        updateQuery: (prev, {subscriptionData}) => {
          if (!subscriptionData.data) {
            return prev;
          }

          const newFeedItem = subscriptionData.data.stock_warehouse;

          return {
            ...prev,
            entry: {
              comments: [newFeedItem, ...prev.stock_warehouse]
            }
          };
        }
      })
  }

  showNotifToast(notification: MNotification) {
    this.showNotification(notification);
    this.toastrService.showToast(
      notification.operation,
      notification.title,
      notification.message
    );
  }

  clearNotifications() {
    this.dispatch(NotificationActions.clearNotification());
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
