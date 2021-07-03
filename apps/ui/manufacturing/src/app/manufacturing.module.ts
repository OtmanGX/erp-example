import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jobOrdersComponent } from "@TanglassUi/manufacturing/pages/job-order/job-orders.component";

@NgModule({
  declarations: [
    jobOrdersComponent,
  ],
  imports: [
    CommonModule,

  ]
})
export class ManufacturingModule { }
