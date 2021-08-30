import { Injectable } from '@angular/core';
import {
  NotificationQueryGQL,
  NotificationSubscriptionGQL,
  ChangeNotificationStateGQL,
} from '@tanglass-erp/infrastructure/graphql';
import { rolesDirection } from '@tanglass-erp/core/management';
import { InsertedErpNotificationStatus } from '../models/erp-notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notificationSubscription$ = this.notificationQueryGQL.watch().valueChanges;

  constructor(
    private notificationQueryGQL: NotificationQueryGQL,
    private notificationSubscriptionGQL: NotificationSubscriptionGQL,
    private changeNotificationStateGQL: ChangeNotificationStateGQL
  ) {}

  loadNotifications(user_id: string, role: rolesDirection) {
    this.notificationQueryGQL.watch().subscribeToMore({
      document: this.notificationSubscriptionGQL.document,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const newFeedItem = subscriptionData.data;
        return newFeedItem;
      },
    });
  }

  changeNotificationsState(states: InsertedErpNotificationStatus[]) {
    return this.changeNotificationStateGQL.mutate({ objects: states });
  }
}
