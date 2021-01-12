import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-pop-contact',
  templateUrl: './pop-contact.component.html',
  styleUrls: ['./pop-contact.component.scss'],
})
export class PopContactComponent extends FormDialog {

  regConfig: FieldConfig[];

  constructor(
    public dialogRef: MatDialogRef<PopContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super(dialogRef, data);
  }
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.regConfig = [
      {type: "input", name: "code", label: "Code", inputType: "text", value: this.data.code,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", name: "name", label: "Nom", inputType: "text", value: this.data.name,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", name: "mail", label: "E-mail", inputType: "text", value: this.data.mail},
      {type: "input", name: "note", label: "Note", inputType: "text", value: this.data.note},
      {type: "input", name: "phone", label: "Téléphone", inputType: "text", value: this.data.phone},
    ];
  }
}
