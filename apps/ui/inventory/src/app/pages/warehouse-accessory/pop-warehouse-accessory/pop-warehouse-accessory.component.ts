import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-pop-warehouse-accessory',
  templateUrl: './pop-warehouse-accessory.component.html',
  styleUrls: ['./pop-warehouse-accessory.component.scss'],
})
export class PopWarehouseAccessoryComponent extends FormDialog {

  regConfig: FieldConfig[];

  constructor(
    public dialogRef: MatDialogRef<PopWarehouseAccessoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super(dialogRef, data);
  }
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.regConfig = [];
  }
}
