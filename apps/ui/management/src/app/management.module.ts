import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
// import { SalePointsComponent } from './sale-points/sale-points.component';
// import { CompaniesComponent } from './companies/companies.component';
// import { UsersComponent } from './users/users.component';
// import { PopUserComponent } from './users/pop-user/pop-user.component';
//
// import { PopSalePointsComponent } from './sale-points/pop-sale-points/pop-sale-points.component';
// import { PopCompaniesComponent } from './companies/pop-companies/pop-companies.component';
import { EmployeesComponent } from '@TanglassUi/management/employees/employees.component';
import { MaterialModule } from '@tanglass-erp/material';
import { DialogEmployeeComponent } from '@TanglassUi/management/employees/dialog-employee/dialog-employee.component';

@NgModule({
  declarations: [
    ManagementComponent,
    // SalePointsComponent,
    // CompaniesComponent,
    // UsersComponent,
    // PopUserComponent,
    // PopSalePointsComponent,
    // PopCompaniesComponent,
    DialogEmployeeComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    ManagementComponent,
    // SalePointsComponent,
    // CompaniesComponent,
    // UsersComponent,
    // PopUserComponent,
    // PopSalePointsComponent,
    // PopCompaniesComponent,
    ManagementRoutingModule,
  ],
})
export class ManagementModule {
}
