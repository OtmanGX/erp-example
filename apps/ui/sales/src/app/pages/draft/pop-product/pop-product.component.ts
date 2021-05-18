import { Component, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';
import { regConfigGlassItem, regConfigAccessoireItem, regConfigServiceItem } from '@TanglassUi/sales/utils/forms';
import * as ShortCompanieSelectors from '@TanglassStore/shared/lib/+state/short-company.selectors';
import * as ShortCompanieActions from '@TanglassStore/shared/lib/+state/short-company.actions';
import * as shortWarehouseActions from '@TanglassStore/shared/lib/+state/short-warehouse.actions';
import * as shortWarehouseSelectors from '@TanglassStore/shared/lib/+state/short-warehouse.selectors';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ProductsTypes, GlassGroup, ServiceGroup, AccessoryGroup } from "../../../utils/enums";
import { DynamicFormComponent } from '@tanglass-erp/material';
import * as GlassActions from '@TanglassStore/product/lib/actions/glass.actions';
import * as GlassSelectors from '@TanglassStore/product/lib/selectors/glass.selectors';
import * as ServiceActions from '@TanglassStore/product/lib/actions/service.actions';
import * as ServiceSelectors from '@TanglassStore/product/lib/selectors/service.selectors';
import * as ConsumableActions from '@TanglassStore/product/lib/actions/consumable.actions';
import * as ConsumableSelectors from '@TanglassStore/product/lib/selectors/consumable.selectors';
import * as AccessoryActions from '@TanglassStore/product/lib/actions/accessory.actions';
import * as AccessorySelectors from '@TanglassStore/product/lib/selectors/accessory.selectors';
import { Intermediate_Data } from "../../../utils/models";
@Component({
  selector: 'ngx-pop-product',
  templateUrl: './pop-product.component.html',
  styleUrls: ['./pop-product.component.scss']
})
export class PopProductComponent extends FormDialog implements AfterViewInit {
  title = 'new item';
  type: string;
  types: string[];
  regConfig: FieldConfig[];
  companies$ = this.store.select(ShortCompanieSelectors.getAllShortCompany).pipe(map(item => item.map(company => ({ key: company.id, value: company.name }))));
  warehouses$ = this.store.select(shortWarehouseSelectors.getAllShortWarehouse).pipe(map(item => item.map(warehouse => ({ key: warehouse.id, value: warehouse.name }))));
  glasses$ = this.store.select(GlassSelectors.getAllGlasses)
  services$ = this.store.select(ServiceSelectors.getAllServices);
  accessories$ = this.store.select(AccessorySelectors.getAllAccessories)
  consumables$ = this.store.select(ConsumableSelectors.getAllConsumables)
  products; formValue = {};
  @ViewChild('product_form', { read: DynamicFormComponent }) productFormComponent: DynamicFormComponent;
  get productForm() {
    return this.productFormComponent?.form;
  }
  constructor(
    public dialogRef: MatDialogRef<PopProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Intermediate_Data,
    private store: Store
  ) { super(dialogRef, data) }

  ngOnInit(): void {
    this.store.dispatch(ShortCompanieActions.loadShortCompany());
    this.store.dispatch(shortWarehouseActions.loadShortWarehouse());
    this.buildForm();
  }
  ngAfterViewInit(): void {
    this.productForm.get('product_code')?.valueChanges.subscribe(
      (val) => {
        const found = this.products?.find(element => element.product?.code == val)
        this.productForm.controls['price'].setValue(found?.product?.price);
        this.productForm.controls['label'].setValue(found?.product?.label);
      }
    )
  }
  buildForm(): void {
    switch (this.data.product_type) {
      case ProductsTypes.glass: {
        // Glass Form with height and width; 
        this.types = Object.values(GlassGroup);
        this.type = ProductsTypes.glass;
        this.getItems(this.type);
        break;
      }
      case ProductsTypes.accessory: {
        //Accessory and Consumable Form as independents items; 
        this.types = Object.values(AccessoryGroup);
        this.type = ProductsTypes.accessory;
        this.getItems(this.type);
        break;
      }
      case ProductsTypes.service: {
        //Service and Consumable Form , linked  to Glass; 
        this.formValue['glass_draft_id'] = this.data.row.id;
        this.types = Object.values(ServiceGroup);
        this.type = ProductsTypes.service;
        this.getItems(this.type);
        break;
      }
      default: {
        break;
      }
    }
  }
  getItems(type) {
    switch (type) {
      case ProductsTypes.glass: {
        this.store.dispatch(GlassActions.loadGlasses());
        this.glasses$.subscribe(data => this.products = data)
        this.regConfig = regConfigGlassItem(this.data.data,
          this.glasses$.pipe(map(item => item.map(glass =>
            ({ id: glass.product.code, label: glass.product.label })))),
          this.companies$, this.warehouses$);
        break
      }
      case ProductsTypes.accessory: {
        this.store.dispatch(AccessoryActions.loadAccessories());
        this.accessories$.subscribe(data => this.products = data)
        this.regConfig = regConfigAccessoireItem(this.data.data,
          this.accessories$.pipe(map(item => item.map(accessory =>
            ({ id: accessory.product.code, label: accessory.product.label })))),
          this.companies$, this.warehouses$);
        break
      }
      case ProductsTypes.consumable: {
        this.store.dispatch(ConsumableActions.loadConsumables());
        this.consumables$.subscribe(data => this.products = data)
        this.regConfig = regConfigServiceItem(this.data.data,
          this.consumables$.pipe(map(item => item.map(consumable =>
            ({ id: consumable.product.code, label: consumable.product.label })))),
          this.companies$, this.warehouses$,
         (this.data.row.ml||this.data.row.m2)? [{ key: this.data.row.m2, value: this.data.row.m2 + '  m2' },
          { key: this.data.row.ml, value: this.data.row.ml + '  ml' }]:null);
        break
      }
      case ProductsTypes.service: {
        this.store.dispatch(ServiceActions.loadServices());
        this.services$.subscribe(data => this.products = data)
        this.regConfig = regConfigServiceItem(this.data.data,
          this.services$.pipe(map(item => item.map(service =>
            ({ id: service.product.code, label: service.product.label })))),
          this.companies$, this.warehouses$,
          [{ key: this.data.row.m2, value: this.data.row.m2 + '  m2' },
          { key: this.data.row.ml, value: this.data.row.ml + '  ml' }]);
        break
      }
    }
  }
  submitForm() {
    this.formValue = { ...this.formValue, ...this.productForm.value, type: this.type };
    this.submit(this.formValue);
  }
}
