import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import * as NotificationSelectors from './notification.selectors';
import * as NotificationActions from './notification.actions';
import { ToastService, NotificationService } from '@tanglass-erp/core/common';
import { MNotification } from './notification.model';
import { AuthFacadeService } from '../auth/auth-facade.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NotificationFacadeService {
  notifications$ = this.store.select(NotificationSelectors.getAllNotifications);

  constructor(
    private store: Store,
    private toastrService: ToastService,
    private notificationService: NotificationService,
    private authService: AuthFacadeService
  ) {}

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }

  public loadNotifications() {
    this.dispatch(NotificationActions.loadNotifications());
    const { user_id, role } = this.authService.currentUser;
    this.notificationService.loadNotifications(user_id, role);
  }

  changeNotificationState(hide: boolean) {
    this.notifications$.pipe(take(1)).subscribe((notifications) =>
      this.dispatch(
        NotificationActions.changeNotificationsState({
          ids: notifications.map((e) => e.id),
          hide,
          user_id: this.authService.currentUser.id,
        })
      )
    );
  }


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
    this.notifications$.pipe(take(1)).subscribe((notifications) =>
      this.dispatch(
        NotificationActions.changeNotificationsState({
          ids: notifications.map((e) => e.id),
          hide: true,
          user_id: this.authService.currentUser.id,
        })
      )
    );
    this.dispatch(NotificationActions.clearNotification());
  }
}
