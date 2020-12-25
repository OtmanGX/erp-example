import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@TanglassCore/core.module';
import { MaterialModule } from '@tanglass-erp/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductionModule } from './production.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    MaterialModule,
    HttpClientModule,
    ProductionModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', loadChildren: () =>
        import('./production.module').then(m => m.ProductionModule) }],
      { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
