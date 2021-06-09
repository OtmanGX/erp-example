import { createAction, props } from '@ngrx/store';
import { MNotification } from './notification.model';


export const loadNotifications = createAction(
  '[Notification Component] Load Notifications'
);
export const loadNotificationsSuccess = createAction(
  '[Alert effect] Load Notifications Succces',
  props<{notifications: MNotification[]}>()
);
export const loadNotificationsFailure = createAction(
  '[Alert effect] Load Notifications Failure',
  props<{error: any}>()
);


export const clearNotification = createAction(
  '[Alert effect] Clear Notifications',
);


export const AddNotification = createAction(
  '[Notification Component] Add Notification',
  props<{notification: MNotification}>()
);
export const AddNotificationSuccess = createAction(
  '[Alert Component] Add Notification success',
  props<{notification: MNotification}>()
);
export const AddNotificationFailure = createAction(
  '[Alert Component] Add Notification Failure',
  props<{error: any}>()
);
