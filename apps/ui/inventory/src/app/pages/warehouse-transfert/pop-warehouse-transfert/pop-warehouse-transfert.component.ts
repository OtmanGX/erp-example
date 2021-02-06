import { AfterViewInit, Component, Inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DynamicFormComponent, FieldConfig, FormDialog } from '@tanglass-erp/material';
import { regConfigTransferOrder, regConfigTransferOrderItem } from '@TanglassUi/inventory/utils/forms';
import { WarehousesFacade } from '@tanglass-erp/store/inventory';
import { map, take } from 'rxjs/operators';
import { FormArray } from '@angular/forms';
import * as SubstanceSelectors from '@TanglassStore/shared/lib/+state/warehouse-substance.selectors';
import { regConfigAddresses } from '../../../../../../contact/src/app/utils/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ngx-pop-sale-points',
  templateUrl: './pop-warehouse-transfert.component.html',
  styleUrls: ['./pop-warehouse-transfert.component.scss'],
})
export class PopWarehouseTransfertComponent extends FormDialog implements AfterViewInit {
  title = 'Transfert';
  regConfig: FieldConfig[];
  regConfig2: FieldConfig[];
  formArray = new FormArray([]);
  orderForms = [];
  substances$ = this.store.select(SubstanceSelectors.getAllWarehouseSubstance);
  @ViewChild('transfert_form', {read: DynamicFormComponent})
      transfertFormComponent: DynamicFormComponent;
  @ViewChildren('orderItem') dynamicForms: QueryList<DynamicFormComponent>;
  warehouses$ = this.facade.allWarehouses$
    .pipe(
      map(elem => elem.map(val => ({key: val.id, value: val.name})))
    );
  warehouses: Array<any>;

  // Getters
  get transfertForm() {
    return this.transfertFormComponent.form;
  }

  constructor(
    public dialogRef: MatDialogRef<PopWarehouseTransfertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store,
    private facade: WarehousesFacade
  ) {
    super(dialogRef, data);
  }

  ngAfterViewInit(): void {
    ['fromWarehouse', 'toWarehouse'].forEach(item => {
      this.transfertForm.get(item).valueChanges
        .subscribe(value => this.syncWarehouses(item, value));
      }
    );
    this.dynamicForms.changes.subscribe(() => this.assignOrderIemForms());
    this.newOrderItem();
  }



  buildForm(): void {
    this.regConfig = regConfigTransferOrder(this.data);
    this.regConfig2 = regConfigTransferOrderItem();
    this.warehouses$.pipe(take(1)).subscribe(value => {
      this.warehouses = value;
      this.regConfig = regConfigTransferOrder(this.data, this.warehouses);
    });
  }

  assignOrderIemForms() {
    const forms = this.dynamicForms.map(item => item.form);
    while (this.formArray.length) {
      this.formArray.removeAt(0);
    }
    forms.forEach((form) => this.formArray.push(form));
  }

  syncWarehouses(inputName, value) {
    const selectInput = this.regConfig.find(elem => elem.name === 'fromWarehouse');
    const selectInput2 = this.regConfig.find(elem => elem.name === 'toWarehouse');
    if (inputName === 'fromWarehouse')
      selectInput2.options = this.warehouses.filter(item => item.key !== value);
    else selectInput.options = this.warehouses.filter(item => item.key !== value);
  }

  newOrderItem() {
    this.orderForms.push(Object.assign([], regConfigTransferOrderItem()));
  }

  submitAll() {

  }

  deleteOrderItem(fields) {
    this.orderForms = this.orderForms.filter(item => item !== fields);
  }
}
