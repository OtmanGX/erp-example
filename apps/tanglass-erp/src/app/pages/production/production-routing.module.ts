import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionComponent } from "./production.component";
import {ListOrdersComponent} from "./list-orders/list-orders.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";

const routes: Routes = [

  {
    path: '',
    component: ProductionComponent,
    children: [
      {
        path: 'ListOrders',
        component: ListOrdersComponent ,
      },
      {
        path: 'detail/:id',
        component: OrderDetailComponent ,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
