import { AfterViewInit, ChangeDetectorRef, Component, Inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DynamicFormComponent, FieldConfig, FormDialog } from '@tanglass-erp/material';

import {regConfigDelivery,regConfigDeliveryItem  } from "@TanglassUi/purchase/utils/forms";
import {SharedFacade } from '@TanglassStore/shared/index';
import { map, takeUntil } from 'rxjs/operators';
import { FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ColDefUtil } from 'ag-grid-community';


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
  substances = [];
  substances$  = this.facade.allShortProduct$
  .pipe(
    map(elem => elem.map(val => ({key: val.substanceid, value: val.label})))
  );;
  warehouses$ = this.facade.allShortWarehouse$
    .pipe(
      map(elem => elem.map(val => ({key: val.id, value: val.name})))
    );
  warehouses: Array<any>;
  providers$=this.facade.allShortProvider$.pipe(
    map(elem=>elem.map(val=>({key:val.code,value:val.name})))
  )

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
    private facade: SharedFacade,
    private cdr: ChangeDetectorRef
  ) {
    super(dialogRef, data);
  }

  ngOnInit() {

    super.ngOnInit();
    this.facade.loadAllShortWarehouses();
    this.facade.loadAllShortProduct();
    this.facade.loadAllShortProvider()

  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.dynamicForms.changes.subscribe(() => {
      this.assignDeliveryItemForms();
    });
    this.newItem();
  }

 

  buildForm(): void {
    this.regConfig = regConfigDelivery(this.data);
    this.regConfig = regConfigDelivery(this.data, this.providers$, this.warehouses$)
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
    this.orderForms.push(Object.assign([], regConfigDeliveryItem({}, this.substances$)));
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
