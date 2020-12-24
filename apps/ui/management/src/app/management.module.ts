import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { EmployeesComponent } from '@TanglassUi/management/employees/employees.component';
import { MaterialModule } from '@tanglass-erp/material';
import { DialogEmployeeComponent } from '@TanglassUi/management/employees/dialog-employee/dialog-employee.component';
import { CompaniesComponent } from '@TanglassUi/management/companies/companies.component';
import { PopCompaniesComponent } from '@TanglassUi/management/companies/pop-companies/pop-companies.component';
import { SalePointsComponent } from '@TanglassUi/management/sale-points/sale-points.component';
import { PopSalePointsComponent } from '@TanglassUi/management/sale-points/pop-sale-points/pop-sale-points.component';

@NgModule({
  declarations: [
    ManagementComponent,
    SalePointsComponent,
    CompaniesComponent,
    PopSalePointsComponent,
    PopCompaniesComponent,
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
    SalePointsComponent,
    CompaniesComponent,
    PopSalePointsComponent,
    PopCompaniesComponent,
    ManagementRoutingModule,
  ],
})
export class ManagementModule {
}
