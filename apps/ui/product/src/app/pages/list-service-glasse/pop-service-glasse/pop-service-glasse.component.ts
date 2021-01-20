import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, FieldConfig } from '@tanglass-erp/material';
import { regConfigServiceGlass } from '../../../utils/forms';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-service-glasse.component.html',
  styleUrls: ['./pop-service-glasse.component.scss'],
})
export class PopServiceGlasseComponent extends FormDialog {
  title = "Ajouter une service de verre";
  regConfig: FieldConfig[];
  services = [];
  glasses = [];

  constructor(
    public dialogRef: MatDialogRef<PopServiceGlasseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super(dialogRef, data);
  }

  buildForm() {
    this.regConfig = regConfigServiceGlass(this.data, this.services, this.glasses);
  }
}
