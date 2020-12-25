import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management.component';
import { EmployeesComponent } from '@TanglassUi/management/employees/employees.component';
import { CompaniesComponent } from '@TanglassUi/management/companies/companies.component';
import { SalePointsComponent } from '@TanglassUi/management/sale-points/sale-points.component';

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
        path: 'salePoints',
        component: SalePointsComponent,
      },
      {
        path: 'users',
        component: EmployeesComponent,
      },
    ],
  },
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule { }
