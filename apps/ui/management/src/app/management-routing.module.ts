import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management.component';
import { EmployeesComponent } from '@TanglassUi/management/employees/employees.component';
import { CompaniesComponent } from '@TanglassUi/management/companies/companies.component';
import { SalePointsComponent } from '@TanglassUi/management/sale-points/sale-points.component';
import { SalePointCardComponent } from '@TanglassUi/management/sale-points/sale-point-card/sale-point-card.component';
import { EmployeeCardComponent } from '@TanglassUi/management/employees/employee-card/employee-card.component';
import { CompanyCardComponent } from '@TanglassUi/management/companies/company-card/company-card.component';

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
        path: 'companies/:id',
        component: CompanyCardComponent,
      },
      {
        path: 'salePoints',
        component: SalePointsComponent,
      },
      {
        path: 'salePoints/:id',
        component: SalePointCardComponent,
      },
      {
        path: 'users',
        component: EmployeesComponent,
      },
      {
        path: 'users/:id',
        component: EmployeeCardComponent,
      },
    ],
  },
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule { }
