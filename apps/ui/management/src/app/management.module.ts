import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { SalePointsComponent } from './sale-points/sale-points.component';
import { CompaniesComponent } from './companies/companies.component';
import { UsersComponent } from './users/users.component';
import { PopUserComponent } from './users/pop-user/pop-user.component';

import { PopSalePointsComponent } from './sale-points/pop-sale-points/pop-sale-points.component';
import { PopCompaniesComponent } from './companies/pop-companies/pop-companies.component';
import { ThemeModule } from '@TanglassTheme/theme.module';

@NgModule({
  declarations: [
    ManagementComponent,
    SalePointsComponent,
    CompaniesComponent,
    UsersComponent,
    PopUserComponent,
    PopSalePointsComponent,
    PopCompaniesComponent,
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ManagementComponent,
    SalePointsComponent,
    CompaniesComponent,
    UsersComponent,
    PopUserComponent,
    PopSalePointsComponent,
    PopCompaniesComponent,
    ManagementRoutingModule,
  ],
})
export class ManagementModule {}
