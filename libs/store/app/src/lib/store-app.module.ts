import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationFacadeService } from './notification/notification-facade.service';
import { StoreModule } from '@ngrx/store';
import * as NotificationReducer from './notification/notification.reducer';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule, // required animations module
    StoreModule.forFeature(
      NotificationReducer.notificationFeatureKey,
      NotificationReducer.reducer
    ),
    ToastrModule.forRoot(
      {
        disableTimeOut: true,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        closeButton: true
      }
    ), // ToastrModule added
  ],
  providers: [NotificationFacadeService],
  exports: []
})
export class StoreAppModule {}
