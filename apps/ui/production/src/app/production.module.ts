import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductionComponent } from './production.component';
import { AgGridModule } from 'ag-grid-angular';
// import 'ag-grid-enterprise';

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
    RouterModule.forChild(routes),
    AgGridModule.withComponents([]),
  ]
})
export class ProductionModule { }
