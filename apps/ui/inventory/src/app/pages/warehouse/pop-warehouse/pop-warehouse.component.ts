import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';
import { regConfigWarehouse } from '@TanglassUi/inventory/utils/forms';

@Component({
  selector: 'ngx-pop-sale-points',
  templateUrl: './pop-warehouse.component.html',
  styleUrls: ['./pop-warehouse.component.scss'],
})
export class PopWarehouseComponent extends FormDialog {

  regConfig: FieldConfig[];

  constructor(
    public dialogRef: MatDialogRef<PopWarehouseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super(dialogRef, data);
  }
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.regConfig = regConfigWarehouse(this.data);
  }
}
