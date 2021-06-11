import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales.component';
import { DraftComponent } from './pages/draft/draft.component';
import { QuotationComponent } from "./pages/quotation/quotation.component";
import { CreateQuotationComponent } from "./pages/quotation/create-quotation/create-quotation.component";

import { OrderComponent } from "./pages/order/order.component";
import { CreateOrderComponent } from "./pages/order/create-order/create-order.component";
import { DeliveryListComponent } from '@TanglassUi/sales/pages/delivery/delivery-list/delivery-list.component';
import { DeliveryAddComponent } from '@TanglassUi/sales/pages/delivery/delivery-add/delivery-add.component';
import { OrderCardComponent } from "./pages/order/order-card/order-card.component";
import { InvoiceListComponent } from '@TanglassUi/sales/pages/invoice/invoice-list/invoice-list.component';
import { InvoiceAddComponent } from '@TanglassUi/sales/pages/invoice/invoice-add/invoice-add.component';
import { InvoiceReadyComponent } from '@TanglassUi/sales/pages/invoice/invoice-ready/invoice-ready.component';
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
          { path: ':id', component: OrderCardComponent },

        ],
        data: { title: 'Orders', breadcrumb: "" }
      },
      {
        path: 'delivery',
        children: [
          { path: '', component: DeliveryListComponent },
          { path: 'add', component: DeliveryAddComponent },
          { path: 'update', component: DeliveryAddComponent },
        ],
        data: { title: 'Bons de livraison', breadcrumb: "" }
      },
      {
        path: 'invoice',
        children: [
          { path: '', component: InvoiceListComponent },
          { path: 'add', component: InvoiceAddComponent },
          { path: 'update', component: InvoiceAddComponent },
          { path: 'ready', component: InvoiceReadyComponent },
        ],
        data: { title: 'Factures', breadcrumb: "" }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
