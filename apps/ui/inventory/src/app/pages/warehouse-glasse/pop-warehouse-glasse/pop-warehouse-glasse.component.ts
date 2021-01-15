import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';
import { regConfigGlassWarehouse } from '@TanglassUi/inventory/utils/forms';

@Component({
  selector: 'ngx-pop-warehouse-glasse',
  templateUrl: './pop-warehouse-glasse.component.html',
  styleUrls: ['./pop-warehouse-glasse.component.scss'],
})
export class PopWarehouseGlasseComponent extends FormDialog {

  regConfig: FieldConfig[];

  constructor(
    public dialogRef: MatDialogRef<PopWarehouseGlasseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super(dialogRef, data);
  }

  buildForm(): void {
    this.regConfig = regConfigGlassWarehouse(this.data);
  }
}
