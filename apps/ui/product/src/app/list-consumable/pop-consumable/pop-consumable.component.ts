import { Component, Inject, ContentChild } from '@angular/core';
import { additionalParam_PD } from '@TanglassCore/models/produit/type_produit.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, DynamicFormComponent, FieldConfig } from '@tanglass-erp/material';
import { forkJoin } from 'rxjs';
import { Consumable } from '@tanglass-erp/core/product';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-consumable.component.html',
  styleUrls: ['./pop-consumable.component.scss'],
})
export class PopConsumableComponent extends FormDialog {
  @ContentChild(DynamicFormComponent) form: DynamicFormComponent;
  MP_types: additionalParam_PD[] = [];
  regConfig: FieldConfig[];

  constructor(
    public dialogRef: MatDialogRef<PopConsumableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Consumable,
  ) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    console.log("build Form");
    this.buildMpForm();
  }

  buildMpForm() {
    this.regConfig = [
      {type: "input", label: "Code", inputType: "text", name: "code", value: this.data.code,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Désignation", inputType: "text", name: "label", value: this.data.label,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "inputSelect", label: "Type", inputType: "text", name: "type", value: this.data.Mat?.type,
        options: this.MP_types.map((elem, index) => ({key: elem.name, value: elem.name}))},
    ];
  }
}
