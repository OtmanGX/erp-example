import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales.component';
import { DraftComponent } from './pages/draft/draft.component';
import { QuotationComponent } from "./pages/quotation/quotation.component";
import { CreateQuotationComponent } from "./pages/quotation/create-quotation/create-quotation.component";

import { OrderComponent } from "./pages/order/order.component";
import { CreateOrderComponent } from "./pages/order/create-order/create-order.component";

const routes: Routes = [
  {
    path: '',
    component: SalesComponent,
    children: [
      {
        path: 'draft',
        children: [
          { path: '', component: DraftComponent },
        ],
        data: { title: 'Drafts', breadcrumb: "" }
      },
      {
        path: 'quotation',
        children: [
          { path: '', component: QuotationComponent },
          { path: 'createQuotation', component: CreateQuotationComponent },

        ],
        data: { title: 'Quotations', breadcrumb: "" },

      },
      {
        path: 'order',
        children: [
          { path: '', component: OrderComponent },
          { path: 'createOrder', component: CreateOrderComponent },

        ],
        data: { title: 'Orders', breadcrumb: "" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
