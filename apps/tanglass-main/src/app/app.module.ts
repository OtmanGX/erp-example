import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { InfrastructureGraphqlModule } from '@tanglass-erp/infrastructure/graphql';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment as env } from '../environments/environment.prod';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InfrastructureGraphqlModule,
    SharedModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
    ToastrModule.forRoot({
      positionClass : 'toast-bottom-right'
    }),
    RouterModule.forRoot([{ path: '', loadChildren: () =>
        import('./pages/pages.module').then(m => m.PagesModule) }], { initialNavigation: 'enabled' }),
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthHttpInterceptor,
    //   multi: true,
    // },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
