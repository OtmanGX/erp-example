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
import { WarehouseAccessoryComponent } from './pages/warehouse-accessory/warehouse-accessory.component';
import { WarehouseAccessoryCardComponent } from './pages/warehouse-accessory/warehouse-accessory-card/warehouse-accessory-card.component';
import { WarehouseGlasseComponent } from './pages/warehouse-glasse/warehouse-glasse.component';
import { WarehouseGlasseCardComponent } from './pages/warehouse-glasse/warehouse-glasse-card/warehouse-glasse-card.component';
import { StoreInventoryModule } from '@TanglassStore/inventory/index';
import { WarehouseTransfertComponent } from './pages/warehouse-transfert/warehouse-transfert.component';
import { PopWarehouseTransfertComponent } from './pages/warehouse-transfert/pop-warehouse-transfert/pop-warehouse-transfert.component';
import { StoreProductModule } from '../../../../../libs/store/product/src';
import { TransfertCardComponent } from './pages/warehouse-transfert/transfert-card/transfert-card.component';
import {StoreSharedModule  } from "@TanglassStore/shared/index";

const routes: Routes = [
  { path: '',
    component: InventoryComponent,
    children: [
      {
        path: 'warehouses',
        children: [
          { path: '', component: WarehousesComponent },
          { path: ':id', component: WarehouseCardComponent },
        ],
        data: { title: 'Entrepôts', breadcrumb: "" }
      },
      {
        path: 'transfert',
        data: { title: 'Transfert', breadcrumb: "" },
        children : [
          { path: '', component: WarehouseTransfertComponent},
          { path: ':id', component: TransfertCardComponent },
        ]
      },
      {
        path: 'warehouse-consumable',
        component: WarehouseConsumableComponent,
        data: {title: 'Entrepôts de consommable', breadcrumb: ""}
      },
      {
        path: 'warehouse-consumable/:id',
        component: WarehouseConsumableCardComponent,
        data: {title: 'Entrepôts de consommable', breadcrumb: ""}
      },
      {
        path: 'warehouse-accessory',
        component: WarehouseAccessoryComponent
      },
      {
        path: 'warehouse-accessory/:id',
        component: WarehouseAccessoryCardComponent,
        data: {title: 'Entrepôts d\'accessoires', breadcrumb: ""}
      },
      {
        path: 'warehouse-glasse',
        component: WarehouseGlasseComponent,
        data: {title: 'Entrepôts de verre', breadcrumb: ""}
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
    WarehouseAccessoryComponent,
    WarehouseAccessoryCardComponent,
    WarehouseGlasseComponent,
    WarehouseGlasseCardComponent,
    PopWarehouseTransfertComponent,
    WarehouseTransfertComponent,
    TransfertCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MainAgGridModule,
    StoreInventoryModule,
    StoreProductModule,
    StoreSharedModule
  ]
})
export class InventoryModule { }
