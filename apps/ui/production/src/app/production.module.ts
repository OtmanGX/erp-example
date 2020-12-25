import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductionComponent } from './production.component';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { MainGridComponent } from './components/main-grid/main-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatEditComponent } from './components/mat-edit/mat-edit.component';
import { MaterialModule } from '@tanglass-erp/material';
import { ListOrdersComponent } from './list-orders/list-orders.component';

const routes: Routes = [
   {
    path: '',
    component: ProductionComponent,
    children: [
      {
        path: '',
        component: ListOrdersComponent ,
      },
      // {
      //   path: 'detail/:id',
      //   component: OrderDetailComponent ,
      // },
    ],
  },
];

@NgModule({
  declarations: [
    ProductionComponent,
    ListOrdersComponent,
    MainGridComponent,
    MatEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([MatEditComponent]),
    BrowserAnimationsModule,
    MaterialModule,
  ], providers: [DatePipe],
})
export class ProductionModule { }
