import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { EmployeesComponent } from '@TanglassUi/management/employees/employees.component';
import { DialogEmployeeComponent } from '@TanglassUi/management/employees/dialog-employee/dialog-employee.component';
import { CompaniesComponent } from '@TanglassUi/management/companies/companies.component';
import { PopCompaniesComponent } from '@TanglassUi/management/companies/pop-companies/pop-companies.component';
import { SalePointsComponent } from '@TanglassUi/management/sale-points/sale-points.component';
import { PopSalePointsComponent } from '@TanglassUi/management/sale-points/pop-sale-points/pop-sale-points.component';
import { ManagementStateModule } from '@TanglassStore/management/management-state.module';
import { MainAgGridModule } from '@tanglass-erp/ag-grid';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@tanglass-erp/store/app';
import { SalePointCardComponent } from '@TanglassUi/management/sale-points/sale-point-card/sale-point-card.component';
import { EmployeeCardComponent } from '@TanglassUi/management/employees/employee-card/employee-card.component';
import { CompanyCardComponent } from '@TanglassUi/management/companies/company-card/company-card.component';

@NgModule({
  declarations: [
    ManagementComponent,
    SalePointsComponent,
    CompaniesComponent,
    PopSalePointsComponent,
    PopCompaniesComponent,
    DialogEmployeeComponent,
    EmployeesComponent,
    SalePointCardComponent,
    EmployeeCardComponent,
    CompanyCardComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ManagementStateModule,
    MainAgGridModule,
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
