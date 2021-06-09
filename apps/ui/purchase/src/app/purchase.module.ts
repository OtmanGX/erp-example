import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainAgGridModule } from '@tanglass-erp/ag-grid';
import { PurchaseComponent } from './purchase.component';
import { PopDeliveryComponent } from './pages/purchase/pop-delivery/pop-delivery.component'
import { PurchaseDeliveryComponent } from './pages/purchase/purchase-delivery.component'
import { StoreSharedModule} from "@tanglass-erp/store/shared";
import { PurchaseReturnedComponent } from '@TanglassUi/purchase/pages/purchase-returned/purchase-returned.component';


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
    },
    {
      path: 'returned',
      component: PurchaseReturnedComponent
    }
  ]
}
];
@NgModule({
  declarations: [
    PurchaseComponent,
    PurchaseDeliveryComponent,
    PopDeliveryComponent,
    PurchaseReturnedComponent,
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
