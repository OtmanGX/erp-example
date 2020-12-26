import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductionComponent } from './production.component';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { MainGridComponent } from './components/grid/main-grid/main-grid.component';
import { MatEditComponent } from './components/grid/mat-edit/mat-edit.component';
import { MaterialModule } from '@tanglass-erp/material';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { GridObjectRenderComponentComponent } from './components/grid/grid-object-render-component/grid-object-render-component.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { NgxPrintModule } from 'ngx-print';

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
    MainGridComponent,
    MatEditComponent,
    GridObjectRenderComponentComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([MatEditComponent, GridObjectRenderComponentComponent]),
    NgxPrintModule
  ], providers: [DatePipe],
})
export class ProductionModule { }
