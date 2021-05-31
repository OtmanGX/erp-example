import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationFacadeService } from './notification/notification-facade.service';
import { StoreModule } from '@ngrx/store';
import * as NotificationReducer from './notification/notification.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      NotificationReducer.notificationFeatureKey,
      NotificationReducer.reducer
    )
  ],
  providers: [NotificationFacadeService],
  exports: []
})
export class StoreAppModule {}
