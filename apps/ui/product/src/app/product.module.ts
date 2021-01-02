import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ListGlasseComponent } from './list-glasse/list-glasse.component';
import { MainAgGridModule } from '@tanglass-erp/ag-grid';
import { PopGlasseComponent } from './list-glasse/pop-glasse/pop-glasse.component';
import { ListConsumableComponent } from './list-consumable/list-consumable.component';
import { PopConsumableComponent } from './list-consumable/pop-consumable/pop-consumable.component';
import { ListAccessoriesComponent } from './list-accessories/list-accessories.component';
import { PopAccessoriesComponent } from './list-accessories/pop-accessories/pop-accessories.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { PopServiceComponent } from './list-service/pop-service/pop-service.component';
import { PopServiceGlasseComponent } from './list-service-glasse/pop-service-glasse/pop-service-glasse.component';
import { ListServiceGlasseComponent } from './list-service-glasse/list-service-glasse.component';
import { ListServiceConsumableComponent } from './list-service-consumable/list-service-consumable.component';
import { PopServiceConsumableComponent } from './list-service-consumable/pop-service-glasse/pop-service-consumable.component';
import { ServiceComponent } from './service/service.component';

;

const routes: Routes = [
  { path: '', component: ProductComponent,
  children: [
    {
      path: '',
      redirectTo: 'ListVerre',
      pathMatch: 'full'
    },
    {
      path: 'ListVerre',
      component: ListGlasseComponent ,
    },
    {
      path: 'listConsommables',
      component: ListConsumableComponent,
    },
    {
      path: 'listAccessoires',
      component: ListAccessoriesComponent,
    },{
      path: 'listServices',
      component: ListServiceComponent,
    },
    {
      path: 'listServicesVerres',
      component: ListServiceGlasseComponent,
    },
    {
      path: 'listServicesConsommable',
      component: ListServiceGlasseComponent,
    },{
      path: 'service/:id',
      component: ServiceComponent,
    },
  ]},
];
@NgModule({
  declarations: [
    ProductComponent,
    ListGlasseComponent,
    PopGlasseComponent,
    ListConsumableComponent,
    PopConsumableComponent,
    ListAccessoriesComponent,
    PopAccessoriesComponent,
    ListServiceComponent,
    PopServiceComponent,
    ListServiceGlasseComponent,
    PopServiceGlasseComponent,
    ListServiceConsumableComponent,
    PopServiceConsumableComponent,
    ServiceComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MainAgGridModule,
  ]
})
export class ProductModule { }
