import { Component, Inject, ContentChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, DynamicFormComponent, FieldConfig } from '@tanglass-erp/material';
import { ServiceGlasse } from '@tanglass-erp/core/product';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-service-glasse.component.html',
  styleUrls: ['./pop-service-glasse.component.scss'],
})
export class PopServiceGlasseComponent extends FormDialog {
  @ContentChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: FieldConfig[];
  listCompanies = [];

  constructor(
    public dialogRef: MatDialogRef<PopServiceGlasseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ServiceGlasse,
  ) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    this.buildMpForm();
  }

  buildMpForm() {
    this.regConfig = [
      {type: "select", label: "Service", inputType: "text", name: "service", value: this.data.service,
        options: [], validations: [FormDialog.REQUIRED]},
      {type: "input", label: "Etiquette d\'usine", inputType: "text", name: "labelFactory",
        value: this.data.labelFactory, validations: [FormDialog.REQUIRED]},
      {type: "select", label: "Verre", inputType: "text", name: "glasse", value: this.data.glasse,
            options: [], validations: [FormDialog.REQUIRED]},
      ]
  }
}
