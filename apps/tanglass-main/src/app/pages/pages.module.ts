import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@tanglass-erp/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ProfileComponent } from './auth/profile/profile.component';
import { Auth0Guard } from '../shared/services/auth0-guard.service';
import { ROLES } from '@tanglass-erp/store/app';

const routes: Routes = [
  { path: '', component: PagesComponent,
    canActivate: [Auth0Guard],
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
        canActivate: [Auth0Guard],
        data: {roles: [ROLES.admin]}
      },
      {
        path: "profile",
        data: { title: '', breadcrumb: "Profile", noLink: true },
        children: [
          {
            path: 'overview',
            component: ProfileComponent,
            data: { title: 'Profile', breadcrumb: "Profile" },
          }
        ]
      },
      {
        path: 'management',
        canActivate: [Auth0Guard],
        data: { title: 'Gestion', breadcrumb: "Gestion", noLink: true, roles: [ROLES.admin]},
        loadChildren: () =>
          import('@TanglassUi/management/management.module').then(m => m.ManagementModule)
      },
      {
        path: 'contact',
        data: { title: 'Contact', breadcrumb: "Contact", noLink: true},
        loadChildren: () =>
          import('@TanglassUi/contact/contact.module').then(m => m.ContactModule),
      },
      {
        path: 'inventory',
        data: { title: 'Stock', breadcrumb: "Stock", noLink: true},
        loadChildren: () =>
          import('@TanglassUi/inventory/inventory.module').then(m => m.InventoryModule),
      },
      {
        path: 'product',
        data: { title: 'Produits', breadcrumb: "Produits", noLink: true},
        loadChildren: () =>
          import('@TanglassUi/product/product.module').then(m => m.ProductModule),
      },
      {
        path: 'purchase',
        data: { title: 'Achat', breadcrumb: "Achat", noLink: true},
        loadChildren: () =>
          import('@TanglassUi/purchase/purchase.module').then(m => m.PurchaseModule),
      },
      {
        path: 'sales',
        data: { title: 'Ventes', breadcrumb: "Ventes", noLink: true, roles: [ROLES.admin]},
        canActivate: [Auth0Guard],
        loadChildren: () =>
          import('@TanglassUi/sales/sales.module').then(m => m.SalesModule),
      },{
        path: 'cash-register',
        data: { title: 'Caisse', breadcrumb: "Caisse"},
        loadChildren: () =>
          import('@TanglassUi/cash-register/cash-register.module').then(m => m.CashRegisterModule),
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
    PerfectScrollbarModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ]
})
export class PagesModule { }
