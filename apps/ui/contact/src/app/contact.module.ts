import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainContactComponent } from './main-contact.component';
import { MainAgGridModule } from '@tanglass-erp/ag-grid';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomerCardComponent } from './pages/customer/customer-card/customer-card.component';
import { PopCustomerComponent } from './pages/customer/pop-customer/pop-customer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Contact } from '../../../../../libs/tanglass-core/src/models/ventes/contact.model';
import { ContactCardComponent } from './pages/contact/contact-card/contact-card.component';
import { PopContactComponent } from './pages/contact/pop-contact/pop-contact.component';
import { ProviderComponent } from './pages/provider/provider.component';
import { ProviderCardComponent } from './pages/provider/provider-card/provider-card.component';
import { PopProviderComponent } from './pages/provider/pop-provider/pop-provider.component';


const routes: Routes = [
  { path: '',
    component: MainContactComponent,
    children: [
      {
        path: 'customer',
        component: CustomerComponent
      },
      {
        path: 'customer/:id',
        component: CustomerCardComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'contact/:id',
        component: ContactCardComponent
      },
      {
        path: 'provider',
        component: ProviderComponent
      },
      {
        path: 'provider/:id',
        component: ProviderCardComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
    MainContactComponent,
    CustomerComponent,
    CustomerCardComponent,
    PopCustomerComponent,
    ContactComponent,
    ContactCardComponent,
    PopContactComponent,
    ProviderComponent,
    ProviderCardComponent,
    PopProviderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MainAgGridModule
  ]
})
export class ContactModule { }
