import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-pop-warehouse-consumable',
  templateUrl: './pop-warehouse-consumable.component.html',
  styleUrls: ['./pop-warehouse-consumable.component.scss'],
})
export class PopWarehouseConsumableComponent extends FormDialog {

  regConfig: FieldConfig[];

  constructor(
    public dialogRef: MatDialogRef<PopWarehouseConsumableComponent>,
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
