import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management.component';
// import { CompaniesComponent } from './companies/companies.component';
// import {UsersComponent} from './users/users.component';
// import { SalePointsComponent } from './sale-points/sale-points.component';
import { EmployeesComponent } from '@TanglassUi/management/employees/employees.component';
const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
    children: [
    // {
    //     path: 'companies',
    //     component: CompaniesComponent,
    //   },
    //   {
    //     path: 'users',
    //     component: UsersComponent,
    //   },
      // {
      //   path: 'salePoints',
      //   component: SalePointsComponent,
      // },
      {
        path: '',
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
