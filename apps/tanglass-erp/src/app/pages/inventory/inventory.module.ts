import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { AccessoireOrdersComponent } from './accessoire-orders/accessoire-orders.component';

import { AccessoireOrderDetailComponent } from './accessoire-order-detail/accessoire-order-detail.component';
import { ThemeModule } from '@TanglassTheme/theme.module';

@NgModule({
  declarations: [
    InventoryComponent,
    AccessoireOrdersComponent,
    AccessoireOrderDetailComponent,
  ],
  imports: [CommonModule, ThemeModule, InventoryRoutingModule, NgxPrintModule],
})
export class InventoryModule {}
