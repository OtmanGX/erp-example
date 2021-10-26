import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DynamicFormComponent, FieldConfig, FormDialog } from '@tanglass-erp/material';
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';
import { SharedFacade } from '@tanglass-erp/store/shared';
import { map } from 'rxjs/operators';
import { regConfigDeliveryItem } from '@TanglassUi/purchase/utils/forms';
import { SubstancesFacade } from '@TanglassStore/product/lib/+state/substances.facade';
import { DeliveriesFacade } from '@tanglass-erp/store/purchase';

@Component({
  selector: 'ngx-pop-delivery-transfer',
  templateUrl: './pop-delivery-item.component.html',
  styleUrls: ['./pop-delivery-item.component.scss'],
})
export class PopDeliveryItemComponent
  extends FormDialog
  implements AfterViewInit {
  title = 'Nouveau';
  substances$ = this.substancesFacade.allSubstances$;
  @ViewChild('delivery_form', { read: DynamicFormComponent })
  deliveryFormComponent: DynamicFormComponent;
  get DeliveryItemForm() {
    return this.deliveryFormComponent?.form;
  }
  regConfig: FieldConfig[];
  warehouses$ = this.facade.allShortWarehouse$.pipe(
    map((elem) => elem.map((val) => ({ key: val.id, value: val.name })))
  );
  products;
  constructor(
    public dialogRef: MatDialogRef<PopDeliveryItemComponent>,
    private facade: SharedFacade,
    private deliveryFacade: DeliveriesFacade,
    private substancesFacade: SubstancesFacade,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppState>
  ) {
    super(dialogRef, data);
  }
  submitForm() {
    this.deliveryFacade.addDeliveryItem(this.DeliveryItemForm.value);
    this.closePopup();
  }
  buildForm() {
    this.substances$.subscribe((data) => (this.products = data));
    if (this.data?.id) {
      this.title = 'Éditer ';
    }
    this.regConfig = regConfigDeliveryItem(
      [],
      this.substances$.pipe(
        map((data) => data.map((val) => ({ id: val.code, label: val.label })))
      ),
      this.warehouses$
    );
  }

  ngAfterViewInit(): void {
    this.DeliveryItemForm.get('code')?.valueChanges?.subscribe((val) => {
      const found = this.products?.find((element) => element?.code == val);
      this.DeliveryItemForm.controls['label'].setValue(
        found?.label || found?.label
      );
      this.DeliveryItemForm.controls['unit']?.setValue(found?.unit);
    });
  }
}
