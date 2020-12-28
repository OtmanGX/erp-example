import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductionComponent } from './production.component';
import 'ag-grid-enterprise';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { GridObjectRenderComponentComponent } from './components/grid-object-render-component/grid-object-render-component.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { NgxPrintModule } from 'ngx-print';
import { MainAgGridModule } from '@tanglass-erp/ag-grid';

const routes: Routes = [
   {
    path: '',
    component: ProductionComponent,
    children: [
      {path: '',
      redirectTo: 'ListOrders',
      pathMatch: 'full'},
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
  declarations: [
    ProductionComponent,
    ListOrdersComponent,
    OrderDetailComponent,
    GridObjectRenderComponentComponent],
  imports: [
    CommonModule,
    MainAgGridModule,
    RouterModule.forChild(routes),
    NgxPrintModule
  ], providers: [DatePipe],
})
export class ProductionModule { }
