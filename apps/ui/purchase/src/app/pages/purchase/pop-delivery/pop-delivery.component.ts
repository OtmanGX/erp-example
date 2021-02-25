import { AfterViewInit, ChangeDetectorRef, Component, Inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DynamicFormComponent, FieldConfig, FormDialog } from '@tanglass-erp/material';

import {regConfigDelivery,regConfigDeliveryItem  } from "@TanglassUi/purchase/utils/forms";
import { ShortWarehouseFacade } from '@TanglassStore/shared/index';
import { map, takeUntil } from 'rxjs/operators';
import { FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ShortProductFacade } from '@TanglassStore/shared/index';


@Component({
  selector: 'ngx-pop-delivery',
  templateUrl: './pop-delivery.component.html',
  styleUrls: ['./pop-delivery.component.scss'],
})
export class PopDeliveryComponent extends FormDialog implements AfterViewInit {
  title = 'Réception Fournisseur';
  regConfig: FieldConfig[];
  formArray = new FormArray([]);
  orderForms = [];
  substances  = [];
  warehouses$ = this.facade.allShortWarehouse$
    .pipe(
      map(elem => elem.map(val => ({key: val.id, value: val.name})))
    );
  warehouses: Array<any>;
  providers$

  @ViewChild('delivery_form', {read: DynamicFormComponent})
  deliveryFormComponent: DynamicFormComponent;
  @ViewChildren('delivery_Item') dynamicForms: QueryList<DynamicFormComponent>;

  // Getters
  get deliveryForm() {
    return this.deliveryFormComponent?.form;
  }

  constructor(
    public dialogRef: MatDialogRef<PopDeliveryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store,
    private facade: ShortWarehouseFacade,
    private facadeProduct:ShortProductFacade,
    private cdr: ChangeDetectorRef
  ) {
    super(dialogRef, data);
  }

  ngOnInit() {
 
    super.ngOnInit();
    this.facade.loadAllShortWarehouses();
    this.facadeProduct.loadAllShortProduct()
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    ['provider', 'warehouse'].forEach(item => {
      this.deliveryForm.get(item).valueChanges
        .subscribe(value => {this.syncWarehouses(item, value);
           //  if (item=='toWarehouse')this.affectWarehouse(value)
          }
        );
        
      }
    );
    this.dynamicForms.changes.subscribe(() => {
      this.assignDeliveryItemForms();
    });
    this.newItem();
  }



  buildForm(): void {
    this.regConfig = regConfigDelivery(this.data);
    this.warehouses$.pipe(takeUntil(this._onDestroy)).subscribe(value => {
      if (!!value)
        this.warehouses = value;
        this.regConfig = regConfigDelivery(this.data, this.warehouses);
    });
  }

  assignDeliveryItemForms() {
    const forms = this.dynamicForms.map(item => {
      item.getField('typeSubstance').valueChanges.subscribe(value =>
        this.syncSubstances(item, value)
      );
      return item.form;
    });
    while (this.formArray.length) {
      this.formArray.removeAt(0);
    }
    forms.forEach((form) => this.formArray.push(form));
  }

  syncSubstances(component: DynamicFormComponent, typeSubstance: string) {
    component.remakeField('substance', {options: this.substances[typeSubstance]});
  }

  syncWarehouses(inputName, value) {
    const selectInput = this.regConfig.find(elem => elem.name === 'fromWarehouse');
    const selectInput2 = this.regConfig.find(elem => elem.name === 'toWarehouse');
    if (inputName === 'fromWarehouse')
      selectInput2.options = this.warehouses.filter(item => item.key !== value);
    else selectInput.options = this.warehouses.filter(item => item.key !== value);
  }

  newItem() {
    this.orderForms.push(Object.assign([], regConfigDeliveryItem({})));
  }

  submitAll() {
    const formValue = this.deliveryForm.value;
    formValue.order_items = this.formArray.value;
    this.submit(formValue);
  }

  deleteItem(fields) {
    this.orderForms = this.orderForms.filter(item => item !== fields);
  }
}