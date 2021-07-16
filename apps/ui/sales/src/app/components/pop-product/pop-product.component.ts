import {
  Component,
  Inject,
  AfterViewInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';
import * as regConfigs from '@TanglassUi/sales/utils/forms';
import { Store } from '@ngrx/store';
import {
  Sales_Product_Type_Enum,
  GlassGroup,
  ServiceGroup,
  AccessoryGroup,
} from '@tanglass-erp/store/sales';
import { DynamicFormComponent } from '@tanglass-erp/material';
import * as productStore from '@TanglassStore/product/index';
import { Intermediate_Data, SalesItem } from '@TanglassUi/sales/utils/models';
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
  @ViewChild('product_form', { read: DynamicFormComponent })
  productFormComponent: DynamicFormComponent;
  get productForm() {
    return this.productFormComponent?.form;
  }
  constructor(
    public dialogRef: MatDialogRef<PopProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Intermediate_Data,
    private store: Store
  ) {
    super(dialogRef, data);
    this.companies = this.data.companies;
    this.warehouses = this.data.warehouses;
  }

  ngAfterViewInit(): void {
    this.productForm.get('product_code')?.valueChanges?.subscribe((val) => {
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
      found?.substanceid
        ? (this.formValue = {
            ...this.formValue,
            labelFactory: found?.labelFactory,
          })
        : null;
      let labelFactory =
        found?.serviceConfig?.labelFactory || found?.product?.labelFactory;
      labelFactory
        ? (this.formValue = {
            ...this.formValue,
            labelFactory: labelFactory,
          })
        : null;
    });
    this.productForm.get('company_id')?.valueChanges?.subscribe((val) => {
      let found = this.companies.find((element) => element.key == val);
      this.formValue = { ...this.formValue, company_name: found?.value };
      this.warehouses = this.data.warehouses.filter(
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
        this.formValue['dependent_id'] = this.data.row.glass_draft.id;
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
        this.store.dispatch(productStore.loadGlasses());
        this.glasses$.subscribe((data) => (this.products = data));
        this.regConfig = regConfigs.regConfigGlassItem(
          this.glasses$,
          this.companies,
          this.warehouses,
          this.data
        );
        break;
      }
      case Sales_Product_Type_Enum.ArticleClient: {
        this.store.dispatch(productStore.loadCustomerProducts());
        this.customerItems$.subscribe((data) => (this.products = data));
        this.regConfig = regConfigs.regConfigCustomerItem(
          this.customerItems$,
          this.data
        );
        break;
      }
      case Sales_Product_Type_Enum.Accessoire: {
        this.store.dispatch(productStore.loadAccessories());
        this.accessories$.subscribe((data) => (this.products = data));
        this.regConfig = regConfigs.regConfigAccessoireItem(
          this.accessories$,
          this.companies,
          this.warehouses,
          this.data
        );
        break;
      }
      case Sales_Product_Type_Enum.Consommable: {
        this.store.dispatch(productStore.loadConsumables());
        this.consumables$.subscribe((data) => (this.products = data));
        this.regConfig = regConfigs.regConfigConsumableItem(
          this.consumables$,
          this.companies,
          this.warehouses,
          this.data
        );
        break;
      }
      case Sales_Product_Type_Enum.Service: {
        this.store.dispatch(productStore.loadServices());
        this.services$.subscribe((data) => (this.products = data));
        this.regConfig = regConfigs.regConfigServiceItem(
          this.services$,
          this.companies,
          this.data
        );
        break;
      }
    }
  }

  submitForm() {
    this.formValue = {
      ...this.formValue,
      ...this.productForm.value,
      type: this.type,
    };
    this.submit(this.formValue);
  }
}
