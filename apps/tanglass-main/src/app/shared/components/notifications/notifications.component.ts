import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NotificationFacadeService } from '@tanglass-erp/store/app';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent implements OnInit {
  @Input() notificPanel;

  notifications$ = this.notifService.notifications$;

  constructor(private router: Router, public notifService: NotificationFacadeService) {}

  ngOnInit() {
    // Test purpose
    this.notifService.addNotification({
      id: '5',
      message: 'Contact Added',
      time: 'before 5mn',
      icon: 'checked',
      route: 'contact/contact',
      color: 'primary'
    });
    this.router.events.subscribe((routeChange) => {
      if (routeChange instanceof NavigationEnd) {
        this.notificPanel.close();
      }
    });
  }
  clearAll(e) {
    this.notifService.clearNotifications();
    e.preventDefault();
  }
}
