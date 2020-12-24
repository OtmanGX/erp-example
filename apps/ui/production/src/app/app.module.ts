import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@TanglassCore/core.module';
import { MaterialModule } from '@tanglass-erp/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    MaterialModule,
    RouterModule.forRoot([{ path: '', loadChildren: () =>
        import('./production.module').then(m => m.ProductionModule) }],
      { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
