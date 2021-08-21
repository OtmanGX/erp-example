import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import * as NotificationSelectors from './notification.selectors';
import * as NotificationActions from './notification.actions';
import { ToastService } from '@tanglass-erp/core/common';
import { MNotification } from './notification.model';



@Injectable({
  providedIn: 'root',
})
export class NotificationFacadeService  {
  notifications$ = this.store.select(NotificationSelectors.getAllNotifications);
  constructor(private store: Store, private toastrService: ToastService) {}

  showNotification(notification: MNotification) {
    this.dispatch(NotificationActions.AddNotification({ notification }));
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
