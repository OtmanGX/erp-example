import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturingRoutingModule } from '@TanglassUi/manufacturing/manufacturing-routing.module';
import { MainAgGridModule } from '@tanglass-erp/ag-grid';
import { MaterialModule } from '@tanglass-erp/material';
import { jobOrdersComponent } from '@TanglassUi/manufacturing/pages/job-order/job-orders.component';
import { StoreManufacturingModule } from '@tanglass-erp/store/manufacturing';
@NgModule({
  declarations: [jobOrdersComponent],
  imports: [
    CommonModule,
    ManufacturingRoutingModule,
    MainAgGridModule,
    MaterialModule,
    StoreManufacturingModule,
  ],
})
export class ManufacturingModule {}
