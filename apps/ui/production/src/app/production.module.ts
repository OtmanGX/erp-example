import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductionComponent } from './production.component';


const routes: Routes = [
   {
    path: '',
    component: ProductionComponent,
    children: [
      // {
      //   path: 'ListOrders',
      //   component: ListOrdersComponent ,
      // },
      // {
      //   path: 'detail/:id',
      //   component: OrderDetailComponent ,
      // },
    ],
  },
];

@NgModule({
  declarations: [ProductionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductionModule { }
