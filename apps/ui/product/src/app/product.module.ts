import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ListGlasseComponent } from './pages/list-glasse/list-glasse.component';
import { MainAgGridModule } from '@tanglass-erp/ag-grid';
import { PopGlasseComponent } from './pages/list-glasse/pop-glasse/pop-glasse.component';
import { ListConsumableComponent } from './pages/list-consumable/list-consumable.component';
import { PopConsumableComponent } from './pages/list-consumable/pop-consumable/pop-consumable.component';
import { ListAccessoriesComponent } from './pages/list-accessories/list-accessories.component';
import { PopAccessoriesComponent } from './pages/list-accessories/pop-accessories/pop-accessories.component';
import { ListServiceComponent } from './pages/list-service/list-service.component';
import { PopServiceComponent } from './pages/list-service/pop-service/pop-service.component';
import { PopServiceGlasseComponent } from './pages/list-service-glasse/pop-service-glasse/pop-service-glasse.component';
import { ListServiceGlasseComponent } from './pages/list-service-glasse/list-service-glasse.component';
import { ListServiceConsumableComponent } from './pages/list-service-consumable/list-service-consumable.component';
import { PopServiceConsumableComponent } from './pages/list-service-consumable/pop-service-glasse/pop-service-consumable.component';
import { ServiceComponent } from './pages/list-service/service-card/service.component';
import { ServiceCardItemComponent } from './components/service-card-item/service-card-item.component';
import { AccessoryCardComponent } from './pages/list-accessories/accessory-card/accessory-card.component';

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
    },
    {
      path: 'listAccessoires/:id',
      component: AccessoryCardComponent,
    },
    {
      path: 'listServices',
      component: ListServiceComponent,
    },
    {
      path: 'listServicesVerres',
      component: ListServiceGlasseComponent,
    },
    {
      path: 'listServicesConsommable',
      component: ListServiceConsumableComponent,
    },
    {
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
    ServiceComponent,
    ServiceCardItemComponent,
    AccessoryCardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MainAgGridModule,
  ]
})
export class ProductModule { }
