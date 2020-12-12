import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacturesComponent} from './factures.component'
import {InvoicesListComponent  } from "./invoices-list/invoices-list.component";
import {InvoiceFicheComponent  } from "./invoice-fiche/invoice-fiche.component";

const routes: Routes = [
  {
    path: '',
    component: FacturesComponent,
    children:[
      {
        path:'list',
        component:InvoicesListComponent
      },
      {
        path:'create',
        component:InvoiceFicheComponent
      },

      {
        path: "fiche/:id",
        component: InvoiceFicheComponent,
      },
    ]



  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturesRoutingModule { }
