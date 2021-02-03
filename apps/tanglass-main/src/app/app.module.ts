import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { InfrastructureGraphqlModule } from '@tanglass-erp/infrastructure/graphql';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InfrastructureGraphqlModule,
    SharedModule,
    ToastrModule.forRoot({
      positionClass : 'toast-bottom-right'
    }),
    RouterModule.forRoot([{ path: '', loadChildren: () =>
        import('./pages/pages.module').then(m => m.PagesModule) }], { initialNavigation: 'enabled' }),
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
