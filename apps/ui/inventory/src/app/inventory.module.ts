import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { MainAgGridModule } from '@tanglass-erp/ag-grid';
import { WarehousesComponent } from './pages/warehouse/warehouses.component';
import { WarehouseCardComponent } from './pages/warehouse/warehouse-card/warehouse-card.component';
import { PopWarehouseComponent } from './pages/warehouse/pop-warehouse/pop-warehouse.component';
import { WarehouseConsumableComponent } from './pages/warehouse-consumable/warehouse-consumable.component';
import { WarehouseConsumableCardComponent } from './pages/warehouse-consumable/warehouse-consumable-card/warehouse-consumable-card.component';
import { PopWarehouseConsumableComponent } from './pages/warehouse-consumable/pop-warehouse-consumable/pop-warehouse-consumable.component';
import { WarehouseAccessoryComponent } from './pages/warehouse-accessory/warehouse-accessory.component';
import { WarehouseAccessoryCardComponent } from './pages/warehouse-accessory/warehouse-accessory-card/warehouse-accessory-card.component';
import { PopWarehouseAccessoryComponent } from './pages/warehouse-accessory/pop-warehouse-accessory/pop-warehouse-accessory.component';
import { WarehouseGlasseComponent } from './pages/warehouse-glasse/warehouse-glasse.component';
import { WarehouseGlasseCardComponent } from './pages/warehouse-glasse/warehouse-glasse-card/warehouse-glasse-card.component';
import { PopWarehouseGlasseComponent } from './pages/warehouse-glasse/pop-warehouse-glasse/pop-warehouse-glasse.component';


const routes: Routes = [
  { path: '',
    component: InventoryComponent,
    children: [
      {
        path: 'warehouses',
        component: WarehousesComponent
      },
      {
        path: 'warehouses/:id',
        component: WarehouseCardComponent
      },
      {
        path: 'warehouse-consumable',
        component: WarehouseConsumableComponent
      },
      {
        path: 'warehouse-consumable/:id',
        component: WarehouseConsumableCardComponent
      },
      {
        path: 'warehouse-accessory',
        component: WarehouseAccessoryComponent
      },
      {
        path: 'warehouse-accessory/:id',
        component: WarehouseAccessoryCardComponent
      },
      {
        path: 'warehouse-glasse',
        component: WarehouseGlasseComponent
      },
      {
        path: 'warehouse-glasse/:id',
        component: WarehouseGlasseCardComponent
      },
    ] }
];

@NgModule({
  declarations: [
    InventoryComponent,
    WarehousesComponent,
    WarehouseCardComponent,
    PopWarehouseComponent,
    WarehouseConsumableComponent,
    WarehouseConsumableCardComponent,
    PopWarehouseConsumableComponent,
    WarehouseAccessoryComponent,
    WarehouseAccessoryCardComponent,
    PopWarehouseAccessoryComponent,
    WarehouseGlasseComponent,
    WarehouseGlasseCardComponent,
    PopWarehouseGlasseComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MainAgGridModule
  ]
})
export class InventoryModule { }
