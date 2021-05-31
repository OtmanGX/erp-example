import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import * as NotificationSelectors from './notification.selectors';
import * as NotificationActions from './notification.actions';
import { MNotification } from './notification.model';


@Injectable({
  providedIn: 'root'
})
export class NotificationFacadeService {
  notifications$ = this.store.select(NotificationSelectors.getAllNotifications);
  constructor(private store: Store) { }

  addNotification(notification: MNotification) {
    this.dispatch(NotificationActions.AddNotification({notification}));
  }

  clearNotifications() {
    this.dispatch(NotificationActions.clearNotification());
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
