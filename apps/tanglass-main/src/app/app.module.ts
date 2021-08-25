import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfrastructureGraphqlModule } from '@tanglass-erp/infrastructure/graphql';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment as env } from '../environments/environment.prod';
import { ErrorInterceptorService } from './shared/services/error-interceptor.service';
import { StoreModule } from '@ngrx/store';
import { StoreAppModule } from '@tanglass-erp/store/app';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { Auth0Guard } from './shared/services/auth0-guard.service';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
    BrowserAnimationsModule,
    InfrastructureGraphqlModule,
    SharedModule,
    RouterModule.forRoot([{ path: '', canActivate: [Auth0Guard], loadChildren: () =>
        import('./pages/pages.module').then(m => m.PagesModule) }], { initialNavigation: 'enabled' }),

    StoreModule.forRoot( {}),
    StoreAppModule,
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    { provide: LOCALE_ID, useValue: "fr" },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
