import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainAgGridModule } from '@tanglass-erp/ag-grid';
import { PurchaseComponent } from './purchase.component';
import { SubstanceComponent } from './pages/substances/substance.component';


const routes: Routes = [
  { path: '',
  component: PurchaseComponent,
  children: [
    {
      path: 'reception',
      children: [
        { path: '', component: SubstanceComponent },
      ],
      data: { title: 'Reception', breadcrumb: "" }
    }
  ]
}
];
@NgModule({
  declarations: [
    PurchaseComponent,
    SubstanceComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MainAgGridModule,

  ]
})
export class PurchaseModule { }
