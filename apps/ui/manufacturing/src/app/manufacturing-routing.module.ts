import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { jobOrdersComponent } from "@TanglassUi/manufacturing/pages/job-order/job-orders.component";

const routes: Routes = [
  {
    path: '',
    component: jobOrdersComponent,
    children: [
      {
        path: 'jobOrders',
        children: [
          { path: '', component: jobOrdersComponent },
        ],
        data: { title: 'jobOrders', breadcrumb: "" }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
