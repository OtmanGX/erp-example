import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@tanglass-erp/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@tanglass-erp/store/app';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { InfrastructureGraphqlModule } from '../../../../../libs/infrastructure/graphql/src';


const routes: Routes = [
  { path: '', component: PagesComponent,
    children: [
      {
        path: 'management',
        loadChildren: () =>
          import('@TanglassUi/management/management.module').then(m => m.ManagementModule)
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('@TanglassUi/contact/contact.module').then(m => m.ContactModule),
      },
    ]}
];

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(),
    RouterModule.forChild(routes),
    InfrastructureGraphqlModule,
    PerfectScrollbarModule
  ]
})
export class PagesModule { }
