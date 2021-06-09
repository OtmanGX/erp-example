import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import * as NotificationSelectors from './notification.selectors';
import * as NotificationActions from './notification.actions';
import { MNotification } from './notification.model';
import { ToastrService } from 'ngx-toastr';

const TOAST_OPTIONS = {
  positionClass: 'toast-bottom-center',
  closeButton: true,
  disableTimeOut: true,
};

@Injectable({
  providedIn: 'root',
})
export class NotificationFacadeService {
  notifications$ = this.store.select(NotificationSelectors.getAllNotifications);
  constructor(private store: Store, private toastr: ToastrService) {}

  showNotification(notification: MNotification) {
    this.dispatch(NotificationActions.AddNotification({ notification }));
  }

  showNotifToast(notification: MNotification) {
    this.showNotification(notification);
    this.showToast(
      notification.operation,
      notification.title,
      notification.message
    );
  }

  showToast(operation: string, title: string, msg: string) {
    switch (operation) {
      case 'success':
      case 'error':
      case 'warning':
      case 'info':
        this.toastr[operation](msg, title);
        break;
      default:
        this.toastr.info(msg, title);
        break;
    }
  }

  clearNotifications() {
    this.dispatch(NotificationActions.clearNotification());
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
