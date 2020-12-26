import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from '@TanglassCore/core.module';
import { ManagementModule } from './management.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@tanglass-erp/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ManagementModule,
    RouterModule.forRoot([
      {
        path: 'management',
        loadChildren: () =>
          import('@TanglassUi/management/management.module').then(
            (m) => m.ManagementModule,
          ),
      },
    ]),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
