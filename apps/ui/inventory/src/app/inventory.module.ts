import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
import { StoreProductModule } from '@TanglassStore/product/lib/store-product.module';
import { TransfertCardComponent } from './pages/warehouse-transfert/transfert-card/transfert-card.component';
import { StoreSharedModule } from '@tanglass-erp/store/shared';
import { PopOrderItemComponent } from './pages/warehouse-transfert/pop-order-item/pop-order-item.component';
import { PopOrderItemDeliverComponent } from './pages/warehouse-transfert/pop-order-item-deliver/pop-order-item-deliver.component';
import { WarehouseTransferredComponent } from '@TanglassUi/inventory/pages/warehouse-transferred/warehouse-transferred.component';
import { PopTransferItemComponent } from '@TanglassUi/inventory/pages/warehouse-transfert/pop-transfer-item/pop-transfer-item.component';


const routes: Routes = [
  { path: '',
    component: InventoryComponent,
    children: [
      {
        path: 'warehouses',
        children: [
          { path: '', component: WarehousesComponent },
          { path: ':id', component: WarehouseCardComponent, data: {breadcrumb: "D??tails"} },
        ],
        data: { title: 'Entrep??ts', breadcrumb: "Entrep??ts" }
      },
      {
        path: 'transfer',
        data: { title: 'Transfert', breadcrumb: "Transfert" },
        children : [
          { path: '', component: WarehouseTransfertComponent},
          { path: ':id', component: TransfertCardComponent, data: {breadcrumb: "D??tails"} },
        ],
      },
      {
        path: 'transferred',
        data: { title: 'Transf??r??s', breadcrumb: "Transf??r??s" },
        children : [
          { path: '', component: WarehouseTransferredComponent},
        ]
      },
      {
        path: 'warehouse-consumable',
        component: WarehouseConsumableComponent,
        data: {title: 'Entrep??ts de consommable', breadcrumb: "Entrep??ts de consommable"}
      },
      {
        path: 'warehouse-consumable/:id',
        component: WarehouseConsumableCardComponent,
        data: {title: 'Entrep??ts de consommable', breadcrumb: "Entrep??ts de consommable"}
      },
      {
        path: 'warehouse-accessory',
        component: WarehouseAccessoryComponent,
        data: {title: 'Entrep??ts d\'accessoires', breadcrumb: "Entrep??ts d\'accessoires"}
      },
      {
        path: 'warehouse-accessory/:id',
        component: WarehouseAccessoryCardComponent,
        data: {title: 'Entrep??ts d\'accessoires', breadcrumb: "D??tails"}
      },
      {
        path: 'warehouse-glasse',
        component: WarehouseGlasseComponent,
        data: {title: 'Entrep??ts de verre', breadcrumb: "Entrep??ts de verre"}
      },
      {
        path: 'warehouse-glasse/:id',
        component: WarehouseGlasseCardComponent,
        data: {breadcrumb: "D??tails"}
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
    PopTransferItemComponent,
    WarehouseTransfertComponent,
    TransfertCardComponent,
    PopOrderItemComponent,
    PopOrderItemDeliverComponent,
    WarehouseTransferredComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MainAgGridModule,
    StoreInventoryModule,
    StoreSharedModule,
    StoreProductModule
  ]
})
export class InventoryModule { }
