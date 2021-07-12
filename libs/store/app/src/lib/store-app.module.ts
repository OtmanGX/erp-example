import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationFacadeService } from './notification/notification-facade.service';
import { StoreModule } from '@ngrx/store';
import * as NotificationReducer from './notification/notification.reducer';
import { ToastrModule } from 'ngx-toastr';
import * as fromAuth from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    // BrowserAnimationsModule, // required animations module
    StoreModule.forFeature(
      NotificationReducer.notificationFeatureKey,
      NotificationReducer.reducer
    ),
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
    ToastrModule.forRoot({
      disableTimeOut: true,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
    }),
  ],
  providers: [NotificationFacadeService],
  exports: [],
})
export class StoreAppModule {}
