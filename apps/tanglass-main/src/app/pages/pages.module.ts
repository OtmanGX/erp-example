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
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { StoreAppModule } from '../../../../../libs/store/app/src/lib/store-app.module';
import { AuthGuard } from '@auth0/auth0-angular';
import { ProfileComponent } from './auth/profile/profile.component';

const routes: Routes = [
  { path: '', component: PagesComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard/analytics"
      },
      {
        path: "404",
        component: NotFoundComponent
      },
      {
        path: "dashboard/analytics",
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "profile",
        children: [
          {
            path: 'overview',
            data: { title: 'Profile', breadcrumb: "" },
            component: ProfileComponent
          }
        ]
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
      {
        path: 'purchase',
        loadChildren: () =>
          import('@TanglassUi/purchase/purchase.module').then(m => m.PurchaseModule),
      },
      {
        path: 'sales',
        data: { title: 'Ventes', breadcrumb: "Ventes", noLink: true},
        loadChildren: () =>
          import('@TanglassUi/sales/sales.module').then(m => m.SalesModule),
      },
      {
        path: 'manufacturing',
        data: { title: 'Fabricarion', breadcrumb: "Fabrication", noLink: true},
        loadChildren: () =>
          import('@TanglassUi/manufacturing/manufacturing.module').then(m => m.ManufacturingModule),
      },
    ]},
  {
    path: "**",
    redirectTo: "404",
  },
];

@NgModule({
  declarations: [PagesComponent, NotFoundComponent, DashboardComponent, ProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(),
    StoreAppModule,
    PerfectScrollbarModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ]
})
export class PagesModule { }
