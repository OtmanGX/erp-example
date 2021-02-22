import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';
import {
  regConfigDelivery,
  regConfigTransferOrderItemCard
} from '@TanglassUi/inventory/utils/forms';

@Component({
  selector: 'ngx-pop-sale-points',
  templateUrl: './pop-order-item-deliver.component.html',
  styleUrls: ['./pop-order-item-deliver.component.scss'],
})
export class PopOrderItemDeliverComponent extends FormDialog {
  title = 'Order de Transfert';
  regConfig: FieldConfig[];

  constructor(
    public dialogRef: MatDialogRef<PopOrderItemDeliverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super(dialogRef, data);
  }


  buildForm(): void {
    this.regConfig = regConfigDelivery(99);
  }
}
