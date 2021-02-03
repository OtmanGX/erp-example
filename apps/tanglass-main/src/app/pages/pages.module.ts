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
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: PagesComponent,
    children: [
      {
        path: "404",
        component: NotFoundComponent
      },
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
      {
        path: 'inventory',
        loadChildren: () =>
          import('@TanglassUi/inventory/inventory.module').then(m => m.InventoryModule),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('@TanglassUi/product/product.module').then(m => m.ProductModule),
      },
    ]},
  {
    path: "**",
    redirectTo: "404",
  },
];

@NgModule({
  declarations: [PagesComponent, NotFoundComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(),
    PerfectScrollbarModule
  ]
})
export class PagesModule { }
