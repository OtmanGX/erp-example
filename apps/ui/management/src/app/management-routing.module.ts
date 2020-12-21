import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from "./management.component";
import { CompaniesComponent } from "./companies/companies.component";
import {UsersComponent} from "./users/users.component";
import { SalePointsComponent } from "./sale-points/sale-points.component";
const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
    children: [
    {
        path: 'companies',
        component: CompaniesComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'salePoints',
        component: SalePointsComponent,
      },
    ],
  },
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
