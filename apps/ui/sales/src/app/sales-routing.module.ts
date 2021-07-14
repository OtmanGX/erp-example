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
import { QuotationCardComponent } from "@TanglassUi/sales/pages/quotation/quotation-card/quotation-card.component";
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
        data: { title: 'Drafts', breadcrumb: "Brouillons" }
      },
      {
        path: 'quotation',
        children: [
          { path: '', component: QuotationComponent },
          { path: 'createQuotation', component: CreateQuotationComponent },
          { path: ':id', component: QuotationCardComponent },

        ],
        data: { title: 'Quotations', breadcrumb: "Devis" },

      },
      {
        path: 'order',
        children: [
          { path: '', component: OrderComponent },
          { path: 'createOrder', component: CreateOrderComponent,  data: { breadcrumb: "Ajouter"}},
          { path: ':id', component: OrderCardComponent, data: { breadcrumb: "Détails"} },

        ],
        data: { title: 'Orders', breadcrumb: "Commandes" }
      },
      {
        path: 'delivery',
        children: [
          { path: '', component: DeliveryListComponent },
          { path: 'add', component: DeliveryAddComponent, data: { breadcrumb: "Ajouter"} },
          { path: 'update', component: DeliveryAddComponent,  data: { breadcrumb: "Mettre à jour"} },
        ],
        data: { title: 'Bons de livraison', breadcrumb: "Bons de livraison" }
      },
      {
        path: 'invoice',
        children: [
          { path: '', component: InvoiceListComponent },
          { path: 'add', component: InvoiceAddComponent, data: { breadcrumb: "Ajouter" } },
          { path: 'update', component: InvoiceAddComponent,  data: { breadcrumb: "Mettre à jour" } },
          { path: 'ready', component: InvoiceReadyComponent, data: { title: "" } },
        ],
        data: { title: 'Factures', breadcrumb: "Factures" }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
