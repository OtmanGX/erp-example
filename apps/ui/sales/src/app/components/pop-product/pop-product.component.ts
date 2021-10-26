import { AfterViewInit, Component, Inject, OnDestroy, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DynamicFormComponent, FieldConfig, FormDialog } from '@tanglass-erp/material';
import * as regConfigs from '@TanglassUi/sales/utils/forms';
import { Store } from '@ngrx/store';
import {
  AccessoryGroup,
  GlassGroup,
  ProductDraftFacade,
  Sales_Product_Type_Enum,
  ServiceGroup
} from '@tanglass-erp/store/sales';
import * as productStore from '@TanglassStore/product/index';
import { Intermediate_Data, SalesItem } from '@TanglassUi/sales/utils/models';
import { DimensionsComponent } from '@TanglassUi/sales/components/pop-product/product-dimensions/product-dimensions.component';

@Component({
  selector: 'ngx-pop-product',
  templateUrl: './pop-product.component.html',
  styleUrls: ['./pop-product.component.scss'],
})
export class PopProductComponent
  extends FormDialog
  implements AfterViewInit, OnDestroy {
  type: string;
  types: string[];
  regConfig: FieldConfig[];
  product_types = Sales_Product_Type_Enum;
  glasses$ = this.store.select(productStore.getAllGlasses);
  services$ = this.store.select(productStore.getAllServices);
  accessories$ = this.store.select(productStore.getAllAccessories);
  consumables$ = this.store.select(productStore.getAllConsumables);
  customerItems$ = this.store.select(productStore.getAllCustomerProducts);
  products;
  formValue: SalesItem = new SalesItem();
  warehouses;
  companies;
  substance_id;

  @ViewChild('product_form', { read: DynamicFormComponent })
  productFormComponent: DynamicFormComponent;
  @ViewChild('dimensions_form', { read: DimensionsComponent })
  dimensions_form: DimensionsComponent;
  get productForm() {
    return this.productFormComponent?.form;
  }
  constructor(
    public dialogRef: MatDialogRef<PopProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Intermediate_Data,
    private store: Store,
    private facade: ProductDraftFacade
  ) {
    super(dialogRef, data);
    this.data.companies
      .subscribe((companies) => (this.companies = companies))
      .unsubscribe();
    this.data.warehouses
      .subscribe((warehouses) => (this.warehouses = warehouses))
      .unsubscribe();
  }

  ngAfterViewInit(): void {
    this.productForm?.get('product_code')?.valueChanges?.subscribe((val) => {
      const found = this.products?.find(
        (element) => element.product?.code == val || element?.code == val
      );
      this.productForm.controls['price']?.setValue(found?.product?.price);
      this.productForm.controls['label'].setValue(
        found?.product?.label || found?.label
      );
      this.productForm.controls['unit'].setValue(
        found?.product?.unit || found?.unit
      );
      this.formValue.substance_id = found?.substanceid;
      let labelFactory =
        found?.serviceConfig?.labelFactory || found?.product?.labelFactory;
      labelFactory
        ? (this.formValue = {
            ...this.formValue,
            labelFactory: labelFactory,
          })
        : null;
    });
    this.productForm?.get('company_id')?.valueChanges?.subscribe((val) => {
      let found = this.companies.find((element) => element.key == val);
      this.formValue = { ...this.formValue, company_name: found?.value };
      this.warehouses = this.warehouses.filter(
        (warehouse) => warehouse.company_id == val
      );
      this.data.data = this.productForm.value;
      this.getItems(this.type);
    });
  }
  buildForm(): void {
    switch (this.data.product_type) {
      case Sales_Product_Type_Enum.Verre: {
        this.types = Object.values(GlassGroup);
        this.type = Sales_Product_Type_Enum.Verre;
        break;
      }
      case Sales_Product_Type_Enum.Accessoire: {
        this.types = Object.values(AccessoryGroup);
        this.type = Sales_Product_Type_Enum.Accessoire;
        break;
      }
      case Sales_Product_Type_Enum.Service: {
        // this.formValue['dependent_id'] = this.data.row.glass_draft.id;
        this.types = Object.values(ServiceGroup);
        this.type = Sales_Product_Type_Enum.Service;
        break;
      }
      default: {
        break;
      }
    }
    this.getItems(this.type);
  }
  getItems(type) {
    switch (type) {
      case Sales_Product_Type_Enum.Verre: {
        this.glasses$.subscribe((data) => (this.products = data)).unsubscribe();
        this.regConfig = regConfigs.regConfigGlassItem(
          this.glasses$,
          this.companies,
          this.warehouses,
          this.data
        );
        break;
      }
      case Sales_Product_Type_Enum.ArticleClient: {
        this.customerItems$
          .subscribe((data) => (this.products = data))
          .unsubscribe();
        this.regConfig = regConfigs.regConfigCustomerItem(
          this.customerItems$,
          this.data
        );
        break;
      }
      case Sales_Product_Type_Enum.Accessoire: {
        this.accessories$
          .subscribe((data) => (this.products = data))
          .unsubscribe();
        this.regConfig = regConfigs.regConfigAccessoireItem(
          this.accessories$,
          this.companies,
          this.warehouses,
          this.data
        );
        break;
      }
      case Sales_Product_Type_Enum.Consommable: {
        this.consumables$
          .subscribe((data) => (this.products = data))
          .unsubscribe();
        let rows = [];
        this.facade.selectedGlasses$
          .subscribe((glasses) => (rows = glasses))
          .unsubscribe();
        this.regConfig = regConfigs.regConfigConsumableItem(
          this.consumables$,
          this.companies,
          this.warehouses,
          { ...this.data, rows: rows.length ? rows : null }
        );
        break;
      }
      case Sales_Product_Type_Enum.Service: {
        this.services$.subscribe((data) => (this.products = data));
        let selectedGlasses = [];
        this.facade.selectedGlasses$.subscribe(
          (glasses) => (selectedGlasses = glasses)
        );
        selectedGlasses.length
          ? (this.regConfig = regConfigs.regConfigServiceItem(
              this.services$,
              this.companies,
              { ...this.data, rows: selectedGlasses }
            ))
          : null;
        break;
      }
    }
  }
  close() {
    this.dialogRef.close();
  }
  submitForm() {
    this.formValue = {
      ...this.formValue,
      ...this.productForm.value,
      type: this.type,
      dimensions: this.dimensions_form?.dimensions?.value,
    };
    this.submit(this.formValue);
  }
}
