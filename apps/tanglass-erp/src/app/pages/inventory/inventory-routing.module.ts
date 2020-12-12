import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InventoryComponent  } from "./inventory.component";
import {AccessoireOrdersComponent  } from "./accessoire-orders/accessoire-orders.component";

import { AccessoireOrderDetailComponent } from "./accessoire-order-detail/accessoire-order-detail.component";
const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      {
        path: 'accessoireOrders',
        component: AccessoireOrdersComponent ,
      },
      {
        path: 'accessoireOrders/detail/:id',
        component: AccessoireOrderDetailComponent ,
      },
    
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
