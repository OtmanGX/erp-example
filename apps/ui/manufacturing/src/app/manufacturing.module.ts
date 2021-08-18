import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturingRoutingModule } from '@TanglassUi/manufacturing/manufacturing-routing.module';
import { MainAgGridModule } from '@tanglass-erp/ag-grid';
import { MaterialModule } from '@tanglass-erp/material';
import { JobOrdersComponent } from '@TanglassUi/manufacturing/pages/job-order/job-orders.component';
import { StoreManufacturingModule } from '@tanglass-erp/store/manufacturing';
import { JobCardComponent } from '@TanglassUi/manufacturing/pages/job-order/job-card/job-card.component';
import { ManufacturingComponent } from './manufacturing.component';
import { JobProgressComponent } from '@TanglassUi/manufacturing/components/job-progress/job-progress.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { ThemeModule } from '@TanglassTheme/theme.module';

@NgModule({
  declarations: [
    ManufacturingComponent,
    JobOrdersComponent,
    JobCardComponent,
    JobProgressComponent,
  ],
  imports: [
    CommonModule,
    ManufacturingRoutingModule,
    MainAgGridModule,
    ThemeModule,
    MaterialModule,
    StoreManufacturingModule,
    NgxBarcodeModule
  ],
})
export class ManufacturingModule {}
