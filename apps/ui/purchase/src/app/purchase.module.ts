import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainAgGridModule } from '@tanglass-erp/ag-grid';
import { PurchaseComponent } from './purchase.component';
import { PopDeliveryComponent } from './pages/purchase/pop-delivery/pop-delivery.component'
import { PurchaseDeliveryComponent } from './pages/purchase/purchase-delivery.component'
//import { DeliveryCardComponent } from './pages/purchase/delivery-card/delivery-card.component'
import { StoreSharedModule} from "@tanglass-erp/store/shared";


const routes: Routes = [
  { path: '',
  component: PurchaseComponent,
  children: [
    {
      path: 'reception',
      children: [
        { path: '', component: PurchaseDeliveryComponent },
      ],
      data: { title: 'Réception', breadcrumb: "" }
    }
  ]
}
];
@NgModule({
  declarations: [
    PurchaseComponent,
    PurchaseDeliveryComponent,
    PopDeliveryComponent,
   // DeliveryCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MainAgGridModule,
    StoreSharedModule,

  ]
})
export class PurchaseModule { }
