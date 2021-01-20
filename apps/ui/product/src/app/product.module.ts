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
import { HighlightDirectiveDirective } from './directives/highlight-directive.directive';
import { GlassCardComponent } from './pages/list-glasse/glass-card/glass-card.component';
import { ConsumableCardComponent } from './pages/list-consumable/consumable-card/consumable-card.component';
import { ServiceGlassCardComponent } from './pages/list-service-glasse/service-glass-card/service-glass-card.component';


const popUps = [
  PopConsumableComponent,
  PopAccessoriesComponent,
  PopGlasseComponent,
  PopServiceComponent,
  PopServiceConsumableComponent,
  PopServiceGlasseComponent,
];


const pages = [
  ProductComponent,
  ListGlasseComponent,
  ListConsumableComponent,
  ListAccessoriesComponent,
  ListServiceComponent,
  ListServiceGlasseComponent,
  ListServiceConsumableComponent,
];

const cardPages = [
  ServiceComponent,
  AccessoryCardComponent,
  GlassCardComponent,
  ConsumableCardComponent,
  ServiceGlassCardComponent
];

const otherComponents = [
  ServiceCardItemComponent,
];

const directives = [
  HighlightDirectiveDirective
];


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
      path: 'ListVerre/:id',
      component: GlassCardComponent ,
    },
    {
      path: 'listConsommables',
      component: ListConsumableComponent,
    },
    {
      path: 'listConsommables/:id',
      component: ConsumableCardComponent,
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
      path: 'service/:id',
      component: ServiceComponent,
    },
    {
      path: 'listServicesVerres',
      component: ListServiceGlasseComponent,
    },
    {
      path: 'listServicesVerres/:id',
      component: ServiceGlassCardComponent,
    },
    {
      path: 'listServicesConsommable',
      component: ListServiceConsumableComponent,
    }
  ]},
];
@NgModule({
  declarations: [
    ...pages,
    ...cardPages,
    ...otherComponents,
    ...directives,
    ...popUps
  ],
  imports: [
    RouterModule.forChild(routes),
    MainAgGridModule,
  ]
})
export class ProductModule { }
