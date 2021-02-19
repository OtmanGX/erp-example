import { AfterViewInit, ChangeDetectorRef, Component, Inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DynamicFormComponent, FieldConfig, FormDialog } from '@tanglass-erp/material';
import {
  regConfigTransferOrder,
  regConfigTransferOrderEdit,
  regConfigTransferOrderItem
} from '@TanglassUi/inventory/utils/forms';
import { WarehousesFacade } from '@tanglass-erp/store/inventory';
import { map, takeUntil } from 'rxjs/operators';
import { FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as accessorySelectors from '@TanglassStore/product/lib/selectors/accessory.selectors';
import * as glassSelectors from '@TanglassStore/product/lib/selectors/glass.selectors';
import * as AccessoryActions from '@TanglassStore/product/lib/actions/accessory.actions';
import * as GlassActions from '@TanglassStore/product/lib/actions/glass.actions';
import { WarehouseSubstanceFacade } from '@TanglassStore/shared/index';

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
  accessories$ = this.store.select(accessorySelectors.getAllAccessories);
  glasses$ = this.store.select(glassSelectors.getAllGlasses);
  substances  = {Verre: this.glasses$, Accessoire: this.accessories$};
  warehouses$ = this.facade.allWarehouses$
    .pipe(
      map(elem => elem.map(val => ({key: val.id, value: val.name})))
    );
  warehouses: Array<any>;

  @ViewChild('transfert_form', {read: DynamicFormComponent})
  transfertFormComponent: DynamicFormComponent;
  @ViewChildren('orderItem') dynamicForms: QueryList<DynamicFormComponent>;

  // Getters
  get transfertForm() {
    return this.transfertFormComponent?.form;
  }

  constructor(
    public dialogRef: MatDialogRef<PopDeliveryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store,
    private facade: WarehousesFacade,
    private Substancefacade:WarehouseSubstanceFacade,
    private cdr: ChangeDetectorRef
  ) {
    super(dialogRef, data);
  }

  ngOnInit() {
    this.store.dispatch(AccessoryActions.loadAccessories());
    this.store.dispatch(GlassActions.loadGlasses());
    super.ngOnInit();

  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    ['fromWarehouse', 'toWarehouse'].forEach(item => {
      this.transfertForm.get(item).valueChanges
        .subscribe(value => {this.syncWarehouses(item, value);
           //  if (item=='toWarehouse')this.affectWarehouse(value)
          }
        );
        
      }
    );
    this.dynamicForms.changes.subscribe(() => {
      this.assignOrderItemForms();
    });
    this.newOrderItem();
  }

  affectWarehouse(warehouseid){
    console.log(warehouseid)
   // this.accessories$ = this.Substancefacade.loadWarehouseAccessories({id:warehouseid});
   // this.glasses$ = this.Substancefacade.loadWarehouseGlasses({id:warehouseid});
    this.substances  = {Verre: this.glasses$, Accessoire: this.accessories$};
      console.log(this.substances)
  }

  buildForm(): void {
    this.regConfig = regConfigTransferOrder(this.data);
    this.warehouses$.pipe(takeUntil(this._onDestroy)).subscribe(value => {
      if (!!value)
        this.warehouses = value;
        this.regConfig = this.data?.id ?
          regConfigTransferOrderEdit(this.data, this.warehouses)
          : regConfigTransferOrder(this.data, this.warehouses);
    });
  }

  assignOrderItemForms() {
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

  newOrderItem() {
    this.orderForms.push(Object.assign([], regConfigTransferOrderItem({},
      this.glasses$)));
  }

  submitAll() {
    const formValue = this.transfertForm.value;
    formValue.order_items = this.formArray.value;
    this.submit(formValue);
  }

  deleteOrderItem(fields) {
    this.orderForms = this.orderForms.filter(item => item !== fields);
  }
}
