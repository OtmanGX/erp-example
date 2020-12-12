import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPrintModule} from 'ngx-print';

import { ProductionRoutingModule } from './production-routing.module';
import { ProductionComponent } from './production.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbSelectModule,
  NbTooltipModule,
  NbAccordionModule,

} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { PrintingFormComponent } from './order-detail/printing-form/printing-form.component';


@NgModule({
  declarations: [ProductionComponent, ListOrdersComponent, OrderDetailComponent, PrintingFormComponent],
  imports: [
    CommonModule,
    ProductionRoutingModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbSelectModule,
    NbTooltipModule,
    Ng2SmartTableModule,
    NbAccordionModule,
    NgxPrintModule

  ]
})
export class ProductionModule { }
