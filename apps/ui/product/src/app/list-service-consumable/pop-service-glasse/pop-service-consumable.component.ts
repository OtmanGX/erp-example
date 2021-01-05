import { Component, Inject, ContentChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, DynamicFormComponent, Groupfield, FieldConfig } from '@tanglass-erp/material';
import {
  ServiceConsumable,
} from '@tanglass-erp/core/product';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-service-consumable.component.html',
  styleUrls: ['./pop-service-consumable.component.scss'],
})
export class PopServiceConsumableComponent extends FormDialog {
  @ContentChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: FieldConfig[];

  constructor(
    public dialogRef: MatDialogRef<PopServiceConsumableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ServiceConsumable,
  ) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    this.buildMpForm();
  }

  buildMpForm() {
    this.regConfig = [
      {type: "select", label: "Service", inputType: "text", name: "service", value: this.data.service,
        options: []},
      {type: "input", label: "Quota", inputType: "text", name: "quota", value: this.data.quota},
      {type: "select", label: "Consommable", inputType: "text", name: "consumable", value: this.data.consumable,
            options: []},
      ]
  }
}
