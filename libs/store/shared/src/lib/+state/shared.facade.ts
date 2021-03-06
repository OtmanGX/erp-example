import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as ShortWarehouseSelectors from './short-warehouse.selectors';
import * as ShortWarehouseActions from './short-warehouse.actions';

import * as ShortCompanySelectors from './short-company.selectors';
import * as ShortCompaniesActions from './short-company.actions';
import * as ShortProductSelectors from './short-product.selectors';
import * as ShortProductsActions from './short-product.actions';
import * as ShortProviderActions from './short-provider.actions';
import * as ShortProviderSelectors from './short-provider.selectors';

import * as ShortEmployeesActions from './employees/employees.actions';
import * as ShortEmployeesSelectors from './employees/employees.selectors';


import * as OrdersSalepointActions from './orders-salepoint/orders-salepoint.actions';
import * as OrdersSalepointSelectors from './orders-salepoint/orders-salepoint.selectors';

import * as ShortSalePointActions from './short-salePoint.actions';
import * as ShortSalePointSelectors from './short-salePoint.selectors';
import * as WarehouseAccessoryActions from './warehouse-accessory.actions';
import * as WarehouseAccessorySelectors from './warehouse-accessory.selectors';
import * as WarehouseGlassActions from './warehouse-glass.actions';
import * as WarehouseGlassSelectors from './warehouse-glass.selectors';

@Injectable()
export class SharedFacade {
  allShortEmployees$ = this.store.pipe(select(ShortEmployeesSelectors.getAllEmployees));

  allOrdersSalepoint$ = this.store.pipe(
    select(OrdersSalepointSelectors.getAllOrdersSalepoint)
  );

  allShortCompany$ = this.store.pipe(
    select(ShortCompanySelectors.getAllShortCompany)
  );
  selectedShortCompany$ = this.store.pipe(
    select(ShortCompanySelectors.getSelected)
  );
  allShortProduct$ = this.store.pipe(
    select(ShortProductSelectors.getAllShortProduct)
  );
  selectedShortProduct$ = this.store.pipe(
    select(ShortProductSelectors.getSelected)
  );
  allShortProvider$ = this.store.pipe(
    select(ShortProviderSelectors.getAllShortProvider)
  );
  selectedShortProvider$ = this.store.pipe(
    select(ShortProviderSelectors.getSelected)
  );
  allShortSalePoint$ = this.store.pipe(
    select(ShortSalePointSelectors.getAllShortSalePoint)
  );
  selectedShortSalePoint$ = this.store.pipe(
    select(ShortSalePointSelectors.getSelected)
  );
  allShortWarehouse$ = this.store.pipe(
    select(ShortWarehouseSelectors.getAllShortWarehouse)
  );
  selectedShortWarehouse$ = this.store.pipe(
    select(ShortWarehouseSelectors.getSelected)
  );
  allWarehouseAccessory$ = this.store.pipe(
    select(WarehouseAccessorySelectors.getAllWarehouseAccessory)
  );
  selectedWarehouseAccessory$ = this.store.pipe(
    select(WarehouseAccessorySelectors.getSelected)
  );
  allWarehouseGlass$ = this.store.pipe(
    select(WarehouseGlassSelectors.getAllWarehouseGlass)
  );
  selectedWarehouseGlass$ = this.store.pipe(
    select(WarehouseGlassSelectors.getSelected)
  );
  constructor(
    private store: Store) { }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  loadAllOrdersSalepoint(salepoint_id: string) {
    this.dispatch(OrdersSalepointActions.loadOrdersSalepoint({salepoint_id}));
  }
  loadAllShortCompanies() {
    this.dispatch(ShortCompaniesActions.loadShortCompany());
  }

  loadAllEmployees() {
    this.dispatch(ShortEmployeesActions.loadEmployees());
  }

  loadAllShortProduct() {
    this.dispatch(ShortProductsActions.loadShortProduct());
  }

  loadAllShortProvider() {
    this.dispatch(ShortProviderActions.loadShortProvider());
  }

  loadAllShortSalePoint(ids?: string[]) {
    this.dispatch(ShortSalePointActions.loadShortSalePoint({ids}));
  }
  loadAllShortWarehouses() {
    this.dispatch(ShortWarehouseActions.loadShortWarehouse());
  }
  loadAllWarehouseAccessories(warehouseID) {
    this.dispatch(WarehouseAccessoryActions.loadWarehouseAccessory({id:warehouseID}));
  }
  loadAllWarehouseGlasses(warehouseID) {
    this.dispatch(WarehouseGlassActions.loadWarehouseGlasses({id:warehouseID}));
  }
}
